import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { bikes } from "@/data/bikes";
import { toast } from "sonner";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date>();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bike: "",
    duration: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.bike || !date || !form.duration) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx-Vyn4nbF9j_yvVhJQ8pQu-W1WKsYycT-uy51_7sK7dBANHk1w7SRmX5tvvTBw2sbs/exec", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          date: date?.toDateString(),
        }),
      });

      setSubmitted(true);
      toast.success("Booking submitted!");
    } catch (err) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 sm:p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Booking Received!</h3>
            <p className="text-muted-foreground mb-6">
              We'll contact you shortly on WhatsApp to confirm your booking.
            </p>
            <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", bike: "", duration: "", message: "" }); setDate(undefined); }} variant="outline">
              Book Another Bike
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Ready to <span className="text-primary">Ride</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Fill the form and we'll get back to you within minutes
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                maxLength={100}
                className="bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
              <Input
                placeholder="10-digit number"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="bg-background"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Select Bike *</label>
              <Select value={form.bike} onValueChange={(v) => handleChange("bike", v)}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Choose a bike" />
                </SelectTrigger>
                <SelectContent>
                  {bikes.map((b) => (
                    <SelectItem key={b.id} value={b.name}>{b.name} ({b.category})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Duration *</label>
              <Select value={form.duration} onValueChange={(v) => handleChange("duration", v)}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12hr">12 Hours</SelectItem>
                  <SelectItem value="24hr">24 Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Pickup Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal bg-background", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Message</label>
            <Textarea
              placeholder="Any special requirements..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              maxLength={500}
              rows={3}
              className="bg-background"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6 transition-all duration-200 hover:scale-[1.02]"
          >
            {loading ? (
              <span className="animate-pulse">Submitting...</span>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Booking
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;