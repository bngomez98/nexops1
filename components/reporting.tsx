"use client";

import { motion } from "motion/react";
import {
  FileText,
  TrendingUp,
  Clock,
  Calendar,
  AlertTriangle,
  Flag,
  Building2,
} from "lucide-react";

export default function Reporting() {
  const metrics = [
    {
      name: "Financial summary",
      desc: "Total cost, labor vs. materials breakdown, variance from budget ceiling.",
      icon: FileText,
    },
    {
      name: "Efficiency metrics",
      desc: "Time to completion, contractor response time, scheduling turnaround.",
      icon: Clock,
    },
    {
      name: "Historical comparison",
      desc: "Cost and timeline compared to prior projects in the same trade category.",
      icon: TrendingUp,
    },
    {
      name: "Maintenance intervals",
      desc: "Recommended next service date based on trade standards and property history.",
      icon: Calendar,
    },
    {
      name: "Follow-up items",
      desc: "Issues identified during the project that require separate attention.",
      icon: AlertTriangle,
    },
    {
      name: "Recurring issue flags",
      desc: "Patterns detected across multiple projects at the same address or trade.",
      icon: Flag,
    },
    {
      name: "Portfolio benchmarking",
      desc: "For property managers: performance comparison across managed addresses.",
      icon: Building2,
    },
  ];

  return (
    <section
      id="reporting"
      className="py-24 bg-zinc-900 text-white border-y border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-16 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
            >
              Every completed project generates a report.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed"
            >
              That data is used to surface useful insights about your property
              over time. Each post-project report covers three areas: Financial,
              Timeline, and Recommendations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              Your project data belongs to you. Every project you complete
              through Nexus — scope, photos, contractor, cost, outcome — is
              accessible from your account and downloadable at any time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl hover:bg-zinc-800 transition-colors"
              >
                <metric.icon className="h-6 w-6 text-zinc-300 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {metric.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
