
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="w-6 h-6 text-accent" />
            <span className="text-xl font-semibold">ChatGenius</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-primary hover:text-accent transition-colors">Services</Link>
            <Link to="/#why-us" className="text-primary hover:text-accent transition-colors">Why Us</Link>
            <Link to="/portfolio" className="text-primary hover:text-accent transition-colors">Portfolio</Link>
            <Link to="/contact">
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
