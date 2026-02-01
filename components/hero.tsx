"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon, CheckIcon } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadComplete(false);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/MUHAMMED_RAZI.pdf";
      link.download = "MUHAMMED_RAZI.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadComplete(true);

      setTimeout(() => {
        setDownloadComplete(false);
      }, 1500);
    }, 3000);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:min-h-screen pt-16 pb-8 px-4 md:px-8 lg:px-16 md:gap-4"
    >
<motion.div
className="md:w-1/2 flex justify-center order-2 md:order-1 md:mt-16 lg:mt-5"

  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div
  className="relative w-64 h-48
             md:w-[26rem] md:h-[17rem]
             lg:w-[29rem] lg:h-[19.5rem]
             rounded-3xl p-[3px]
             bg-white/10 backdrop-blur-xl
             border border-white/20 shadow-2xl"
>
  <div
    className="absolute inset-0 rounded-3xl
               bg-gradient-to-tr from-blue-500/20 via-transparent to-blue-400/10"
  />

  <div
    className="relative w-full h-full rounded-2xl overflow-hidden
               bg-background border border-white/10 shadow-inner"
  >
    <Image
      src="/hero3.jpeg"
      alt="Muhammed Razi"
      fill
      className="object-cover object-[50%_30%]"
      priority
    />
  </div>
</div>

</motion.div>



      <motion.div
        className="md:w-1/2 space-y-3 md:space-y-4 order-1 md:order-2 text-center md:text-left mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          MUHAMMED RAZI P P
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-blue-400">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground px-4 md:px-0">
          Crafting fast, responsive, and interactive web experiences.
        </p>
        <div className="flex justify-center md:justify-start">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleDownload}
              className="w-40 h-10 relative overflow-hidden"
              variant="default"
              disabled={isDownloading || downloadComplete}
            >
              <AnimatePresence mode="wait">
                {downloadComplete ? (
                  <motion.div
                    key="complete"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckIcon className="h-5 w-5" />
                  </motion.div>
                ) : isDownloading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-1"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1 h-1 bg-current rounded-full"
                        animate={{ opacity: [0.3, 1] }}
                        transition={{
                          duration: 0.6,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="download"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2"
                  >
                    <DownloadIcon className="h-5 w-5" />
                    <span>Download CV</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
