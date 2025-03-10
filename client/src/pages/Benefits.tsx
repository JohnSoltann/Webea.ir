import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { MotionButton } from "@/components/ui/motion-button";
import {
  Users,
  Lightbulb,
  Cpu,
  Headphones,
  Smartphone,
  Crosshair,
  UserCheck,
} from "lucide-react";

const benefits = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "طراحی کاربر محور",
    description:
      "کاربر شما باید با رابط کاربری تون راحت باشه. به راحتی خدماتتون رو پیدا کنه, به شما اعتماد کنه, و با دیدن سایتتون احساس نیاز به خدمات شما در اون ایجاد بشه.",
    features: ["طراحی راحت و کاربرپسند", "ایجاد اعتماد در کاربران", "هدایت کاربر به سمت خدمات"],
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "خلاقیت و نوآوری",
    description:
      "هر وب سایت لایق ایده و طراحیه مختص به برند خودشه. برند شما چیه؟ اهداف و برتریش نسبت به رقباتون چیه؟ رنگ سازمانی شما چیه؟ آیا مینیمالیستید یا مدرن؟ شایدم پر زرق و برق و پرشور!",
    features: ["طراحی اختصاصی برند", "توجه به اهداف کسب و کار", "سازگاری با هویت بصری"],
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "تکنولوژی‌های پیشرفته",
    description:
      "همه چیز هر روز در حال تغییره. طراحی ها, آپشن ها و مخصوصا سیو. وبی یه برنامه خیلی منظم و دقیق داره که هرماه تیمش رو با طراحی ها و آپشن های جدید به روز کنه.",
    features: ["به‌روزرسانی مداوم", "استفاده از آخرین تکنولوژی‌ها", "بهینه‌سازی مستمر"],
  },
  {
    icon: <Headphones className="w-12 h-12" />,
    title: "پشتیبانی و نگهداری",
    description:
      "خدمات وبی به پایان پروژه ختم نمیشه, ما پشتیبانی و نگهداری مداوم برای اطمینان از عملکرد بهینه وبسایت رو ارایه میدیم. در یه جمله ( ما تا آخرش هواتون رو داریم ).",
    features: ["پشتیبانی ۲۴/۷", "بروزرسانی‌های منظم", "رفع سریع مشکلات"],
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "طراحی رسپانسیو",
    description:
      "تمام وبسایت های ما به طور پیش فرض رسپانسیو طراحی می شوند. تا در هر دستگاهی از جمله موبایل, تب لت و دسکتاپ به بهترین شکل نمایش داده شوند.",
    features: ["سازگار با تمام دستگاه‌ها", "تجربه کاربری یکپارچه", "نمایش بهینه محتوا"],
  },
  {
    icon: <Crosshair className="w-12 h-12" />,
    title: "توجه به جزییات",
    description:
      "تفاوت یه استیک 400 تومنی با یه استیک 40 میلیون تومنی درچیه؟ زمان پخت؟ میزان ادویه؟ یا تجربه آشپز؟ همه این ها جزییاته. توجه به جزییات برای وبی خیلی مهمه.",
    features: ["کدنویسی تمیز", "دقت در طراحی", "توجه به کوچکترین نکات"],
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    title: "رویکرد مشتری محور",
    description:
      "اگه من میخواستم به کسی سفارش سایت بدم, دوست داشتم تو مراحلش شریک شم, جوری سلیقم رو با سایت اجین کنم که خودم رو تو سایت ببینم. وبی در تمام مراحل پروژه به شما اجازه مشارکت میده.",
    features: ["مشارکت در تمام مراحل", "توجه به نظرات مشتری", "شخصی‌سازی کامل"],
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

const Benefits = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">
            چرا وبی انتخاب برتر شماست؟
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            هفت دلیل متمایز که وبی را به بهترین انتخاب برای طراحی سایت شما تبدیل می‌کند
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {benefits.map((benefit, index) => (
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
                      {benefit.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-white relative z-10">
                    {benefit.title}
                  </h3>

                  <p className="text-white mb-6 relative z-10">
                    {benefit.description}
                  </p>

                  <ul className="space-y-2 relative z-10">
                    {benefit.features.map((feature, idx) => (
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
            className="group bg-blue-600 hover:bg-blue-700 active:bg-blue-800 data-[state=open]:bg-blue-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            شروع همکاری با ما
            <span className="mr-2 transform group-hover:translate-x-1 transition-transform">←</span>
          </MotionButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Benefits;