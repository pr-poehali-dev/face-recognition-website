
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                <path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
                <circle cx="9" cy="9" r="1" />
                <circle cx="15" cy="9" r="1" />
              </svg>
            </div>
            <span className="text-xl font-bold">ЛицоСкан</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Главная</Link>
            <Link to="/history" className="text-gray-700 hover:text-primary font-medium">История</Link>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">О технологии</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
