import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Check } from "lucide-react";

const values = [
  "کیفیت برتر در طراحی",
  "امنیت بالا",
  "بهینه‌سازی سئو",
  "پشتیبانی ۲۴/۷",
  "قیمت مناسب",
  "رضایت مشتری",
];

const ValuesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up")}
          className="glass-card p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl font-bold mb-8">ارزش‌های وبّی</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            تیم وبّی تصمیم گرفته تمام تمرکزش رو روی کیفیت بذاره، در نتیجه می‌تونید از ما با کیفیت‌ترین طراحی، امنیت، سئو و پشتیبانی رو انتظار داشته باشید.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                className="flex items-center space-x-4 space-x-reverse"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
