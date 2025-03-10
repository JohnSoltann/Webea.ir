import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { MotionButton } from "@/components/ui/motion-button";
import {
  Code2,
  Paintbrush2,
  Search,
  ShieldCheck,
  Smartphone,
  BarChart3,
  Cloud,
  WrenchIcon,
} from "lucide-react";

const services = [
  {
    icon: <Paintbrush2 className="w-12 h-12" />,
    title: "طراحی سایت",
    description:
      "طراحی خلاقانه و زیبا با رعایت اصول UX/UI برای جذب مخاطب بیشتر",
    features: ["طراحی ریسپانسیو", "رابط کاربری مدرن", "تجربه کاربری عالی"],
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "توسعه وب",
    description:
      "پیاده‌سازی وب‌سایت با استفاده از جدیدترین تکنولوژی‌های روز دنیا",
    features: ["کدنویسی تمیز", "عملکرد سریع", "مقیاس‌پذیری بالا"],
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "سئو و بهینه‌سازی",
    description:
      "بهینه‌سازی سایت شما برای موتورهای جستجو و افزایش رتبه در گوگل",
    features: ["تحقیق کلمات کلیدی", "بهینه‌سازی محتوا", "لینک‌سازی"],
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "امنیت وب",
    description:
      "محافظت از سایت شما در برابر حملات سایبری و تهدیدات امنیتی",
    features: ["اسکن آسیب‌پذیری", "SSL رایگان", "بکاپ خودکار"],
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "طراحی اپلیکیشن موبایل",
    description:
      "طراحی و توسعه اپلیکیشن‌های موبایل برای iOS و اندروید",
    features: ["طراحی نیتیو", "عملکرد روان", "آپدیت مداوم"],
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "دیجیتال مارکتینگ",
    description:
      "افزایش فروش و برندسازی از طریق بازاریابی دیجیتال",
    features: ["تبلیغات هدفمند", "بازاریابی محتوا", "شبکه‌های اجتماعی"],
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "خدمات میزبانی وب",
    description:
      "میزبانی مطمئن و پرسرعت برای وب‌سایت شما",
    features: ["آپتایم ۹۹.۹٪", "پهنای باند نامحدود", "پشتیبانی ۲۴/۷"],
  },
  {
    icon: <WrenchIcon className="w-12 h-12" />,
    title: "پشتیبانی و نگهداری",
    description:
      "خدمات پشتیبانی و نگهداری مداوم از سایت شما",
    features: ["بروزرسانی مداوم", "رفع اشکال", "بهینه‌سازی عملکرد"],
  },
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Services = () => {
  const [_, navigate] = useLocation();

  const handleContactClick = () => {
    console.log('Navigating to contact page...');
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-950 via-blue-600 to-blue-400">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/50 rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/50 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

        <motion.div variants={fadeIn("up")} className="text-center mb-16 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">خدمات ما</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            ما در وبّی طیف گسترده‌ای از خدمات را برای رشد کسب و کار شما ارائه می‌دهیم
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up")}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-300">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 pointer-events-none"></div>

                  <motion.div
                    className="clay-icon mx-auto mb-4 p-4 rounded-xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-lg border border-white/30 shadow-[inset_0_0_12px_rgba(255,255,255,0.2)] group-hover:[animation-play-state:paused]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="text-blue-200">
                      {service.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-white relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-white mb-6 relative z-10">
                    {service.description}
                  </p>
                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center text-sm bg-blue-800/50 p-2 rounded-lg border border-white/20 text-white group-hover:bg-blue-700/50 transition-colors"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full ml-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up")} className="text-center mt-16">
          <MotionButton
            size="lg"
            className="group bg-blue-600 hover:bg-blue-700 active:bg-blue-800 data-[state=open]:bg-blue-800 transition-colors duration-300 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
          >
            درخواست مشاوره رایگان
            <span className="mr-2 transform group-hover:translate-x-1 transition-transform">←</span>
          </MotionButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;