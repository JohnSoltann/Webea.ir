import React from 'react';
import { Palette, Search, Headphones, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'طراحی سایت',
    description: 'طراحی خلاقانه و حرفه‌ای وب‌سایت با جدیدترین تکنولوژی‌ها',
  },
  {
    icon: Search,
    title: 'سئو',
    description: 'بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه',
  },
  {
    icon: Headphones,
    title: 'پشتیبانی',
    description: 'پشتیبانی ۲۴/۷ و بروزرسانی مداوم سایت شما',
  },
  {
    icon: TrendingUp,
    title: 'افزایش فروش',
    description: 'استراتژی‌های هوشمند برای افزایش نرخ تبدیل و فروش',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">خدمات ما</h2>
          <p className="text-gray-600">راهکارهای جامع برای رشد کسب و کار آنلاین شما</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="clay-card group hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#E8D7F1] to-[#A8DADC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}