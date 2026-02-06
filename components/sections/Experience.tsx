"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Building } from "lucide-react";

const experience = [
  {
    role: "Software Engineer",
    company: "CodeBros",
    period: "April 2025 - Present",
    description: "Responsible for building Progressive Web Apps (PWAs) and mobile applications using React and React Native. The role focuses on delivering seamless, responsive, and high-performance user experiences tailored to meet client requirements. Utilizes modern web and mobile technologies to create robust, scalable, and optimized applications for performance and usability.",
    skills: ["Software Engineering"] // Placeholder based on image, refine if needed
  },
  {
    role: "Software Engineer",
    company: "Taksu Tech",
    period: "April 2024 - April 2025",
    description: "Responsible for building Progressive Web Apps (PWAs) and mobile applications using React and React Native. The role focuses on delivering seamless, responsive, and high-performance user experiences tailored to meet client requirements. Utilizes modern web and mobile technologies to create robust, scalable, and optimized applications for performance and usability.",
    skills: ["React", "React Native", "PWA", "Mobile Development"]
  },
  {
    role: "Frontend Developer",
    company: "2-WAYS",
    period: "March 2022 - February 2024",
    description: "Served as a Front-End Developer specializing in Next.js development. Responsibilities included leading the design and implementation of web applications while collaborating effectively with UI/UX designers. Focused on maintaining high code quality through clean, modular, and well-documented coding practices. Successfully integrated front-end components with RESTful APIs, optimized performance, and resolved bottlenecks to deliver seamless and engaging user experiences.",
    skills: ["Next.js", "REST APIs", "UI/UX Collaboration", "Performance Optimization"]
  },
  {
    role: "Web System Analyst",
    company: "Dinas Komunikasi, Informatika Dan Statistik Provinsi Bali",
    period: "June 2020 - September 2020",
    description: "Works as a Web System Analyst, responsible for designing and planning digital solutions. Creates detailed diagrams such as Data Flow Diagrams (DFD), Entity-Relationship Diagrams (ERD), and Conceptual Data Models (CDM) to map how information moves and relates within web systems. Ensures smooth and effective user experiences in the websites and applications developed.",
    skills: ["System Analysis", "DFD", "ERD", "CDM"]
  }
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "React Native", 
  "Redux.js", "REST APIs", "Tailwind CSS", "Framer Motion", "Git"
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-12">
        <div className="text-center space-y-4">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
           >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Experience & Skills
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My professional journey and the technologies I work with.
              </p>
           </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Work History</h3>
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12 border-l border-border/50 ml-3 md:ml-4 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-accent font-medium mb-3 flex items-center">
                    <Building size={14} className="mr-2" />
                    {item.company}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
           </div>

           <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <Card>
                  <CardHeader>
                      <CardTitle>Universitas Udayana (UNUD)</CardTitle>
                       <div className="text-sm text-muted-foreground mt-1">
                          Bachelor&apos;s degree, Information Technology
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar size={14} className="mr-1" />
                            September 2017 - December 2021
                      </div>
                  </CardHeader>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 pt-6">Technical Skills</h3>
              <Card>
                  <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20"
                              >
                                  {skill}
                              </motion.span>
                          ))}
                      </div>
                  </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </Section>
  );
}
