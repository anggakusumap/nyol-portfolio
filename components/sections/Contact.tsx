"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:gedeanggakp@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start pt-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="space-y-8 lg:sticky lg:top-24"
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
              Contact
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              Let&apos;s Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Together
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
              <Button size="lg" variant="outline" className="justify-start px-6 h-14 text-base" asChild>
                <Link href="mailto:gedeangga@gmail.com">
                  <Mail className="mr-3 h-5 w-5 text-primary" /> gedeanggakp@gmail.com
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="justify-start px-6 h-14 text-base" asChild>
                 <Link href="https://www.linkedin.com/in/angga-kusuma-889ab8230/" target="_blank">
                     <MessageSquare className="mr-3 h-5 w-5 text-accent" /> Angga Kusuma
                 </Link>
              </Button>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SpotlightCard className="p-8 border-border/50 bg-card/50 backdrop-blur-sm" spotlightColor="rgba(var(--primary), 0.1)">
             <div className="mb-6">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <p className="text-sm text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
             </div>
             <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="John Doe" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" placeholder="john@example.com" type="email" required className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50" required />
                </div>
                <Button type="submit" className="w-full h-12 text-base">
                  Send Message
                </Button>
             </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </Section>
  );
}
