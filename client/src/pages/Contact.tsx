import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const websiteTypes = [
  { value: "ecommerce", label: "فروشگاهی" },
  { value: "corporate", label: "شرکتی" },
  { value: "service", label: "خدماتی" },
  { value: "startup", label: "استارتاپ" },
  { value: "educational", label: "آموزشی" },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      websiteType: "ecommerce",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const formData = {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        message: data.message.trim(),
        websiteType: data.websiteType,
      };

      const res = await apiRequest("POST", "/api/contact", formData);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "خطا در ارسال پیام");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "پیام شما با موفقیت ارسال شد",
        description: "به زودی با شما تماس خواهیم گرفت.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "خطا در ارسال پیام",
        description: error.message || "لطفاً دوباره تلاش کنید",
      });
    },
  });

  const onSubmit = async (data: InsertContact) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 pt-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={fadeIn("up")} className="text-center mb-16">
          <h1 className="text-4xl font-bold heading-gradient mb-6">
            تماس با وبّی
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ما آماده پاسخگویی به تمام سوالات شما هستیم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeIn("right")}>
            <Card className="glass-card h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-primary">راه‌های ارتباطی</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 hover:bg-muted/50 p-4 rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">تلفن تماس</h3>
                      <p className="text-gray-600 hover:text-primary transition-colors">۰۹۱۲۹۶۸۶۵۴۶</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 hover:bg-muted/50 p-4 rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">ایمیل</h3>
                      <p className="text-gray-600 hover:text-primary transition-colors">info@webea.ir</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 hover:bg-muted/50 p-4 rounded-lg transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">آدرس</h3>
                      <p className="text-gray-600 hover:text-primary transition-colors">
                        کرج عظیمیه نیک نژاد شمالی
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("left")}>
            <Card className="glass-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-primary">فرم تماس</h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">نام و نام خانوادگی</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="نام خود را وارد کنید" 
                              {...field}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">ایمیل</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="ایمیل خود را وارد کنید"
                              {...field}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">شماره تماس</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="شماره تماس خود را وارد کنید"
                              {...field}
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="websiteType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">نوع سایت مورد نظر</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/50">
                                <SelectValue placeholder="نوع سایت را انتخاب کنید" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {websiteTypes.map((type) => (
                                <SelectItem 
                                  key={type.value} 
                                  value={type.value}
                                  className="hover:bg-primary/10 transition-colors"
                                >
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">پیام شما</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="پیام خود را بنویسید"
                              className="h-32 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          در حال ارسال...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          ارسال پیام
                          <Send className="mr-2 w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;