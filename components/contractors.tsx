"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contractors() {
  const requirements = [
    {
      name: "Active contractor license",
      desc: "Required for each applied trade. Must be current at application and maintained on renewal.",
    },
    {
      name: "General liability insurance",
      desc: "Certificate of insurance required. Minimum coverage limits apply. Policy must remain active.",
    },
    {
      name: "Shawnee County service area",
      desc: "Primary coverage required. Adjacent county coverage may be approved separately.",
    },
    {
      name: "Manual review by Nexus staff",
      desc: "All applications are reviewed individually. No account is activated automatically.",
    },
  ];

  return (
    <section
      id="contractors"
      className="py-24 bg-zinc-50 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-16 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6"
            >
              Join the Nexus contractor network.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-zinc-600 mb-6 leading-relaxed"
            >
              Receive pre-documented project notifications in your trade and
              service area. The Nexus contractor network is free to join and
              free to use. There are no subscription fees, no per-claim charges,
              and no referral percentages.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-600 mb-8 leading-relaxed"
            >
              Every project you receive through Nexus comes with photographs, a
              written scope, and the owner&apos;s maximum budget — reviewed and
              validated by Nexus staff before you receive the notification.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/auth/sign-up?role=contractor"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
              >
                Apply for network access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900 mb-8">
              Application requirements
            </h3>
            <ul className="space-y-8">
              {requirements.map((req, index) => (
                <motion.li
                  key={req.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-900 mb-1">
                      {req.name}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {req.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
