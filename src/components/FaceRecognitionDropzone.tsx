import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface FaceRecognitionResult {
  confidence: number;
  landmarks?: {
    eyes: { left: [number, number], right: [number, number] };
    nose: [number, number];
    mouth: [number, number, number, number];
  };
}

const FaceRecognitionDropzone = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<FaceRecognitionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (files.length) {
      const file = files[0];
      if (!file.type.match('image.*')) {
        toast({
          title: "Ошибка",
          description: "Пожалуйста, загрузите изображение",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
          analyzeImage();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Имитация процесса распознавания лица (в реальном проекте здесь был бы API запрос)
    setTimeout(() => {
      setIsAnalyzing(false);
      // Имитация результата
      setResult({
        confidence: 0.92,
        landmarks: {
          eyes: { left: [120, 100], right: [190, 100] },
          nose: [155, 140],
          mouth: [135, 180, 175, 180]
        }
      });
    }, 2000);
  };

  const resetImage = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="p-6 animate-fade-in">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
            image ? "border-primary" : "border-gray-300 hover:border-primary"
          }`}
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
            ref={fileInputRef}
          />

          {!image ? (
            <div className="py-12">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
                  <circle cx="9" cy="9" r="1" />
                  <circle cx="15" cy="9" r="1" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Загрузите изображение для распознавания лица
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Перетащите изображение сюда или нажмите на кнопку ниже
              </p>
              <Button onClick={handleButtonClick} className="mt-2">
                Выбрать файл
              </Button>
            </div>
          ) : (
            <div className="relative">
              <div className="relative group">
                <img
                  src={image}
                  alt="Загруженное изображение"
                  className="max-h-[400px] mx-auto rounded-md"
                />
                {result && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute border-2 border-primary rounded-lg w-[60%] h-[70%] top-[15%] left-[20%]"></div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-center space-x-3">
                <Button onClick={resetImage} variant="outline">
                  Сбросить
                </Button>
                <Button 
                  onClick={analyzeImage} 
                  disabled={isAnalyzing}
                  className={isAnalyzing ? "animate-pulse-purple" : ""}
                >
                  {isAnalyzing ? "Анализ..." : "Распознать лицо"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {result && (
        <Card className="p-6 mt-6 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Результаты распознавания</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <span className="font-medium">Вероятность распознавания:</span>
              <span className="text-primary font-semibold">{Math.round(result.confidence * 100)}%</span>
            </div>
            <div className="p-3 bg-muted rounded-md">
              <div className="font-medium mb-2">Обнаружены элементы лица:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Глаза (2)</li>
                <li>Нос</li>
                <li>Рот</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FaceRecognitionDropzone;
