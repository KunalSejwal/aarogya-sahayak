import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import healthEmblem from "@/assets/health-emblem.jpg";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img 
              src={healthEmblem} 
              alt="Government of Odisha Health Department" 
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h1 className="text-lg font-semibold text-gov-navy">स्वास्थ्य सहायक</h1>
              <p className="text-xs text-muted-foreground">Government of Odisha</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-health-primary transition-colors">Home</a>
            <a href="#chat" className="text-foreground hover:text-health-primary transition-colors">Health Chat</a>
            <a href="#info" className="text-foreground hover:text-health-primary transition-colors">Health Info</a>
            <a href="#vaccination" className="text-foreground hover:text-health-primary transition-colors">Vaccination</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Languages className="h-4 w-4 mr-1" />
              English
            </Button>
            <Button variant="government" size="sm">
              Emergency
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;