
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans p-6">
      <header className="flex justify-between items-center py-4 px-2 bg-[#8A3FFC] text-white">
        <h1 className="text-2xl font-bold">BidHid</h1>
        <a href="/login" className="text-white font-medium hover:underline">Log In</a>
      </header>

      <section className="max-w-2xl mx-auto mt-12 text-center">
        <h2 className="text-4xl font-bold text-[#8A3FFC] mb-4">The Global Payroll Marketplace</h2>
        <p className="text-lg mb-8">
          BidHid connects companies with top providers for payroll, EOR, and contractor payments.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <Stat label="Global Payroll Projects" count={43} />
          <Stat label="Local Payroll Projects" count={27} />
          <Stat label="EOR Projects" count={35} />
          <Stat label="Contractor Payments" count={21} />
          <Stat label="Payroll Payments" count={18} />
        </div>

        <a href="https://your-waitlist-form.com" target="_blank" rel="noreferrer"
          className="inline-block bg-[#8A3FFC] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#753BDF]">
          Join the Waitlist
        </a>
      </section>
    </main>
  );
}

function Stat({ label, count }: { label: string, count: number }) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="text-3xl font-bold text-[#8A3FFC]">{count}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </div>
  );
}
