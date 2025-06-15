import Image from "next/image";
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Calendly Script */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />

      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Aussiemale logo" width={80} height={80} className="rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">Aussiemale</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#team" className="hover:underline">Team</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-4 sm:p-6 space-y-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12 px-2">
          <h2 className="text-3xl sm:text-4xl font-bold">Your Health, Your Strength</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive and confidential men's health services tailored for every Aussie bloke.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Men's Health & Wellness Checks",
              "Sexual Health, STI Screening, PrEP", "Referrals, Diagnostics, & Medical Certificates"].map((service, i) => (
              <div key={i} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-lg sm:text-xl font-medium mb-2">{service}</h3>
                <p className="text-sm sm:text-base">Learn more about how we can help with {service.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section id="team" className="px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Practitioner</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/profile.jpg"
              alt="Profile photo of practitioner"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
            />
            <div className="max-w-xl text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold">Scott Stringer</h3>
              <p className="mt-2">
                Scott Stringer is a Nurse Practitioner with extensive experience in men’s health and wellbeing.<br /><br />
                With a strong clinical foundation and a background in emergency medicine, Scott has supported men across diverse settings—including the mining industry, remote communities, and correctional facilities.<br /><br />
                Based in regional Queensland, he offers a friendly, down-to-earth approach, delivering practical and personalised care tailored to each individual.<br /><br />
                Passionate about improving health outcomes for men, Scott blends clinical expertise with genuine, person-centred care. His mobile practice allows him to meet patients where they are — at home, on the farm, or on-site — anywhere across the Fraser Coast, strictly by appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-12 px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Book an Appointment</h2>
          <p className="mb-6 text-sm sm:text-base">Use any of the embedded booking forms below to schedule a consultation. A confirmation and thank-you message will appear once your appointment is booked.</p>

          <div className="space-y-12 max-w-3xl mx-auto">
            {[{
              title: "New Patient Consultation",
              url: "https://calendly.com/scotty-stringer/new-patient-consultation"
            }, {
              title: "20-Min Consultation",
              url: "https://calendly.com/scotty-stringer/20-min-consultation"
            }, {
              title: "10-Min Quick Chat",
              url: "https://calendly.com/scotty-stringer/10-min-quick-chat"
            }].map((appt, i) => (
              <div key={i}>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{appt.title}</h3>
                <div
                  className="calendly-inline-widget"
                  data-url={appt.url}
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12 px-2">
        <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Aussiemale. All rights reserved.</p>
      </footer>
    </div>
  );
}
