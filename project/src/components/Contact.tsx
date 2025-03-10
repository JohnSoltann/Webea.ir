import React, { useState } from 'react';
import { Send } from 'lucide-react';

const services = [
  { id: 'web', label: 'طراحی سایت', basePrice: 15000000 },
  { id: 'seo', label: 'سئو', basePrice: 8000000 },
  { id: 'support', label: 'پشتیبانی', basePrice: 5000000 },
  { id: 'sales', label: 'افزایش فروش', basePrice: 12000000 },
];

export function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleServiceChange = (serviceId) => {
    const newSelected = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    
    setSelectedServices(newSelected);
    
    const newTotal = services
      .filter(service => newSelected.includes(service.id))
      .reduce((sum, service) => sum + service.basePrice, 0);
    
    setTotalPrice(newTotal);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">ثبت سفارش</h2>
          <p className="text-gray-600">
            فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند
          </p>
        </div>

        <div className="clay-card">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  شماره تماس
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                خدمات مورد نیاز
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <label
                    key={service.id}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                      className="w-4 h-4 text-[#A8DADC] focus:ring-[#A8DADC]"
                    />
                    <span>{service.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                توضیحات
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent"
              />
            </div>

            {totalPrice > 0 && (
              <div className="bg-[#E8D7F1]/20 p-4 rounded-lg">
                <p className="text-lg font-bold">
                  برآورد هزینه: {new Intl.NumberFormat('fa-IR').format(totalPrice)} تومان
                </p>
                <p className="text-sm text-gray-600">
                  این قیمت تقریبی است و ممکن است بر اساس جزئیات پروژه تغییر کند
                </p>
              </div>
            )}

            <button
              type="submit"
              className="clay-button bg-[#A8DADC] text-white w-full"
            >
              ارسال درخواست
              <Send className="mr-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}