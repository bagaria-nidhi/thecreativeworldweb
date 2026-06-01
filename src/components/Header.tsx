import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/workshop", label: "WORKSHOP" },
  { to: "/events", label: "EVENTS" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="The Creative World" className="h-14 w-auto object-contain" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-kids-navy hover:text-kids-blue transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="playful" size="sm" className="ml-2">Enroll Now</Button>
        </nav>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white">
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" className="block mb-4" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="The Creative World" className="h-12 w-auto object-contain" />
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-kids-navy hover:text-kids-blue transition-all font-medium text-lg py-2 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="playful" size="lg" className="mt-4 w-full">
                Enroll Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
