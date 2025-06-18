"use client";

import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

export const ResultsSection = (): JSX.Element => {
  const { ref, controls, inView } = useScrollAnimation();

  // Animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      x: -30
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="flex flex-col items-center justify-center gap-2.5 py-12 bg-white w-full max-w-[1240px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1240px] w-full px-6 gap-20 lg:gap-8">
        <motion.div 
          variants={imageVariants}
          className="flex-1 relative w-full max-w-[827px] h-[516.66px] rotate-180 order-2 lg:order-1"
        >
          <div className="w-full relative h-[517px]">
            <motion.div 
              className="w-[691px] h-[517px] top-0 right-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,119,76,1)_0%,rgba(255,119,76,0)_73%)] opacity-60"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 0.6,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] as const
                  }
                }
              }}
            />

            <div className="absolute w-[329px] h-[497px] top-2.5 right-1/4 overflow-hidden rounded-[15px]">
              <motion.div 
                className="relative w-[329px] h-[467px] right-0 rotate-180"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94] as const
                    }
                  }
                }}
              >
                <Image
                  src="/cover-book-mockup-2-png-1.png"
                  alt="Book cover mockup"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={contentVariants}
          className="flex-1 border-none shadow-none -ml-0 order-1 lg:order-2"
        >
          <Card className="border-none shadow-none w-full">
            <CardContent className="flex flex-col items-start gap-[26px] pr-0 py-0">
              <motion.h2 
                variants={fadeInUp}
                className="mt-[-1.00px] font-['Outfit',Helvetica] font-bold text-dark-bluecolor-1 text-4xl tracking-[0] leading-10"
              >
                Don&apos;t miss out on my
                <br />
                latest free guide
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="w-full max-w-[792px] text-dark-bluecolor-3 leading-[22px] font-['Outfit',Helvetica] font-normal text-base tracking-[0]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna.
              </motion.p>

              <motion.div
                className="w-full h-[0.8px]"
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: {
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94] as const
                    }
                  }
                }}
              >
                <Separator className="w-full max-w-[500px] h-[0.8px] bg-[#242F651A] border-[#242f651a]" />
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="w-full max-w-[792px] font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base tracking-[0] leading-[22px]"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </motion.p>

              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-[200px] h-[60px] px-[46px] py-0 bg-[#091d2d] rounded-[10px] text-[#cfff9c] text-sm hover:bg-[#091d2d]/90">
                  BUY NOW
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};