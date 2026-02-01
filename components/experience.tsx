"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center">Experience</h2>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <BriefcaseIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>Frontend Developer</CardTitle>
            <p className="text-sm text-muted-foreground">
          ThinQ Technologies (Freelance Project - Client: Moestay) • Dec 2025 - Feb 2026
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • Developed responsive and scalable frontend interfaces for
              an Airbnb-style property booking platform using Next.js and TypeScript
            </li>
            <li>
              • Implemented API integrations using RTK Query for efficient data fetching, caching, and state synchronization
            </li>
            <li>
              • Built reusable UI components and page layouts following industry-standard frontend architecture and best practices
            </li>
            <li>
              • Implemented secure client-side authentication flows using JWT access and refresh tokens
            </li>
            <li>
              • Worked across property onboarding, booking workflows, and admin-related views with consistent UX patterns
            </li>
            <li>
              • Consumed and mapped backend REST APIs based on documented endpoint contracts
            </li>
            <li>
              • Collaborated closely with backend and design teams to convert business requirements into production-ready UI features
            </li>
            <li>
              • Applied responsive design techniques and frontend performance optimizations for smooth cross-device experience
            </li>
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
