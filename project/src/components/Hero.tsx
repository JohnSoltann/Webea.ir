import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              وبی = هویت آنلاین شما
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              با خدمات حرفه‌ای طراحی وب، سئو و بهینه‌سازی فروش، کسب و کار خود را متحول کنید
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="clay-button bg-[#A8DADC] text-white">
                سفارش طراحی
                <ArrowLeft className="mr-2" size={20} />
              </button>
              <button className="clay-button bg-white text-gray-800">
                مشاوره رایگان
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="clay-card aspect-video">
              <video
                className="w-full h-full object-cover rounded-[20px]"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
              >
                <source
                  src="https://cdn.example.com/webi-intro.webm"
                  type="video/webm"
                />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
                  alt="Webi Introduction"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}