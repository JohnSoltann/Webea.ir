import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">وبی</h3>
            <p className="text-gray-600">
              ارائه خدمات حرفه‌ای طراحی وب، سئو و بهینه‌سازی فروش
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="ml-2" size={20} />
                <span className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center">
                <Mail className="ml-2" size={20} />
                <span className="text-gray-600">info@webi.ir</span>
              </div>
              <div className="flex items-center">
                <MapPin className="ml-2" size={20} />
                <span className="text-gray-600">تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-600 hover:text-gray-900">خدمات</a>
              <a href="#portfolio" className="block text-gray-600 hover:text-gray-900">نمونه کارها</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900">درباره ما</a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-900">تماس با ما</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            تمامی حقوق برای وبی محفوظ است © ۱۴۰۲
          </p>
        </div>
      </div>
    </footer>
  );
}