import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MotionButton } from "@/components/ui/motion-button";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  demo: string;
  category?: string;
  features: string[];
};

type PortfolioItems = {
  [key: string]: PortfolioItem[];
};

const portfolioItems: PortfolioItems = {
  all: [
    // ecommerce items
    {
      title: "فروشگاه لوازم دیجیتال",
      description: "یک فروشگاه آنلاین با قابلیت مقایسه محصولات و فیلترینگ پیشرفته",
      image: "/images/portfolio/digital-store.jpg",
      demo: "https://digital-store.webea.ir",
      category: "ecommerce",
      features: [
        "سیستم مقایسه محصولات",
        "فیلترینگ پیشرفته",
        "درگاه پرداخت آنلاین",
        "پنل مدیریت قدرتمند",
      ]
    },
    {
      title: "فروشگاه مد و پوشاک",
      description: "فروشگاه آنلاین لباس با قابلیت شخصی‌سازی محصولات",
      image: "/images/portfolio/fashion-store.jpg",
      demo: "https://fashion.webea.ir",
      category: "ecommerce",
      features: [
        "نمایش ۳۶۰ درجه محصولات",
        "سیستم سایزبندی هوشمند",
        "پیشنهاد محصولات مرتبط",
        "سبد خرید پیشرفته",
      ]
    },
    {
      title: "فروشگاه محصولات دیجیتال",
      description: "فروشگاه تخصصی گجت و لوازم جانبی",
      image: "/images/portfolio/gadget-store.jpg",
      demo: "https://gadget.webea.ir",
      category: "ecommerce",
      features: [
        "مقایسه فنی محصولات",
        "راهنمای خرید هوشمند",
        "نظرات و امتیازدهی",
        "گارانتی آنلاین",
      ]
    },
    // corporate items
    {
      title: "وبسایت شرکت مهندسی",
      description: "طراحی مدرن و حرفه‌ای برای یک شرکت مهندسی",
      image: "/images/portfolio/engineering-company.jpg",
      demo: "https://engineering.webea.ir",
      category: "corporate",
      features: [
        "طراحی مدرن و حرفه‌ای",
        "نمایش پروژه‌ها",
        "فرم تماس پیشرفته",
        "بخش وبلاگ",
      ]
    },
    {
      title: "وبسایت شرکت نرم‌افزاری",
      description: "معرفی خدمات و محصولات نرم‌افزاری",
      image: "/images/portfolio/software-company.jpg",
      demo: "https://software.webea.ir",
      category: "corporate",
      features: [
        "نمایش نمونه کارها",
        "معرفی تیم",
        "بخش کارراهه",
        "وبلاگ تخصصی",
      ]
    },
    {
      title: "وبسایت شرکت معماری",
      description: "نمایش پروژه‌های معماری و طراحی داخلی",
      image: "/images/portfolio/architecture-company.jpg",
      demo: "https://architecture.webea.ir",
      category: "corporate",
      features: [
        "گالری تعاملی پروژه‌ها",
        "رزرو آنلاین مشاوره",
        "مجله معماری",
        "نمایش ۳۶۰ درجه",
      ]
    },
    // service items
    {
      title: "سامانه رزرو آنلاین",
      description: "سیستم رزرواسیون آنلاین خدمات با قابلیت پرداخت",
      image: "/images/portfolio/booking-system.jpg",
      demo: "https://booking.webea.ir",
      category: "service",
      features: [
        "تقویم رزرواسیون",
        "سیستم پرداخت آنلاین",
        "پنل مدیریت کاربران",
        "گزارش‌گیری پیشرفته",
      ]
    },
    {
      title: "سامانه مشاوره آنلاین",
      description: "پلتفرم ارائه خدمات مشاوره تخصصی",
      image: "/images/portfolio/consulting.jpg",
      demo: "https://consult.webea.ir",
      category: "service",
      features: [
        "چت آنلاین",
        "تماس تصویری",
        "رزرو جلسات",
        "پرداخت امن",
      ]
    },
    {
      title: "سامانه خدمات منزل",
      description: "پلتفرم درخواست خدمات منزل و تعمیرات",
      image: "/images/portfolio/home-services.jpg",
      demo: "https://homeservice.webea.ir",
      category: "service",
      features: [
        "انتخاب متخصص",
        "قیمت‌گذاری هوشمند",
        "پیگیری سفارش",
        "امتیازدهی خدمات",
      ]
    },
    // startup items
    {
      title: "اپلیکیشن تحت وب استارتاپی",
      description: "یک پلتفرم نوآورانه برای ارائه خدمات آنلاین",
      image: "/images/portfolio/startup-app.jpg",
      demo: "https://startup.webea.ir",
      category: "startup",
      features: [
        "رابط کاربری مدرن",
        "پنل داشبورد کاربری",
        "سیستم پرداخت درون برنامه‌ای",
        "API اختصاصی",
      ]
    },
    {
      title: "پلتفرم کرادفاندینگ",
      description: "سیستم تامین مالی جمعی برای استارتاپ‌ها",
      image: "/images/portfolio/crowdfunding.jpg",
      demo: "https://fund.webea.ir",
      category: "startup",
      features: [
        "پروفایل پروژه‌ها",
        "سیستم پرداخت امن",
        "داشبورد سرمایه‌گذار",
        "گزارش‌های مالی",
      ]
    },
    {
      title: "پلتفرم اشتراک دانش",
      description: "شبکه اجتماعی تخصصی برای اشتراک دانش",
      image: "/images/portfolio/knowledge-sharing.jpg",
      demo: "https://knowledge.webea.ir",
      category: "startup",
      features: [
        "انتشار محتوا",
        "سیستم امتیازدهی",
        "جستجوی پیشرفته",
        "گروه‌های تخصصی",
      ]
    },
    // educational items
    {
      title: "پلتفرم آموزش آنلاین",
      description: "سیستم جامع آموزش آنلاین با قابلیت برگزاری کلاس مجازی",
      image: "/images/portfolio/elearning.jpg",
      demo: "https://learn.webea.ir",
      category: "educational",
      features: [
        "سیستم مدیریت دوره‌ها",
        "کلاس‌های آنلاین",
        "آزمون‌ساز",
        "گواهینامه دیجیتال",
      ]
    },
    {
      title: "سامانه آموزش زبان",
      description: "پلتفرم تخصصی آموزش زبان با تمرکز بر مکالمه",
      image: "/images/portfolio/language-learning.jpg",
      demo: "https://language.webea.ir",
      category: "educational",
      features: [
        "چت صوتی زنده",
        "تمرینات تعاملی",
        "یادگیری با هوش مصنوعی",
        "آزمون‌های سطح‌بندی",
      ]
    },
    {
      title: "پلتفرم آموزش برنامه‌نویسی",
      description: "سیستم یادگیری تعاملی برنامه‌نویسی",
      image: "/images/portfolio/coding-platform.jpg",
      demo: "https://code.webea.ir",
      category: "educational",
      features: [
        "ادیتور آنلاین کد",
        "پروژه‌های عملی",
        "کد چالش‌ها",
        "مسیر یادگیری شخصی",
      ]
    }
  ],
  ecommerce: [
    {
      title: "فروشگاه لوازم دیجیتال",
      description: "یک فروشگاه آنلاین با قابلیت مقایسه محصولات و فیلترینگ پیشرفته",
      image: "/images/portfolio/digital-store.jpg",
      demo: "https://digital-store.webea.ir",
      features: [
        "سیستم مقایسه محصولات",
        "فیلترینگ پیشرفته",
        "درگاه پرداخت آنلاین",
        "پنل مدیریت قدرتمند",
      ]
    },
    {
      title: "فروشگاه مد و پوشاک",
      description: "فروشگاه آنلاین لباس با قابلیت شخصی‌سازی محصولات",
      image: "/images/portfolio/fashion-store.jpg",
      demo: "https://fashion.webea.ir",
      features: [
        "نمایش ۳۶۰ درجه محصولات",
        "سیستم سایزبندی هوشمند",
        "پیشنهاد محصولات مرتبط",
        "سبد خرید پیشرفته",
      ]
    },
    {
      title: "فروشگاه محصولات دیجیتال",
      description: "فروشگاه تخصصی گجت و لوازم جانبی",
      image: "/images/portfolio/gadget-store.jpg",
      demo: "https://gadget.webea.ir",
      features: [
        "مقایسه فنی محصولات",
        "راهنمای خرید هوشمند",
        "نظرات و امتیازدهی",
        "گارانتی آنلاین",
      ]
    }
  ],
  corporate: [
    {
      title: "وبسایت شرکت مهندسی",
      description: "طراحی مدرن و حرفه‌ای برای یک شرکت مهندسی",
      image: "/images/portfolio/engineering-company.jpg",
      demo: "https://engineering.webea.ir",
      features: [
        "طراحی مدرن و حرفه‌ای",
        "نمایش پروژه‌ها",
        "فرم تماس پیشرفته",
        "بخش وبلاگ",
      ]
    },
    {
      title: "وبسایت شرکت نرم‌افزاری",
      description: "معرفی خدمات و محصولات نرم‌افزاری",
      image: "/images/portfolio/software-company.jpg",
      demo: "https://software.webea.ir",
      features: [
        "نمایش نمونه کارها",
        "معرفی تیم",
        "بخش کارراهه",
        "وبلاگ تخصصی",
      ]
    },
    {
      title: "وبسایت شرکت معماری",
      description: "نمایش پروژه‌های معماری و طراحی داخلی",
      image: "/images/portfolio/architecture-company.jpg",
      demo: "https://architecture.webea.ir",
      features: [
        "گالری تعاملی پروژه‌ها",
        "رزرو آنلاین مشاوره",
        "مجله معماری",
        "نمایش ۳۶۰ درجه",
      ]
    }
  ],
  service: [
    {
      title: "سامانه رزرو آنلاین",
      description: "سیستم رزرواسیون آنلاین خدمات با قابلیت پرداخت",
      image: "/images/portfolio/booking-system.jpg",
      demo: "https://booking.webea.ir",
      features: [
        "تقویم رزرواسیون",
        "سیستم پرداخت آنلاین",
        "پنل مدیریت کاربران",
        "گزارش‌گیری پیشرفته",
      ]
    },
    {
      title: "سامانه مشاوره آنلاین",
      description: "پلتفرم ارائه خدمات مشاوره تخصصی",
      image: "/images/portfolio/consulting.jpg",
      demo: "https://consult.webea.ir",
      features: [
        "چت آنلاین",
        "تماس تصویری",
        "رزرو جلسات",
        "پرداخت امن",
      ]
    },
    {
      title: "سامانه خدمات منزل",
      description: "پلتفرم درخواست خدمات منزل و تعمیرات",
      image: "/images/portfolio/home-services.jpg",
      demo: "https://homeservice.webea.ir",
      features: [
        "انتخاب متخصص",
        "قیمت‌گذاری هوشمند",
        "پیگیری سفارش",
        "امتیازدهی خدمات",
      ]
    }
  ],
  startup: [
    {
      title: "اپلیکیشن تحت وب استارتاپی",
      description: "یک پلتفرم نوآورانه برای ارائه خدمات آنلاین",
      image: "/images/portfolio/startup-app.jpg",
      demo: "https://startup.webea.ir",
      features: [
        "رابط کاربری مدرن",
        "پنل داشبورد کاربری",
        "سیستم پرداخت درون برنامه‌ای",
        "API اختصاصی",
      ]
    },
    {
      title: "پلتفرم کرادفاندینگ",
      description: "سیستم تامین مالی جمعی برای استارتاپ‌ها",
      image: "/images/portfolio/crowdfunding.jpg",
      demo: "https://fund.webea.ir",
      features: [
        "پروفایل پروژه‌ها",
        "سیستم پرداخت امن",
        "داشبورد سرمایه‌گذار",
        "گزارش‌های مالی",
      ]
    },
    {
      title: "پلتفرم اشتراک دانش",
      description: "شبکه اجتماعی تخصصی برای اشتراک دانش",
      image: "/images/portfolio/knowledge-sharing.jpg",
      demo: "https://knowledge.webea.ir",
      features: [
        "انتشار محتوا",
        "سیستم امتیازدهی",
        "جستجوی پیشرفته",
        "گروه‌های تخصصی",
      ]
    }
  ],
  educational: [
    {
      title: "پلتفرم آموزش آنلاین",
      description: "سیستم جامع آموزش آنلاین با قابلیت برگزاری کلاس مجازی",
      image: "/images/portfolio/elearning.jpg",
      demo: "https://learn.webea.ir",
      features: [
        "سیستم مدیریت دوره‌ها",
        "کلاس‌های آنلاین",
        "آزمون‌ساز",
        "گواهینامه دیجیتال",
      ]
    },
    {
      title: "سامانه آموزش زبان",
      description: "پلتفرم تخصصی آموزش زبان با تمرکز بر مکالمه",
      image: "/images/portfolio/language-learning.jpg",
      demo: "https://language.webea.ir",
      features: [
        "چت صوتی زنده",
        "تمرینات تعاملی",
        "یادگیری با هوش مصنوعی",
        "آزمون‌های سطح‌بندی",
      ]
    },
    {
      title: "پلتفرم آموزش برنامه‌نویسی",
      description: "سیستم یادگیری تعاملی برنامه‌نویسی",
      image: "/images/portfolio/coding-platform.jpg",
      demo: "https://code.webea.ir",
      features: [
        "ادیتور آنلاین کد",
        "پروژه‌های عملی",
        "کد چالش‌ها",
        "مسیر یادگیری شخصی",
      ]
    }
  ],
};

