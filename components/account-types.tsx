"use client";

import { motion } from "motion/react";
import { Home, Building, HardHat, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AccountTypes() {
  const accounts = [
    {
      title: "Homeowners",
      subtitle: "Single-property owners",
      description:
        "Your account is a service management dashboard for your property. Submit requests with photos and scope, track active projects in real time, review and approve contractor estimates, and access the complete history of everything Nexus has managed for you.",
      icon: Home,
      href: "/auth/sign-up",
      cta: "Create account",
    },
    {
      title: "Property Managers",
      subtitle: "Multi-property operators",
      description:
        "A single account covers your entire portfolio. Each property has its own request history, cost record, and service documentation. Portfolio-level reporting shows maintenance spend by address and by trade category, flags overdue service intervals, and identifies recurring issues.",
      icon: Building,
      href: "/auth/sign-up?role=property_manager",
      cta: "Create account",
    },
    {
      title: "Contractors",
      subtitle: "Licensed tradespeople",
      description:
        "Your account is a project feed. When a request is submitted in your trade and service area, you receive a notification. You decide whether to claim it. If you do, it is yours exclusively. You arrive at the job site with the full project file already in hand.",
      icon: HardHat,
      href: "/auth/sign-up?role=contractor",
      cta: "Apply for access",
    },
  ];

  return (
    <section
      id="accounts"
      className="py-24 bg-zinc-50 border-y border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Three account types — each with dedicated tools and capabilities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <motion.div
              key={account.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 border border-zinc-200 mb-6">
                <account.icon className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-1">
                {account.title}
              </h3>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {account.subtitle}
              </p>
              <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">
                {account.description}
              </p>
              <Link
                href={account.href}
                className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors group"
              >
                {account.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
