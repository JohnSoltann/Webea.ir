import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'رضا کریمی',
    role: 'مدیرعامل فروشگاه‌های زنجیره‌ای ستاره',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800',
    quote: 'همکاری با تیم وبی یکی از بهترین تصمیمات ما بود. فروش آنلاین ما به طرز چشمگیری افزایش پیدا کرد.',
  },
  {
    name: 'مریم احمدی',
    role: 'بنیانگذار استارتاپ تک‌نو',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
    quote: 'سرعت و کیفیت کار تیم وبی فوق‌العاده است. در کمترین زمان به بهترین نتیجه رسیدیم.',
  },
  {
    name: 'امیر محمدی',
    role: 'مدیر فنی شرکت مهندسی آوا',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800',
    quote: 'پشتیبانی عالی و به‌روزرسانی‌های منظم از ویژگی‌های بارز وبی است. کاملاً قابل اعتماد و حرفه‌ای.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E8D7F1]/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">نظرات مشتریان</h2>
          <p className="text-gray-600">آنچه مشتریان درباره همکاری با ما می‌گویند</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="clay-card group hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <Quote className="absolute top-0 right-0 w-8 h-8 text-[#A8DADC] opacity-50" />
                <div className="pt-8">
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden clay-card p-1 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}