import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Aussiemale logo" width={60} height={60} className="rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">Aussiemale</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#team" className="hover:underline">Team</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6 space-y-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-12">
          <h2 className="text-4xl font-bold">Your Health, Your Strength</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive and confidential men's health services tailored for every Aussie bloke.
          </p>
          <button className="text-lg px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Book an Appointment
          </button>
        </section>

        {/* Services Section */}
        <section id="services">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Men's Health Checks",
              "Sexual Health and STI Screening",
              "Mental Health Support",
              "Prostate Health",
              "Testosterone and Hormone Management",
              "Weight, Sleep and Lifestyle Medicine"].map((service, i) => (
              <div key={i} className="border rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-medium mb-2">{service}</h3>
                <p>Learn more about how we can help with {service.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section id="team">
          <h2 className="text-3xl font-semibold mb-6">Our General Practitioners</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/profile.jpg"
              alt="Profile photo of practitioner"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
            />
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold">Scott Stringer</h3>
              <p className="text-base mt-2">
                Scott Stringer is a Nurse Practitioner with a strong focus on men's health, mental wellness,
                and preventative care. With over two decades of clinical experience, Scott understands the
                unique challenges faced by Aussie men and is dedicated to delivering personalised, evidence-based
                healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Placeholder */}
        <section id="contact" className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>We'll soon have a booking system online. Stay tuned!</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Aussiemale. All rights reserved.</p>
      </footer>
    </div>
  );
}
