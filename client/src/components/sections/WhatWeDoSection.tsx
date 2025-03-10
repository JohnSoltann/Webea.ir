import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Users, TrendingUp, FileText } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E6D8FF]/50 to-[#FFE6F3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">ما کی هستیم؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            وبی یه تیم خلاق و پیشرو و نوآور در زمینه طراحی و توسعه وبه. که به شما کمک میکنه یکی از بهترین وب سایت های ایران رو داشته باشید.
          </p>
        </motion.div>

        {/* What We Do Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-4">آنچه وبی انجام می دهد</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            وبی هویت آنلاین شما را با زیبایی در طراحی و قدرت در عملکرد می سازد، و درآمد شما را چند برابر می کند.
          </p>
          <p className="text-xl font-bold mt-4 heading-gradient">چطور؟</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Digital Strategy */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6"
          >
            <div className="clay-icon mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">محتوا و استراتژی دیجیتال</h4>
            <p className="text-gray-600">
              بخش مهمی از سیو، به تولید محتوا ربط داره. ما شمارو به صدر گوگل می بریم.
            </p>
          </motion.div>

          {/* Audience Growth */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6"
          >
            <div className="clay-icon mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">جذب مخاطب جدید</h4>
            <p className="text-gray-600">
              ۷۰٪ خرید های مردم انلاین شده، بخش عمده ای از این خریدها از طریق سایت ها انجام میشه. برای اینکه شما این خریدار هارو مال خودتون کنید، باید تو صدر گوگل باشید. وبی این کار رو برای شما انجام میده.
            </p>
          </motion.div>

          {/* Sales Growth */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6"
          >
            <div className="clay-icon mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-4">افزایش فروش</h4>
            <p className="text-gray-600">
              حالا که کلی آدم اومده تو سایت، نوبت فروشه. حتما پیش اومده که وقتی میخواید چیزی رو بخرید، چندین سایت یا پیج رو میگردید، و اما ازشون نمیخرید! چرا از بعضی ها خرید نمیکنیم؟ این کاریه که متخصص های فروش ما بعداز ماه ها بررسی به جوابش رسیدن، و کاری میکنن که در سایت شما اتفاق نیفته. (وبی کاری میکنه تو بفروشی.)❤️
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
