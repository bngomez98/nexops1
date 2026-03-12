"use client";

import { motion } from "motion/react";
import {
  Wrench,
  Zap,
  Droplets,
  PaintRoller,
  TreePine,
  Fence,
  Hammer,
  Thermometer,
} from "lucide-react";
import Link from "next/link";

export default function Trades() {
  const trades = [
    {
      name: "Roofing",
      desc: "Full replacement, storm damage assessment, leak repair, and insurance restoration.",
      icon: Hammer,
    },
    {
      name: "HVAC",
      desc: "Central air, heat pumps, ductless mini-splits, furnace replacement, and annual maintenance.",
      icon: Thermometer,
    },
    {
      name: "Electrical",
      desc: "Panel upgrades, circuit additions, rewiring, subpanel installation, and EV charger rough-in.",
      icon: Zap,
    },
    {
      name: "Plumbing",
      desc: "Water heaters, leak detection, drain clearing, main line repair, and fixture replacement.",
      icon: Droplets,
    },
    {
      name: "Concrete",
      desc: "Driveways, patios, sidewalks, foundation repair, and structural flatwork.",
      icon: Wrench,
    },
    {
      name: "Tree Service",
      desc: "Removal, crown reduction, stump grinding, and post-storm emergency response.",
      icon: TreePine,
    },
    {
      name: "Fencing",
      desc: "Privacy, chain link, vinyl, wood, and commercial perimeter fencing.",
      icon: Fence,
    },
    {
      name: "General Repair",
      desc: "Drywall, carpentry, painting, door and window replacement, and interior repairs.",
      icon: PaintRoller,
    },
  ];

  return (
    <section id="trades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Eight trade categories with licensed, insured contractors active in
            each.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            All requests must include photographs, a written scope, and a
            maximum budget before the project enters the contractor queue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trades.map((trade, index) => (
            <motion.div
              key={trade.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-white border border-zinc-200 shadow-sm group-hover:scale-110 transition-transform">
                <trade.icon className="h-6 w-6 text-zinc-700" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                {trade.name}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {trade.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600">
            Need a trade not listed?{" "}
            <Link
              href="mailto:admin@nexusoperations.org"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
            >
              Contact us directly.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
