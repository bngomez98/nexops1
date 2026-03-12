"use client";

import { motion } from "motion/react";
import { ClipboardCheck, UserCheck, History, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Fully managed service",
      description:
        "Nexus selects the contractor, confirms the appointment, and maintains the project record. Responsibility for the managed portion stays with Nexus throughout.",
      icon: ClipboardCheck,
    },
    {
      title: "Exclusive assignment",
      description:
        "One contractor per project, claimed first-come and held exclusively. The property owner works with a single contractor for each request, from consultation through completion.",
      icon: UserCheck,
    },
    {
      title: "Permanent service record",
      description:
        "Every project — scope, cost, contractor, photos, outcome — is stored on the platform and retrievable indefinitely. The record belongs to the property.",
      icon: History,
    },
    {
      title: "Property-specific intelligence",
      description:
        "Over time, your service history tells Nexus what your property needs and when. Recommendations are generated from your actual project records and maintenance intervals.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Every property owner deserves a clear, verified account of what has
            been maintained, when, and at what cost.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Our platform handles the full lifecycle of a service request: intake
            and documentation review, contractor assignment from a verified
            network, consultation scheduling, estimate approval, and project
            tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 border border-zinc-200">
                <feature.icon
                  className="h-6 w-6 text-zinc-900"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold leading-7 text-zinc-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-base leading-7 text-zinc-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
