"use client";

import { Building2, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-zinc-200 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Building2 className="h-6 w-6 text-zinc-900" />
              <span className="font-semibold text-xl tracking-tight text-zinc-900">
                Nexus Operations
              </span>
            </Link>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs">
              Managed property services for homeowners. One contractor.
              Exclusively yours.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">
              Get Started
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/auth/sign-up"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Create a homeowner account
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/sign-up?role=property_manager"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Property manager account
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/sign-up?role=contractor"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Contractor network application
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Frequently asked questions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17854280244"
                  className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  <Phone className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 transition-colors shrink-0" />
                  <div>
                    <span className="block font-medium text-zinc-900">
                      (785) 428-0244
                    </span>
                    <span className="block text-xs mt-0.5">
                      Monday – Friday, 8 am – 6 pm CT
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@nexusoperations.org"
                  className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  <Mail className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 transition-colors shrink-0" />
                  <div>
                    <span className="block font-medium text-zinc-900">
                      admin@nexusoperations.org
                    </span>
                    <span className="block text-xs mt-0.5">
                      General inquiries and support
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">
              Headquarters
            </h3>
            <div className="flex items-start gap-3 text-sm text-zinc-600">
              <MapPin className="h-5 w-5 text-zinc-400 shrink-0" />
              <div>
                <span className="block font-medium text-zinc-900">
                  Topeka, Kansas
                </span>
                <span className="block text-xs mt-0.5 leading-relaxed">
                  Serving Shawnee County and adjacent areas.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Nexus Operations. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
