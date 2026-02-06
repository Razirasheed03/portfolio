"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiStripe,
  SiSocketdotio,
  SiVercel,
  SiRazorpay,
  SiJavascript,
  SiRender,
  SiRedux,
  SiExpress,
  SiGithub,
  SiTailwindcss,
  SiCloudinary,
  SiFirebase,
  SiRedis,
  SiJsonwebtokens,
  SiNextdotjs,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

/* =======================
   ALL PROJECTS (5 TOTAL)
======================= */

const projects = [
  // ---- Main 3 (same as home) ----
  {
    title: "Moestay Property Booking Platform",
    description:
"Contributed as a frontend developer to an Airbnb-style property booking platform using Next.js and TypeScript. Built scalable, performance-optimized UI components and page flows, and integrated backend REST APIs using RTK Query for efficient data fetching, caching, and state synchronization. Implemented JWT-based authentication flows and ensured consistent UX across listing, booking, and admin-facing interactions while following industry-standard frontend architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "JWT",
    ],
    duration: "Client: Moestay via ThinQ Technologies",
    links: null,
  },
  {
    title: "TailMate | Complete Pet Care Ecosystem",
    description:
"Designed and developed a full-scale pet care ecosystem supporting pet adoption, selling, and intelligent matchmaking, along with real-time veterinary consultations. Implemented Socket.IO for live chat and notifications, Redis for session and OTP caching, and WebRTC for audio/video consultations. Built secure role-based access control, admin analytics, and scalable REST APIs following clean architecture principles, deployed on Render and Vercel.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Stripe",
      "Vercel",
      "JWT",
      "Render",
    ],
    links: {
      github: "https://github.com/Razirasheed03/Tailmate",
      live: "https://tailmate-care.vercel.app",
    },
  },
  {
    title: "ServiceLink | Service Listing Platform",
   description:
"Developed a service booking platform where end users can browse and book services for free, while service providers subscribe via monthly plans to get listed. Implemented Stripe-based subscription billing with plan validation, expiry handling, and access control. Built secure authentication, role-based authorization, and scalable REST APIs, collaborating within a team using Git-based workflows.",
    technologies: [
        "TypeScript",
      "React",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.IO",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/servicelink-platform",
      live: "https://servicelink.vercel.app",
    },
  },

  // ---- Extra 2 (View more) ----
  {
    title: "VoteStream | Live Polling Platform",
   description:
"Implemented a real-time polling and voting platform enabling live audience engagement. Built dynamic poll creation, voting, and result updates using Socket.IO. Integrated secure user authentication, role-based poll management, and real-time data synchronization to ensure low-latency updates across devices.",
    technologies: [
      "Next.js",
      "Socket.IO",
      "Node.js",
      "MongoDB",
      "JWT",
      "Firebase"
    ],
    links: {
      github: "https://github.com/Razirasheed03/votestream",
      live: "https://votestream.in",
    },
  },
    {
    title: "CaseVerse | E-commerce Platform",
    description:
"Built a complete e-commerce application featuring user authentication, product listings, cart management, order processing, and Razorpay payment integration. Developed an admin panel for managing products, categories, and orders, along with analytics dashboards. Implemented secure JWT-based authentication and scalable backend APIs using Node.js, Express.js, and MongoDB.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/CaseVerse",
    },
  },
];

export default function AllProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-blue-400" />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Node.js":
        return <SiNodedotjs className="text-green-600" />;
      case "MongoDB":
        return <SiMongodb className="text-green-500" />;
      case "Redux Toolkit":
      case "RTK Query":
        return <SiRedux className="text-purple-500" />;
      case "Socket.IO":
        return <SiSocketdotio />;
      case "JWT":
        return <SiJsonwebtokens />;
      case "Stripe":
        return <SiStripe className="text-blue-500" />;
      case "Razorpay":
        return <SiRazorpay className="text-blue-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-500" />;
      case "Redis":
        return <SiRedis />;
      case "Firebase":
        return <SiFirebase className="text-yellow-500"/>;
      case "Express.js":
        return <SiExpress />;
      case "Render":
        return <SiRender />;
      case "Vercel":
        return <SiVercel />;
      case "TypeScript":
        return <SiTypescript className="text-blue-500"/>;
      default:
        return <SiJavascript className="text-yellow-500"/>;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
          className="max-w-6xl mx-auto px-4"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">
            All Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    {project.duration && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.duration}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                {project.links ? (
  <div className="w-full flex flex-col gap-2">
    {project.links.github && (
      <Button variant="secondary" asChild>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="mr-2" />
          Source Code
        </a>
      </Button>
    )}

    {project.links.live && (
      <Button asChild>
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" />
          Live
        </a>
      </Button>
    )}
  </div>
) : (
  <Button
    variant="ghost"
    className="w-full text-muted-foreground hover:text-primary"
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    🔒 Confidential – Contact for Demo
  </Button>
)}

                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
