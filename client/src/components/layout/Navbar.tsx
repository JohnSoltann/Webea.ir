import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Info, Briefcase, Gift, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "صفحه اصلی", icon: Home },
    { href: "/about", label: "درباره ما", icon: Info },
    { href: "/services", label: "خدمات", icon: Briefcase },
    { href: "/benefits", label: "مزایا", icon: Gift },
    { href: "/contact", label: "تماس با ما", icon: Phone },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold heading-gradient cursor-pointer">وبی</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 space-x-reverse">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`nav-link cursor-pointer flex items-center gap-2 ${
                    location === link.href ? "text-[#FF69B4]" : ""
                  }`}>
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </span>
                </Link>
              ))}
              <Button className="clay-button">
                ثبت سفارش
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4B0082] hover:text-[#FF69B4]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer flex items-center gap-2 ${
                    location === link.href
                      ? "text-[#FF69B4]"
                      : "text-[#4B0082] hover:text-[#FF69B4]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </span>
              </Link>
            ))}
            <Button className="clay-button w-full">
              ثبت سفارش
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;