const categories = [
  { value: "all", label: "همه" },
  { value: "ecommerce", label: "فروشگاهی" },
  { value: "corporate", label: "شرکتی" },
  { value: "service", label: "خدماتی" },
  { value: "startup", label: "استارتاپ" },
  { value: "educational", label: "آموزشی" },
];

const PortfolioSection = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, portfolioItems[selectedTab].length));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedTab(category);
    setVisibleItems(3);
  };

  const hasMoreItems = visibleItems < portfolioItems[selectedTab].length;

  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn("up")} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">نمونه کارها</h2>
          <p className="text-lg text-gray-600">
            برخی از پروژه‌های موفق ما
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedTab === category.value ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.value)}
              className="whitespace-nowrap"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {portfolioItems[selectedTab]
              .slice(0, visibleItems)
              .map((item, index) => (
                <motion.div
                  key={`${selectedTab}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="glass-card cursor-pointer hover:scale-105 transition-transform duration-300">
                        <CardContent className="p-6">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>{item.description}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="space-y-4">
                          <h4 className="font-bold">ویژگی‌های کلیدی:</h4>
                          <ul className="list-disc list-inside space-y-2">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="text-gray-600">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <MotionButton className="w-full">
                              مشاهده دمو
                            </MotionButton>
                          </a>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <MotionButton 
              onClick={handleShowMore}
              size="lg" 
              className="clay-button group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              مشاهده نمونه کارهای بیشتر
              <span className="mr-2 transform group-hover:translate-x-1 transition-transform">←</span>
            </MotionButton>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;