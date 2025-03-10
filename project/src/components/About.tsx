import React from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'کیفیت',
    description: 'استفاده از بهترین تکنولوژی‌ها و استانداردهای روز دنیا',
  },
  {
    icon: Zap,
    title: 'امنیت',
    description: 'حفاظت از داده‌های شما با پیشرفته‌ترین روش‌های امنیتی',
  },
  {
    icon: Heart,
    title: 'پشتیبانی',
    description: 'همراهی ۲۴ ساعته و پاسخگویی سریع به نیازهای شما',
  },
];

const teamMembers = [
  {
    name: 'علی محمدی',
    role: 'مدیر فنی',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800',
  },
  {
    name: 'سارا احمدی',
    role: 'طراح ارشد',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800',
  },
  {
    name: 'محمد کریمی',
    role: 'متخصص سئو',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#E8D7F1]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">درباره وبی</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تیم متخصص وبی با تجربه‌ای ارزشمند در حوزه طراحی وب و دیجیتال مارکتینگ، آماده خدمت‌رسانی به کسب و کار شماست
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="clay-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#A8DADC] to-[#FFB997] flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="clay-card group hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden clay-card p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}