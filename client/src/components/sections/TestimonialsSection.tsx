import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "کم ترین کاری که میتونم در جواب لطف تیم وبی انجام بدم, گذاشتن این کامنته. سایتی که این تیم برای من ساخته, زندگی منو عوض کرده. من رویاهام به واقعیت تبدیل شد. هیچ وقت فکرشم نمیکردم روزی هزار و پونصد بسته کره بادوم زمینی به کل ایران بفرستم. خودمو بچه هام همه مدیون شماییم..",
    author: "سارا - فروشگاه آنلاین",
  },
  {
    quote: "آقا ما یه سایت زدیم, بعد به ما پیشنهاد افزایش فروش داده شد, اگر بخوام صادق باشم اولش گفتم اینا میخوان یه پولی از ما بگیرن, اما همسرم اصرار کرد, ریسک کنم. خداروشکررررر که ریسک کردم. من این ماه 5 میلیارد فروش داشتم, سومین سایت فروش عینک تو گوگلم و خدارو شکررررررررررر که با این تیم قوی و مجرب آشنا شدم.",
    author: "محمد - فروشگاه عینک",
  },
  {
    quote: "وقتی شروع به کار با وبی کردم، واقعاً هیچ چیزی از طراحی وب نمی‌دونستم. ولی تیم وبی با صبوری و مهربانی به من کمک کردن و قدم به قدم راهنماییم کردن. الان من یک وب‌سایت زیبا و کاربردی دارم و این رو مدیون تیم فوق‌العاده وبی هستم.",
    author: "مریم - استارتاپ نوپا",
  },
  {
    quote: "من کلا آدم نا امیدی بودم و فقط میخواستم یه وب سایت ساده داشته باشم که مشتری های قدیمی خودم از اونجا خرید کنن. ولی به پیشنهاد تیم وبی, سایت کامل تری سفارش دادم و سیو رو به تیمشون سپردم. باور بفرمایید تو یه سال پرسنلم از 3 نفر به 56 نفر رسیده.",
    author: "علی - کسب و کار خانگی",
  },
  {
    quote: "اگر به دنبال تیمی هستید که می‌تونه فروش شما رو افزایش بده و وب‌سایتی حرفه‌ای و جذاب براتون طراحی کنه، من وبی رو به شدت توصیه می‌کنم. همکاری با اون‌ها برای من یک تحول بزرگ بود.",
    author: "زهرا - فروشگاه لباس",
  },
  {
    quote: "طراح سایتا مثل آرایشگرا میمونن, هرچی میگی تهش کار خودشونو انجام میدن ولی تجربه همکاری با وبی برای من فوق العاده بود. اینا انگار داداش و خواهر من بودن, با دقت به نیازای من گوش دادن و با اینکه نظر من خلاف توصیشون بود دقیقا چیزی رو طراحی کردن که من میخواستم.",
    author: "رضا - استودیو طراحی",
  },
];

const TestimonialsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const hasMore = visibleCount < testimonials.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonials.length));
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn("up")} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">نظرات مشتریان ما</h2>
          <p className="text-lg text-gray-600">
            آنچه مشتریان ما درباره خدمات وبّی می‌گویند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {testimonials.slice(0, visibleCount).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                <Card className="glass-card h-full hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                    <div className="mt-auto">
                      <p className="font-bold text-primary">{testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="group"
            >
              مشاهده نظرات بیشتر
              <span className="mr-2 transform group-hover:translate-x-1 transition-transform">←</span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;