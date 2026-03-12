"use client";

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/architecture/1920/1080?blur=10')] bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-600 mb-8"
          >
            <ShieldCheck className="mr-2 h-4 w-4 text-emerald-600" />
            Licensed, insured, and verified contractors
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]"
          >
            One contractor. <br />
            <span className="text-zinc-500">Exclusively yours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed"
          >
            Managed property services for homeowners and property managers. We
            handle the full lifecycle: intake, contractor assignment, estimates,
            and project tracking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#accounts"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
            >
              Create an Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contractors"
              className="inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 px-8 py-4 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95"
            >
              Join Contractor Network
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
