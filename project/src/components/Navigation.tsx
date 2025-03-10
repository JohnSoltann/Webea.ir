import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A8DADC] to-[#FFB997]">
              وبی
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
              <NavLink href="#services">خدمات</NavLink>
              <NavLink href="#about">درباره ما</NavLink>
              <NavLink href="#portfolio">نمونه کارها</NavLink>
              <NavLink href="#testimonials">نظرات مشتریان</NavLink>
              <NavLink href="#contact">تماس با ما</NavLink>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services">خدمات</MobileNavLink>
            <MobileNavLink href="#about">درباره ما</MobileNavLink>
            <MobileNavLink href="#portfolio">نمونه کارها</MobileNavLink>
            <MobileNavLink href="#testimonials">نظرات مشتریان</MobileNavLink>
            <MobileNavLink href="#contact">تماس با ما</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all"
    >
      {children}
    </a>
  );
}