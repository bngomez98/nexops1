import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import AccountTypes from "@/components/account-types";
import Trades from "@/components/trades";
import Reporting from "@/components/reporting";
import Contractors from "@/components/contractors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AccountTypes />
        <Trades />
        <Reporting />
        <Contractors />
      </main>
      <Footer />
    </div>
  );
}
