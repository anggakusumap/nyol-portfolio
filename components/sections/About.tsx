"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Abstract Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl z-0" />
            <div className="relative aspect-square md:aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-muted z-10 flex items-center justify-center border border-border shadow-xl">
                <Image
                  src="/pas-photo.jpg"
                  alt="Angga Kusuma"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <div className="h-1.5 w-20 bg-accent mt-2 rounded-full" />
          </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello, I&apos;m Angga Kusuma, a seasoned front-end developer with over six years of hands-on experience in creating innovative and dynamic web solutions. Welcome to my digital space, where I showcase my passion for coding and commitment to delivering high-quality, user-centric web applications.
              </p>
              <p>
                My journey in tech is driven by a desire to build seamless, performant, and scalable applications. I specialize in the modern React ecosystem, including Next.js and React Native, and I&apos;m always exploring new technologies to stay ahead of the curve.
              </p>
            </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
             <Card>
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                     <span className="text-3xl font-bold text-primary">6+</span>
                     <span className="text-sm text-muted-foreground">Years Experience</span>
                 </CardContent>
             </Card>
             <Card>
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                     <span className="text-3xl font-bold text-accent">50+</span>
                     <span className="text-sm text-muted-foreground">Projects Completed</span>
                 </CardContent>
             </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
