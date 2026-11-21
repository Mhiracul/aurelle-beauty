import { useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Replace with Aurelle's number

const serviceOptions = {
  Bridal: [
    "Traditional Bridal Glam",
    "White Wedding Bridal Glam",
    "Bridal Trial Session",
    "Bridal Party Makeup",
  ],
  "Regular Makeup": [
    "Soft Glam",
    "Full Glam",
    "Birthday Makeup",
    "Special Occasion Makeup",
    "Editorial Makeup",
  ],
};

const initialForm = {
  category: "",
  service: "",
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
};

const steps = ["Experience", "Appointment", "Your Details", "Review"];

const Booking = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const bookingRef = useRef(null);

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "category" ? { service: "" } : {}),
    }));

    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const validateStep = () => {
    const newErrors = {};

    if (step === 0) {
      if (!form.category) newErrors.category = "Please select an experience.";
      if (!form.service) newErrors.service = "Please select a service.";
    }

    if (step === 1) {
      if (!form.date) newErrors.date = "Please select a date.";
      else if (form.date < minDate) {
        newErrors.date = "Please select a future date.";
      }

      if (!form.time) newErrors.time = "Please select a preferred time.";
    }

    if (step === 2) {
      if (!form.name.trim()) newErrors.name = "Your name is required.";
      if (!form.phone.trim())
        newErrors.phone = "Your phone number is required.";
      if (!form.location.trim())
        newErrors.location = "Please enter your location.";

      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((current) => Math.min(current + 1, 3));

      requestAnimationFrame(() => {
        bookingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };
  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 0));
    setErrors({});
  };

  const submitBooking = () => {
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Please configure Aurelle's WhatsApp number in Booking.jsx first.");
      return;
    }

    const message = `
Hello Aurelle Beauty!

I would love to make a booking.

BOOKING DETAILS

Experience: ${form.category}
Service: ${form.service}
Preferred date: ${form.date}
Preferred time: ${form.time}

CLIENT DETAILS

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Location: ${form.location}

Additional information:
${form.message || "None"}

Please let me know your availability and the next steps. Thank you!
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full border-b border-[#30201B]/20 bg-transparent px-0 py-4 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-bronze";

  const labelClass =
    "mb-2 block text-[9px] uppercase tracking-[0.22em] text-espresso/60";

  const errorText = (field) =>
    errors[field] ? (
      <p className="mt-2 text-xs text-red-700">{errors[field]}</p>
    ) : null;

  return (
    <section
      id="booking"
      ref={bookingRef}
      className="scroll-mt-6 bg-ivory px-6 py-28 md:px-12 md:py-40"
    >
      {" "}
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-bronze">
            06 — Your Appointment
          </p>

          <h2 className="font-display text-5xl leading-tight text-espresso md:text-7xl">
            Let's create
            <br />
            <span className="italic text-bronze">your moment.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-espresso/60">
            Tell us a little about the experience you're looking for. We'll be
            delighted to help you bring it to life.
          </p>
        </div>

        <div className="grid overflow-hidden border border-espresso/10 bg-white/50 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left panel */}
          <div className="relative hidden min-h-175 overflow-hidden bg-espresso lg:block">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=90"
              alt="Luxury beauty editorial"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#21130f] via-[#21130f]/20 to-transparent" />

            <div className="absolute bottom-12 left-10 right-10">
              <Sparkles className="mb-7 text-champagne" size={25} />

              <p className="font-display text-5xl leading-tight text-white">
                The art of bringing beauty to life.
              </p>

              <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-white/60">
                AURELLE BEAUTY HOUSE · LAGOS
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="px-6 py-10 md:px-12 md:py-14">
            {/* Progress */}
            <div className="mb-12">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.2em] text-bronze">
                  STEP 0{step + 1} / 04
                </p>

                <p className="text-[9px] uppercase tracking-[0.15em] text-espresso/50">
                  {steps[step]}
                </p>
              </div>

              <div className="flex gap-2">
                {steps.map((item, index) => (
                  <div
                    key={item}
                    className={`h-0.75 flex-1 transition-colors duration-300 ${
                      index <= step ? "bg-bronze" : "bg-espresso/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1 */}
            {step === 0 && (
              <div>
                <h3 className="font-display text-3xl text-espresso md:text-4xl">
                  Choose your experience.
                </h3>

                <p className="mb-9 mt-3 text-xs text-espresso/50">
                  What kind of beauty experience are you looking for?
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {["Bridal", "Regular Makeup"].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => updateForm("category", category)}
                      className={`border p-6 text-left transition ${
                        form.category === category
                          ? "border-bronze bg-champagne/15"
                          : "border-espresso/15 hover:border-bronze"
                      }`}
                    >
                      <span className="mb-5 block text-[9px] tracking-[0.2em] text-bronze">
                        {category === "Bridal"
                          ? "01 — SPECIAL MOMENTS"
                          : "02 — EVERYDAY BEAUTY"}
                      </span>

                      <span className="font-display text-2xl text-espresso">
                        {category}
                      </span>

                      <span className="mt-4 block text-xs text-espresso/50">
                        {category === "Bridal"
                          ? "For your wedding and bridal celebrations."
                          : "For birthdays, events and every occasion."}
                      </span>

                      {form.category === category && (
                        <Check className="mt-5 text-bronze" size={19} />
                      )}
                    </button>
                  ))}
                </div>

                {errorText("category")}

                {form.category && (
                  <div className="mt-10">
                    <label className={labelClass}>Select your service</label>

                    <select
                      value={form.service}
                      onChange={(e) => updateForm("service", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions[form.category].map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    {errorText("service")}
                  </div>
                )}
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div>
                <h3 className="font-display text-3xl text-espresso md:text-4xl">
                  When should we expect you?
                </h3>

                <p className="mb-9 mt-3 text-xs text-espresso/50">
                  Choose your preferred appointment date and time.
                </p>

                <div className="mb-8">
                  <label className={labelClass}>
                    <CalendarDays className="mr-2 inline" size={13} />
                    Preferred date
                  </label>

                  <input
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => updateForm("date", e.target.value)}
                    className={inputClass}
                  />

                  {errorText("date")}
                </div>

                <div>
                  <label className={labelClass}>
                    <Clock3 className="mr-2 inline" size={13} />
                    Preferred time
                  </label>

                  <select
                    value={form.time}
                    onChange={(e) => updateForm("time", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select preferred time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>

                  {errorText("time")}
                </div>

                <p className="mt-7 text-[10px] leading-6 text-espresso/45">
                  Your selected date and time are preferences, not a confirmed
                  appointment. Availability will be confirmed by Aurelle.
                </p>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div>
                <h3 className="font-display text-3xl text-espresso md:text-4xl">
                  A little about you.
                </h3>

                <p className="mb-9 mt-3 text-xs text-espresso/50">
                  Share your details so we can get in touch.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>Full name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                    {errorText("name")}
                  </div>

                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                    {errorText("email")}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Phone / WhatsApp number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="+234 ..."
                      className={inputClass}
                    />
                    {errorText("phone")}
                  </div>

                  <div>
                    <label className={labelClass}>
                      <MapPin className="mr-1 inline" size={12} />
                      Event / appointment location *
                    </label>
                    <input
                      value={form.location}
                      onChange={(e) => updateForm("location", e.target.value)}
                      placeholder="e.g. Lekki, Lagos"
                      className={inputClass}
                    />
                    {errorText("location")}
                  </div>

                  <div>
                    <label className={labelClass}>Additional information</label>
                    <textarea
                      rows="3"
                      value={form.message}
                      onChange={(e) => updateForm("message", e.target.value)}
                      placeholder="Tell us about your occasion or any preferences..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 3 && (
              <div>
                <h3 className="font-display text-3xl text-espresso md:text-4xl">
                  Your experience, reviewed.
                </h3>

                <p className="mb-9 mt-3 text-xs text-espresso/50">
                  Please confirm that your details are correct.
                </p>

                <div className="divide-y divide-espresso/10 border-y border-espresso/10">
                  {[
                    ["Experience", form.category],
                    ["Service", form.service],
                    ["Preferred date", form.date],
                    ["Preferred time", form.time],
                    ["Full name", form.name],
                    ["Email", form.email || "Not provided"],
                    ["Phone", form.phone],
                    ["Location", form.location],
                    ["Additional information", form.message || "None"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-5 py-4"
                    >
                      <span className="text-[9px] uppercase tracking-[0.15em] text-espresso/50">
                        {label}
                      </span>
                      <span className="max-w-[60%] text-right text-xs text-espresso">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 bg-champagne/20 p-5">
                  <p className="text-xs leading-6 text-espresso/70">
                    Submitting will open WhatsApp with your booking request.
                    Your appointment is not confirmed until Aurelle responds and
                    confirms availability.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-espresso/10 pt-7">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-espresso/60 transition hover:text-bronze"
                >
                  <ArrowLeft size={15} />
                  Back
                </button>
              ) : (
                <span className="text-[9px] uppercase tracking-[0.15em] text-espresso/35">
                  AURELLE BEAUTY
                </span>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-4 bg-espresso px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-wine"
                >
                  Continue
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitBooking}
                  className="inline-flex items-center gap-3 bg-wine px-7 py-4 text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-espresso"
                >
                  Send booking request
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
