"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_MESSAGE =
  "Hi! I'd like to get a free quote for a removal. Can you help?";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
          {/* WhatsApp */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            <a
              href={buildWhatsAppUrl(SITE.whatsapp, WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex items-center gap-3 bg-[#25D366] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {/* Label — expands on hover */}
              <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[180px] transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-4 text-sm font-semibold">
                WhatsApp Us
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href={`tel:${SITE.phone}`}
              aria-label={`Call us on ${SITE.phoneDisplay}`}
              className="group flex items-center gap-3 bg-brand-blue text-white rounded-2xl shadow-lg hover:shadow-glow-sm transition-all duration-200 hover:scale-105 active:scale-95 relative"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-2xl animate-pulse-ring bg-brand-blue opacity-30 pointer-events-none" />
              {/* Label */}
              <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-[180px] transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-4 text-sm font-semibold">
                {SITE.phoneDisplay}
              </span>
              <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
