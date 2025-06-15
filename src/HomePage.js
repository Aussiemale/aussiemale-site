import Image from "next/image";

export default function HomePage() {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Aussiemale: Your Health, Your Strength</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Comprehensive and confidential men's health services tailored for every Aussie bloke.
        </p>
        <button className="text-lg px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book an Appointment
        </button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Men's Health Checks",
            "Sexual Health and STI Screening",
            "Mental Health Support",
            "Prostate Health",
            "Testosterone and Hormone Management",
            "Weight, Sleep and Lifestyle Medicine",
          ].map((service, i) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-medium mb-2">{service}</h3>
              <p>Learn more about how we can help with {service.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Nurse Practitioner</h2>
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

      {/* Logo Footer */}
      <footer className="pt-12 border-t mt-12 flex flex-col items-center">
        <Image
          src="/logo.jpg"
          alt="Aussiemale logo"
          width={120}
          height={120}
        />
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Aussiemale. All rights reserved.</p>
      </footer>
    </div>
  );
}
