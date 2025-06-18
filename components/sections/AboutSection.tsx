"use client";

import { PlayCircleIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn } from "@/hooks/useScrollAnimation";

// Data for statistics to enable mapping
const statsData = [
  {
    value: 34,
    suffix: "+",
    label: "Years Experienced",
    hasBorder: true,
  },
  {
    value: 97,
    suffix: "%",
    label: "Expert Coach",
    hasBorder: false,
  },
  {
    value: 148,
    suffix: "+",
    label: "Joint Partner",
    hasBorder: true,
  },
  {
    value: 245,
    suffix: "k",
    label: "Satisfied Clients",
    hasBorder: false,
  },
];

// Custom hook for number counting animation
const useCountAnimation = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now < startTime) return;
      
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, delay, hasStarted]);

  const startCounting = () => setHasStarted(true);

  return { count, startCounting };
};

// Animated Number Component
const AnimatedNumber: React.FC<{
  value: number;
  suffix: string;
  label: string;
  hasBorder: boolean;
  index: number;
}> = ({ value, suffix, label, hasBorder, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { count, startCounting } = useCountAnimation(value, 2000, index * 200);

  React.useEffect(() => {
    if (isInView) {
      startCounting();
    }
  }, [isInView, startCounting]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-[3px] px-[54px] py-0 ${
        hasBorder ? "border-r border-l border-[#cbd2d8]" : ""
      } ${index === 0 ? "border-l-0" : ""} ${index === statsData.length - 1 ? "border-r-0" : ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <motion.div className="inline-flex items-center">
        <motion.div
          className="[font-family:'Outfit',Helvetica] font-bold text-[#091d2d] text-[56px] text-center leading-[61.6px]"
          whileHover={{
            color: "#cfff9c",
            textShadow: "0 0 30px rgba(207, 255, 156, 0.6)",
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
          animate={isInView ? {
            textShadow: [
              "0 0 0px rgba(207, 255, 156, 0)",
              "0 0 20px rgba(207, 255, 156, 0.3)",
              "0 0 0px rgba(207, 255, 156, 0)"
            ]
          } : {}}
          transition={{
            textShadow: {
              duration: 2,
              delay: index * 0.2 + 1,
              ease: "easeInOut"
            }
          }}
        >
          {count}
        </motion.div>

        <motion.div
          className="[font-family:'Outfit',Helvetica] font-bold text-[#9299bd] text-[32px] text-center tracking-[-0.64px] leading-[35.2px]"
          initial={{ opacity: 0, x: -30, rotate: -180 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: index * 0.15 + 0.5,
            ease: "easeOut"
          }}
          whileHover={{
            color: "#cfff9c",
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        >
          {suffix}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-full h-[30px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.8,
          ease: "easeOut"
        }}
      >
        <div className="relative w-[164px] h-[31px]">
          <motion.div
            className="absolute w-[164px] h-[30px] bg-[linear-gradient(180deg,rgba(207,255,156,1)_0%,rgba(255,255,255,1)_86%)]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: index * 0.15 + 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />

          <motion.div
            className="absolute h-[30px] inset-0 flex items-center justify-center [font-family:'Outfit',Helvetica] font-light text-[#556775] text-xl text-center leading-[30px]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 1.5
            }}
            whileHover={{
              color: "#091d2d",
              fontWeight: 600,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {label}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(207, 255, 156, 0) 0%, rgba(207, 255, 156, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(207, 255, 156, 0.1) 0%, rgba(207, 255, 156, 0) 70%)",
            "radial-gradient(circle at 50% 50%, rgba(207, 255, 156, 0) 0%, rgba(207, 255, 156, 0) 100%)"
          ],
          transition: { duration: 1, ease: "easeInOut" }
        }}
      />
    </motion.div>
  );
};

export const AboutSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  // Animation variants
  const videoCardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const playIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="flex flex-col items-center gap-[60px] py-[70px] px-4 md:px-8 lg:px-[111px] w-full"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between py-2.5 w-full max-w-[1240px] gap-8">
        <motion.div
          variants={fadeInLeft}
          className="flex flex-col items-start gap-10 w-full lg:w-[583px]"
        >
          <div className="flex flex-col items-start gap-[11px] w-full">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center gap-2.5 py-px bg-[linear-gradient(180deg,rgba(207,255,156,0)_55%,rgba(207,255,156,1)_55%)]"
            >
              <motion.div
                className="[font-family:'Outfit',Helvetica] font-medium text-[#091d2d] text-lg leading-[22px]"
                whileHover={{
                  scale: 1.05,
                  color: "#556775",
                  transition: { duration: 0.3 }
                }}
              >
                ABOUT BUNMI
              </motion.div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="[font-family:'Outfit',Helvetica] font-semibold text-[#091d2d] text-4xl md:text-5xl lg:text-[56px] tracking-[-1.12px] leading-[1.1]"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Inspiring You to Reach
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your Goals & Dreams
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-[#556775] leading-[27px] [font-family:'Outfit',Helvetica] font-normal text-base max-w-[553px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod diti
              <br />
              tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-[30px]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-[31px] py-[18px] bg-[#091d2d] rounded-[10px] [font-family:'Manrope',Helvetica] font-bold text-white text-base leading-6">
                Read More
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-[15px]"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative w-[52px] h-[52px] bg-[#cfff9c] rounded-[26px] flex items-center justify-center"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <img className="w-6 h-6" alt="Icon" src="/icon-18.svg" />
              </motion.div>

              <div className="flex flex-col items-start">
                <motion.div
                  className="[font-family:'Outfit',Helvetica] font-light text-[#556775] text-lg tracking-[-0.27px] leading-[27px]"
                  whileHover={{
                    color: "#091d2d",
                    transition: { duration: 0.3 }
                  }}
                >
                  For Consultation
                </motion.div>

                <motion.div
                  className="[font-family:'Outfit',Helvetica] font-bold text-[#091d2d] text-base leading-6"
                  whileHover={{
                    color: "#cfff9c",
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  contact@baliniz.com
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={videoCardVariants}>
          <Card className="relative w-full lg:w-[575px] h-[400px] lg:h-[653px] bg-[#091d2d] rounded-[10px] overflow-hidden">
            <motion.div
              className="w-full h-full rounded-[10px] overflow-hidden relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/project-discussion-in-office-lobby.png"
                alt="Project discussion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#091d2d] opacity-70"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={playIconVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayCircleIcon className="w-[100px] h-[100px] text-white cursor-pointer" />
                </motion.div>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      {/* Animated Statistics Section */}
      <div className="flex flex-wrap justify-center md:flex-nowrap w-full max-w-[1240px] items-center gap-[42px]">
        {statsData.map((stat, index) => (
          <AnimatedNumber
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            hasBorder={stat.hasBorder}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};