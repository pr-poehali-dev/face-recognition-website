
import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface RecognitionRecord {
  id: string;
  date: string;
  confidence: number;
  image: string;
}

const History = () => {
  const [records, setRecords] = useState<RecognitionRecord[]>([
    {
      id: "1",
      date: "23 июля 2023, 14:32",
      confidence: 94,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      date: "21 июля 2023, 09:15",
      confidence: 88,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      date: "20 июля 2023, 16:47",
      confidence: 96,
      image: "/placeholder.svg"
    }
  ]);

  const handleDeleteRecord = (id: string) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">История распознаваний</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="high">Высокая точность</TabsTrigger>
            <TabsTrigger value="low">Низкая точность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            {records.length > 0 ? (
              records.map((record) => (
                <Card key={record.id} className="p-6 animate-fade-in hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 h-48 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                      <img 
                        src={record.image} 
                        alt="Распознанное изображение" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">Распознавание #{record.id}</h3>
                          <p className="text-sm text-gray-500">{record.date}</p>
                        </div>
                        <div className="flex items-center">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            record.confidence > 90 
                              ? "bg-green-100 text-green-800" 
                              : record.confidence > 75 
                                ? "bg-yellow-100 text-yellow-800" 
                                : "bg-red-100 text-red-800"
                          }`}>
                            {record.confidence}% точность
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Обнаружено элементов</h4>
                            <p className="text-md">5 элементов</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Размер файла</h4>
                            <p className="text-md">1.2 МБ</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex space-x-2">
                        <Button variant="outline" size="sm">Просмотреть детали</Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteRecord(record.id)}
                        >
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">История пуста</h3>
                <p className="text-gray-500 mt-2">У вас пока нет истории распознаваний лиц</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="high" className="space-y-4">
            {records.filter(r => r.confidence > 90).length > 0 ? (
              records
                .filter(r => r.confidence > 90)
                .map((record) => (
                  <Card key={record.id} className="p-6 animate-fade-in hover:shadow-md transition-shadow">
                    {/* Аналогичный контент как выше */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-48 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src={record.image} alt="Распознанное изображение" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium">Распознавание #{record.id}</h3>
                            <p className="text-sm text-gray-500">{record.date}</p>
                          </div>
                          <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {record.confidence}% точность
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="mt-6 flex space-x-2">
                          <Button variant="outline" size="sm">Просмотреть детали</Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600" onClick={() => handleDeleteRecord(record.id)}>
                            Удалить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Нет записей с высокой точностью распознавания</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="low" className="space-y-4">
            {records.filter(r => r.confidence <= 90).length > 0 ? (
              records
                .filter(r => r.confidence <= 90)
                .map((record) => (
                  <Card key={record.id} className="p-6 animate-fade-in hover:shadow-md transition-shadow">
                    {/* Аналогичный контент как выше */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-48 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src={record.image} alt="Распознанное изображение" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium">Распознавание #{record.id}</h3>
                            <p className="text-sm text-gray-500">{record.date}</p>
                          </div>
                          <div className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                            {record.confidence}% точность
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="mt-6 flex space-x-2">
                          <Button variant="outline" size="sm">Просмотреть детали</Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600" onClick={() => handleDeleteRecord(record.id)}>
                            Удалить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Нет записей с низкой точностью распознавания</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
                    <circle cx="9" cy="9" r="1" />
                    <circle cx="15" cy="9" r="1" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">ЛицоСкан</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm">© 2023 ЛицоСкан. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default History;
