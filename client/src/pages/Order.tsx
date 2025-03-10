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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Send } from "lucide-react";

const websiteTypes = [
  { value: "ecommerce", label: "فروشگاهی" },
  { value: "corporate", label: "شرکتی" },
  { value: "service", label: "خدماتی" },
  { value: "startup", label: "استارتاپ" },
  { value: "educational", label: "آموزشی" },
];

const Order = () => {
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
      console.log('Form data before sending:', data);
      try {
        const validatedData = insertContactSchema.parse(data);
        console.log('Validated data:', validatedData);

        const res = await apiRequest("POST", "/api/contact", validatedData);
        if (!res.ok) {
          const error = await res.json();
          console.error('Server response error:', error);
          if (error.details) {
            const errorMessage = error.details
              .map((err: { field: string; message: string }) => err.message)
              .join('\n');
            throw new Error(errorMessage);
          }
          throw new Error(error.message || "خطا در ارسال پیام");
        }
        const responseData = await res.json();
        console.log('Server response:', responseData);
        return responseData;
      } catch (error) {
        console.error('Validation or API error:', error);
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: "درخواست شما با موفقیت ثبت شد",
        description: "کارشناسان وبی به زودی با شما تماس خواهند گرفت.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      console.error('Mutation error:', error);
      toast({
        variant: "destructive",
        title: "خطا در ثبت درخواست",
        description: error.message || "لطفاً دوباره تلاش کنید.",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    console.log('Form submission data:', data);
    mutation.mutate(data);
  };

  return (
    <div className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={fadeIn("up")} className="text-center mb-16">
          <h1 className="text-4xl font-bold heading-gradient mb-6">
            ثبت سفارش در وبی
          </h1>
          <p className="text-xl text-gray-600">
            برای شروع همکاری، لطفاً فرم زیر را تکمیل کنید
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up")}>
          <Card className="glass-card">
            <CardContent className="p-8">
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
                        <FormLabel>نام و نام خانوادگی</FormLabel>
                        <FormControl>
                          <Input placeholder="نام خود را وارد کنید" {...field} />
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
                        <FormLabel>ایمیل</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            {...field}
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
                        <FormLabel>شماره تماس</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="شماره تماس خود را وارد کنید"
                            {...field}
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
                        <FormLabel>نوع سایت مورد نظر</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="نوع سایت را انتخاب کنید" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {websiteTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
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
                        <FormLabel>توضیحات پروژه</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="لطفاً توضیحات کاملی از پروژه خود را وارد کنید"
                            className="h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span>راهنمای تکمیل فرم:</span>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>لطفاً اطلاعات تماس خود را به دقت وارد کنید</li>
                      <li>در بخش توضیحات، انتظارات خود از پروژه را شرح دهید</li>
                      <li>کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت</li>
                    </ul>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      "در حال ارسال..."
                    ) : (
                      <>
                        ثبت درخواست
                        <Send className="mr-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Order;