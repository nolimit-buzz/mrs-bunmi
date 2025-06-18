"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn } from "@/hooks/useScrollAnimation";

export const HeroSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  // User testimonial avatars data
  const testimonialAvatars = [
    {
      src: "/young-woman-smiling-cheerful-concept-pyf2kel-300x300-jpg.png",
      alt: "Young woman smiling",
    },
    {
      src: "/young-man-with-redhead-beard-and-cap-txqkady-300x300-jpg.png",
      alt: "Young man with redhead beard",
    },
    {
      src: "/handsome-man-smiling-in-the-park-rkuhfqb-300x300-jpg.png",
      alt: "Handsome man smiling",
    },
    {
      src: "/portrait-of-a-woman-6m4s34k-300x300-jpg.png",
      alt: "Portrait of a woman",
    },
  ];

  // Star rating elements
  const starRating = Array(5).fill("★");

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const avatarStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const avatarItem = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="flex flex-col items-start justify-center gap-[60px] px-6 py-[120px] md:px-[136px] w-full max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col w-full items-start gap-5">
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="bg-transparent px-0 py-0 border-0">
            <motion.span
              className="relative w-fit [font-family:'Outfit',Helvetica] font-medium text-[#091d2d] text-lg tracking-[3.00px] leading-[27px] bg-[linear-gradient(180deg,rgba(207,255,156,0)_55%,rgba(207,255,156,1)_55%)] px-2.5"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              EMBRACE YOUR JOURNEY
            </motion.span>
          </Badge>
        </motion.div>

        <div className="relative w-full">
          <motion.h1
            variants={titleVariants}
            className="[font-family:'Outfit',Helvetica] font-medium text-[#091d2d] text-4xl md:text-6xl lg:text-[100px] tracking-[-3.50px] leading-tight md:leading-[110px]"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your True Potential
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              and Live Your Best Life
            </motion.span>
          </motion.h1>
          <motion.img
            className="hidden md:block max-w-full h-auto mt-6"
            alt="Decorative svg"
            src="/svg.svg"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full items-center gap-8 md:gap-[90px]">
        <motion.div variants={imageVariants}>
          <Card className="w-full md:w-[410px] h-auto rounded-[0px_0px_10px_10px] overflow-hidden border-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(207,255,156,1)_100%)]">
            <motion.div
              className="relative h-[427px]"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/freepik-br-dace521d-d2eb-4ba0-8d1d-66485a269779-2.png"
                alt="Life coach portrait"
                fill
                className="object-cover object-top"
              />
            </motion.div>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          className="flex flex-col w-full md:w-[745px] items-start gap-[30px]"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-[22px] w-full"
          >
            <motion.h2
              className="[font-family:'Outfit',Helvetica] font-bold text-[#091d2d] text-[22px] tracking-[0] leading-[33px]"
              whileHover={{
                color: "#556775",
                transition: { duration: 0.3 }
              }}
            >
              My Short Story
            </motion.h2>

            <motion.p
              className="[font-family:'Outfit',Helvetica] font-normal text-[#556775] text-xl tracking-[0] leading-[30px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Life coach websites are more than just places to book sessions
              with a coach. It is a center for resources and inspiration to help
              you reach your goals and overcome obstacles.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex items-center gap-5 flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#091d2d] text-white rounded-[10px] px-[31px] py-[18px] h-auto [font-family:'Outfit',Helvetica] font-bold text-lg">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="bg-[linear-gradient(180deg,rgba(207,255,156,0)_57%,rgba(207,255,156,1)_57%)] px-[5px] py-px h-auto [font-family:'Outfit',Helvetica] font-bold text-[#091d2d] text-lg flex items-center gap-2"
              >
                <motion.img
                  className="w-[15px] h-[15px]"
                  alt="Play icon"
                  src="/icon-5.svg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                Watch Video
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-[47px] pt-10 w-full"
          >
            <Separator className="w-full md:hidden border-[#cbd2d8]" />

            <motion.div
              variants={avatarStagger}
              initial="hidden"
              animate="visible"
              className="flex items-start relative"
            >
              {testimonialAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  variants={avatarItem}
                  className={`relative w-[55px] h-[55px] rounded-[50px] border-[3px] border-solid border-[#ffffff] shadow-[0px_5px_10px_#00000033] overflow-hidden ${
                    index > 0 ? "-ml-2.5" : ""
                  }`}
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}

              <motion.div
                className="flex w-[30px] h-14 items-center justify-center -ml-2.5 bg-[#cfff9c] rounded-[100px] border-[#adda7c] rotate-180 border border-solid"
                variants={avatarItem}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <div className="rotate-180 [font-family:'Outfit',Helvetica] font-bold text-[#091d2d] text-base text-center whitespace-nowrap">
                  5K+
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="flex flex-col items-start gap-2.5 px-0 md:px-[30px] py-0.5 md:border-l md:border-[#cbd2d8] w-full md:w-auto"
            >
              <motion.div
                className="flex items-center gap-[5px]"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {starRating.map((star, index) => (
                  <motion.span
                    key={index}
                    className="text-[#f3bb24] text-lg"
                    variants={staggerItem}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {star}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="[font-family:'Outfit',Helvetica] font-normal text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="text-[#556775]">Total Reviews</span>{" "}
                <motion.span
                  className="font-bold text-[#091d2d]"
                  whileHover={{
                    color: "#cfff9c",
                    transition: { duration: 0.3 }
                  }}
                >
                  (4.8 of 5)
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};