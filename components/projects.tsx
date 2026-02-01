"use client";

import { useEffect, useRef } from "react";
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
  SiPostgresql,
  SiTypescript,
  SiSocketdotio,
  SiVercel,
  SiRazorpay,
  SiJavascript,
  SiRender,
  SiRedux,
  SiExpress,
  SiNginx,
  SiCloudinary,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiNextdotjs,
  SiSwagger,
  SiNetlify,
} from "react-icons/si";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Moestay Property Booking Platform",
    description:
      "Worked as a frontend developer responsible for building and maintaining scalable user interfaces using Next.js. Implemented API integrations using RTK Query for efficient data fetching, caching, and state management, ensuring smooth and consistent data flow across the application. Followed industry-standard coding practices to build reusable components, handle role-based UI flows, and optimize performance. Collaborated closely with backend and design teams to translate business requirements into scalable, production-ready user interfaces while maintaining consistent design patterns across all modules.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
      "Netlify",
      "Swagger",
      "Github",
    ],
    duration: "Client: Moestay via ThinQ Technologies",
    links: null,
  },
  {
    title: "TailMate | Scalable Pet Care & Veterinary Platform",
    description:
      "Industry-grade pet care platform enabling pet adoption, selling, and matchmaking (breeding), along with real-time veterinary video/audio consultations using WebRTC. Implemented Redis for OTP/session caching and performance optimization, Stripe for secure payment handling, and Socket.IO for real-time chat and notifications. Built with clean RESTful API mapping, SOLID principles, OOP-driven design, and layered architecture (controller-service-repository). Features role-based access control, admin analytics, vet earnings management, and scalable cloud deployment on Render and Vercel.",
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "WebRTC",
      "Stripe",
      "Tailwind CSS",
      "Multer",
      "Cloudinary",
      "Axios",
      "Brevo Mailer",
      "Render",
      "Vercel",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/Tailmate",
      live: "https://tailmate-care.vercel.app",
    },
  },
  {
    title: "ServiceLink | Service Booking Platform",
    description:
      "Service discovery and booking platform where end users can browse and book services at no cost, while service providers purchase monthly membership subscriptions to get listed on the platform. Implemented Stripe-based recurring subscription billing exclusively for servicemen, including plan validation, access control, and expiry handling. Built secure JWT authentication, role-based authorization, and scalable RESTful APIs following SOLID principles and OOP-based clean architecture. Developed as a group project, collaborating with a team using Git-based workflows and coordinated feature development.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.IO",
      "Tailwind CSS",
      "Axios",
      "Nodemailer",
      "JWT",
      "Vercel",
    ],
    links: {
      github: "https://github.com/Razirasheed03/servicelink-platform",
      live: "https://servicelink.vercel.app",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-blue-400" />;
      case "Redux Toolkit":
      case "RTK Query":
        return <SiRedux className="text-purple-500" />;
      case "Node.js":
        return <SiNodedotjs className="text-green-600" />;
      case "Express.js":
        return <SiExpress className="text-gray-400" />;
      case "MongoDB":
        return <SiMongodb className="text-green-500" />;
      case "PostgreSQL":
        return <SiPostgresql className="text-blue-600" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />;
      case "Socket.IO":
        return <SiSocketdotio className="text-foreground" />;
      case "AWS":
      case "AWS EC2":
        return <FaAws className="text-orange-500" />;
      case "Vercel":
        return <SiVercel className="text-foreground" />;
      case "Razorpay":
        return <SiRazorpay className="text-blue-500" />;
      case "JWT":
        return <SiJavascript className="text-yellow-400" />;
      case "Next.js":
        return <SiNextdotjs className="text-black-600" />;
      case "Render":
        return <SiRender className="text-green-500" />;
      case "Nginx":
        return <SiNginx className="text-green-500" />;
      case "Cloudinary":
        return <SiCloudinary className="text-blue-400" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-500" />;
      case "Bootstrap":
        return <SiBootstrap className="text-purple-500" />;
      case "Postman":
        return <SiPostman className="text-orange-600" />;
      case "Figma":
        return <SiFigma className="text-pink-500" />;
      case "Nodemailer":
      case "NodeCache":
      case "Helmet.js":
      case "Winston":
        return <SiNodedotjs className="text-green-600" />;
      case "Multer":
      case "Axios":
        return <SiJavascript className="text-yellow-400" />;
      case "MVC":
      case "EJS":
      case "Session":
        return <SiJavascript className="text-yellow-400" />;
      case "Swagger":
      case "REST APIs":
        return <SiSwagger className="text-white-400" />;
      case "Netlify":
        return <SiNetlify className="text-green-400" />;
      case "Github":
        return <SiGithub className="text-white-400" />;
      default:
        return <SiReact className="text-blue-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  {project.duration && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.duration}
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent
                className={`flex-grow ${
                  project.title === "Moestay Property Booking Platform"
                    ? "-mt-3"
                    : ""
                }`}
              >
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full space-y-2">
  {project.links ? (
    <div className="flex flex-col gap-2 w-full">
      {project.links.github && (
        <Button
          variant="secondary"
          className="w-full gap-2"
          asChild
        >
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-4 w-4" />
            Source Code
          </a>
        </Button>
      )}

      {project.links.live && (
        <Button className="w-full gap-2" asChild>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="h-4 w-4" />
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
      🔒 Confidential - Contact for Demo
    </Button>
  )}
</div>

              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
