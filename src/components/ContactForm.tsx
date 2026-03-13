import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import posthog from "@/lib/posthog";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      posthog.capture("contact_form_submitted", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowSuccessModal(true);
      form.reset();
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
    } catch {
      toast({ title: "Error sending message", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-[480px] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] text-muted-foreground">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-[14px]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] text-muted-foreground">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                        className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-[14px]"
                      />
                    </FormControl>
                    <FormMessage className="text-[12px]" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[13px] text-muted-foreground">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What are you building?"
                      className="min-h-[120px] resize-none bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-[14px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px]" />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground rounded-lg py-3.5 text-[15px] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Form>

        <p className="text-center text-[13px] text-muted-foreground mt-4">
          or email{" "}
          <a href="mailto:skfaiz0929@gmail.com" className="text-foreground hover:text-primary transition-colors">
            skfaiz0929@gmail.com
          </a>{" "}
          directly
        </p>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md border-border bg-card">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-[18px] font-bold">Message Sent!</DialogTitle>
            <DialogDescription className="text-[14px] text-muted-foreground pt-2">
              I'll get back to you within 24–48 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-[14px] font-medium"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
