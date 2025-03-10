import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-panel mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">webea.ir</h3>
            <p className="text-sm text-gray-600">
              هویت آنلاین شما. زیبایی در طراحی، قدرت در عملکرد.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-[#FF69B4] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF69B4] transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF69B4] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-gray-600 hover:text-[#FF69B4] transition-colors flex items-center gap-2 cursor-pointer">
                    درباره ما
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-gray-600 hover:text-[#FF69B4] transition-colors flex items-center gap-2 cursor-pointer">
                    خدمات
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/benefits">
                  <span className="text-sm text-gray-600 hover:text-[#FF69B4] transition-colors flex items-center gap-2 cursor-pointer">
                    مزایا
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-gray-600 hover:text-[#FF69B4] transition-colors flex items-center gap-2 cursor-pointer">
                    تماس با ما
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center gap-2">طراحی سایت</li>
              <li className="text-sm text-gray-600 flex items-center gap-2">توسعه وب</li>
              <li className="text-sm text-gray-600 flex items-center gap-2">بهینه‌سازی سئو</li>
              <li className="text-sm text-gray-600 flex items-center gap-2">طراحی رابط کاربری</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>۰۹۱۲۹۶۸۶۵۴۶</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@webea.ir</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>کرج عظیمیه نیک نژاد شمالی</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} webea.ir. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;