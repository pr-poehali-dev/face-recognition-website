import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
              <circle cx="9" cy="9" r="1" />
              <circle cx="15" cy="9" r="1" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">ЛицоСкан</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Button variant="link" className="text-gray-600 hover:text-primary">
                Главная
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-gray-600 hover:text-primary">
                О проекте
              </Button>
            </li>
            <li>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Начать
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
