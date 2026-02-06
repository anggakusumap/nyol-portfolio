"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
            <Link href="mailto:gedeangga@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Send me an Email
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg" asChild>
             <Link href="https://www.linkedin.com/in/angga-kusuma-889ab8230/" target="_blank">
                 <MessageSquare className="mr-2 h-5 w-5" /> DM on LinkedIn
             </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
