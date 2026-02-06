"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

// Mock Project Data
const projects = [
  {
    title: "The Forum App",
    description: "A dynamic real-time discussion platform inspired by social media like Twitter, designed for information sharing and community interaction.",
    tags: ["Next.js", "Social Media", "Real-time"],
    link: "https://the-forum-angga-kusuma.vercel.app/",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "BNB Clone",
    description: "A replica of a famous Online Travel Agent (OTA) platform, focused on mastering Next.js, Tailwind CSS, and TypeScript.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://nyol-clone.vercel.app/",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "2-Ways Online Travel Agent",
    description: "A comprehensive travel planning platform with a user-friendly interface for flexible itineraries and quick bookings.",
    tags: ["Next.js 14", "TypeScript", "Redux", "Tailwind"],
    link: "https://www.2-ways.com/homes-list",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "2-Ways Analytic",
    description: "An analytics platform tailored specifically for 2-way Online Travel Agencies, integrated with RESTful APIs.",
    tags: ["Next.js", "TypeScript", "REST APIs"],
    link: "https://www.analytic.ezv.app/",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Genyol AI",
    description: "An AI-powered companion designed to assist with development solutions and creative problem-solving.",
    tags: ["Next.js 13", "TypeScript", "OpenAI API"],
    link: "https://github.com/anggakusumap",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Bali Dream Villas",
    description: "A tropical villa showcase combining Scandinavian Lofts and Indonesian Architecture.",
    tags: ["Next.js", "Design", "Architecture"],
    link: "https://bali-dream-villas.vercel.app/",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Alcove Villas",
    description: "A professional portfolio for luxury villas located in Uluwatu, Bali.",
    tags: ["Next.js", "Portfolio", "Real Estate"],
    link: "https://alcove-villas.vercel.app/",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Genyol Movie App",
    description: "A mobile application providing a seamless movie-watching and discovery experience.",
    tags: ["React Native", "TMDB API", "Mobile"],
    link: "https://github.com/anggakusumap",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Weather App",
    description: "A mobile app for real-time weather updates and personalized forecasts.",
    tags: ["React Native", "WeatherAPI", "Mobile"],
    link: "https://github.com/anggakusumap",
    code: "https://github.com/anggakusumap"
  },
  {
    title: "Modern Next.js Portfolio",
    description: "A high-performance portfolio built with the latest Next.js technology for a responsive user experience.",
    tags: ["Next.js", "React", "Portfolio"],
    link: "https://genyol-portfolio.vercel.app/",
    code: "https://github.com/nyol"
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my passion for building robust products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4 border-t border-border/40 mt-auto">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link href={project.code} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <Link href={project.link} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
            <Button variant="ghost" asChild>
                <Link href="https://github.com/nyol" target="_blank">
                    View More on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </Section>
  );
}
