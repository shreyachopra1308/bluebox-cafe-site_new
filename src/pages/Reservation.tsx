import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation confirmed",
      description: "We look forward to welcoming you. Please arrive 5–10 minutes early.",
    });
    setFormData({
      date: "",
      time: "",
      guests: "2",
      specialRequests: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
  ];

  return (
    <div className="min-h-screen relative pt-24">
      {/* Hero */}
      <section className="section-spacing border-b border-theme">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <h1 className="mb-8">
            Reservations
          </h1>
          <p className="text-base font-sans font-light text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            Reserve your moment at The Blue Box Café
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="section-card bg-theme-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-sans font-normal text-white mb-3 tracking-[0.05em] uppercase"
                  >
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-theme-section border border-theme rounded-2xl text-white font-sans font-light focus:outline-none focus:border-tiffany focus:ring-2 focus:ring-tiffany/30 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-sans font-normal text-white mb-3 tracking-[0.05em] uppercase"
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-theme-section border border-theme rounded-2xl text-white font-sans font-light focus:outline-none focus:border-tiffany focus:ring-2 focus:ring-tiffany/30 transition-all duration-300"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-sans font-normal text-deep mb-3 tracking-[0.05em] uppercase"
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Party size
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream border border-deep/20 rounded-2xl text-deep font-sans font-light focus:outline-none focus:border-tiffany transition-colors duration-220"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-sans font-normal text-deep mb-3 tracking-[0.05em] uppercase"
                >
                  Special requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-cream border border-deep/20 rounded-2xl text-deep font-sans font-light focus:outline-none focus:border-tiffany transition-colors duration-220 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-theme">
                <Button
                  type="submit"
                  className="w-full bg-tiffany hover:bg-tiffany-light hover:shadow-md active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white py-4 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                >
                  Reserve your moment
                </Button>
              </div>
            </form>

            {/* Cancellation Policy */}
            <div className="mt-8 pt-8 border-t border-theme">
              <p className="text-sm font-sans font-light text-theme-secondary leading-relaxed">
                <strong className="font-normal">Cancellation policy:</strong> Please notify us at least 6 hours before your booking to avoid a small cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
