import Header from "@/components/Header";
import FaceRecognitionDropzone from "@/components/FaceRecognitionDropzone";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Распознавание лиц с высокой точностью
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Загрузите изображение и получите мгновенный анализ лица с использованием передовых технологий искусственного интеллекта
            </p>
            
            <FaceRecognitionDropzone />
          </div>
        </section>
        
        <Features />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Как это работает?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Загрузите изображение</h3>
                <p className="text-gray-600">Перетащите файл или выберите изображение с устройства</p>
              </div>
              
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Анализ изображения</h3>
                <p className="text-gray-600">Наш алгоритм автоматически проанализирует загруженное фото</p>
              </div>
              
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Получите результат</h3>
                <p className="text-gray-600">Просмотрите подробный отчет о распознанных лицах</p>
              </div>
            </div>
          </div>
        </section>
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

export default Index;
