"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonialsConfig } from "@/config/testimonials";
import { motion } from "motion/react";

const enabledTestimonials = testimonialsConfig
  .filter((item) => item.enabled !== false)
  .sort((a, b) => a.order - b.order);

export function Testimonials() {
  return (
    <section className="border-t border-dashed pt-6">
      <h2 className="section-heading mb-3">Community</h2>
      <div className="px-6">
        <div className="space-y-4">
          {enabledTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
              className="flex gap-3"
            >
              <Avatar className="h-6 w-6 shrink-0 mt-0.5">
                <AvatarFallback className="text-[10px] font-mono">
                  {testimonial.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <p className="mt-1 text-xs text-muted-foreground/60 font-mono">
                  {testimonial.name} · {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
