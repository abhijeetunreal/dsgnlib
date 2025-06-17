
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { useSimpleRouter } from '@/hooks/useSimpleRouter';

const navLinks = [
  { href: "#/home", label: "Home" },
  { href: "#/works", label: "Works" },
  { href: "#/leaderboard", label: "Leaderboard" },
  { href: "#/merch", label: "Merch" },
];

const Header = () => {
  const { path } = useSimpleRouter();

  const isNavLinkActive = (href: string) => {
    // href is like '/#/home', path from hook is like '/home'
    return path === href.substring(2);
  };

  return (
    <header className="border-b p-4">
      <div className="flex justify-between items-center">
        <a href="#/" className="text-2xl md:text-4xl font-bold hover:text-primary transition-colors">
          DSGN.LIB
        </a>
        <nav className="hidden md:flex items-center space-x-2 text-lg">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={
                `hover:text-primary transition-colors px-4 py-2 rounded-md ${isNavLinkActive(link.href) ? 'text-primary bg-muted' : ''}`
              }
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#/submit">
              Submit
            </a>
          </Button>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l bg-background w-full max-w-sm">
              <nav className="flex flex-col space-y-6 text-2xl mt-12 p-4">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={
                      `hover:text-primary transition-colors ${isNavLinkActive(link.href) ? 'text-primary' : ''}`
                    }
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="#/submit" className="w-full text-center">
                    Submit
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
