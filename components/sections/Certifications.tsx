"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Award, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    title: "Mobile App Development with React Native",
    issuer: "Digital Talent Scholarship",
    date: "Jul 2024",
    id: "1957887840-82",
    skills: ["React Native", "REST APIs", "Mobile Development"],
    link: "#" // Placeholder or user can provide
  },
  {
    title: "Mobile Developer Course (React Native)",
    issuer: "Progate",
    date: "Jun 2024",
    id: null,
    skills: ["React Native", "TypeScript"],
    link: "#"
  },
  {
    title: "Menjadi React Web Developer Expert",
    issuer: "Dicoding Indonesia",
    date: "Mar 2024",
    expires: "Mar 2027",
    id: "4EXGKMEEQZRL",
    skills: ["React.js", "Next.js", "Web Performance", "CI/CD", "Testing"],
    link: "https://www.dicoding.com/certificates/4EXGKMEEQZRL"
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Apr 2023",
    expires: "Apr 2026",
    id: "0LZ09D1JQZ65",
    skills: ["GitHub", "Git"],
    link: "https://www.dicoding.com/certificates/0LZ09D1JQZ65"
  },
  {
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    date: "Apr 2023",
    expires: "Apr 2026",
    id: "1OP80Y3K1XQK",
    skills: ["Axios", "CSS", "ES6", "Web Components"],
    link: "https://www.dicoding.com/certificates/1OP80Y3K1XQK"
  },
  {
    title: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Mar 2023",
    expires: "Mar 2026",
    id: "EYX493425PDL",
    skills: ["React.js", "JavaScript", "State Management"],
    link: "https://www.dicoding.com/certificates/EYX493425PDL"
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Mar 2023",
    expires: "Mar 2026",
    id: "N9ZO41Q56ZG5",
    skills: ["React.js", "JavaScript"],
    link: "https://www.dicoding.com/certificates/N9ZO41Q56ZG5"
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Mar 2023",
    expires: "Mar 2026",
    id: "NVP79L6O4ZR0",
    skills: ["CSS", "JavaScript", "HTML"],
    link: "https://www.dicoding.com/certificates/NVP79L6O4ZR0"
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Feb 2023",
    expires: "Feb 2026",
    id: "07Z6G95GJXQR",
    skills: ["CSS", "HTML", "Flexbox"],
    link: "https://www.dicoding.com/certificates/07Z6G95GJXQR"
  },
  {
    title: "NextJS",
    issuer: "BuildWithAngga",
    date: "Feb 2023",
    id: "Pe26nyBo6x",
    skills: ["React.js", "JavaScript", "Next.js"],
    link: "#"
  },
  {
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    date: "Dec 2022",
    expires: "Dec 2025",
    id: "07Z6G4WDWXQR",
    skills: ["JavaScript", "SOLID Principles", "Software Design"],
    link: "https://www.dicoding.com/certificates/07Z6G4WDWXQR"
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Dec 2022",
    expires: "Dec 2025",
    id: "RVZKKE9VQZD5",
    skills: ["JavaScript", "hapi.js", "Node.js"],
    link: "https://www.dicoding.com/certificates/RVZKKE9VQZD5"
  },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Dec 2022",
    expires: "Dec 2025",
    id: "MEPJKN5NJX3V",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
    link: "https://www.dicoding.com/certificates/MEPJKN5NJX3V"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Nov 2022",
    expires: "Nov 2025",
    id: "MRZM4QLW0XYQ",
    skills: ["JavaScript", "Logic"],
    link: "https://www.dicoding.com/certificates/MRZM4QLW0XYQ"
  }
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-muted/20">
      <div className="space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Validation of technical expertise and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SpotlightCard className="h-full group hover:border-primary/50 transition-colors" spotlightColor="rgba(var(--primary), 0.05)">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                     <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                             <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                             </h3>
                             <p className="text-sm text-muted-foreground mt-1">
                                {cert.issuer}
                             </p>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-mono">
                      <span className="flex items-center bg-muted px-2 py-1 rounded">
                         <Calendar className="w-3 h-3 mr-1.5" />
                         Issued {cert.date}
                      </span>
                      {cert.expires && (
                          <span className="flex items-center bg-muted px-2 py-1 rounded">
                             Expires {cert.expires}
                          </span>
                      )}
                  </div>
                  
                  {cert.id && (
                     <div className="text-xs text-muted-foreground mb-4 font-mono pl-1">
                        ID: {cert.id}
                     </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs font-normal border-border/50 bg-background/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/30">
                    <Link href={cert.link} target="_blank" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        Show Credential <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
