"use client";

import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

// Case study data for mapping
const caseStudies = [
  {
    id: 1,
    category: "Financial",
    date: "January 16, 2024",
    title: "Financial Restructuring for a Growing Business Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
    imagePosition: "right",
  },
  {
    id: 2,
    category: "Financial",
    date: "January 16, 2024",
    title: "Financial Restructuring for a Growing Business Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
    imagePosition: "left",
  },
  {
    id: 3,
    category: "Financial",
    date: "January 16, 2024",
    title: "Financial Restructuring for a Growing Business Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.",
    imagePosition: "right",
  },
];

export const VideoSection = (): JSX.Element => {
  const { ref, controls, inView } = useScrollAnimation();

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1,
      x: -30
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
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
      className="flex w-full items-center justify-center pt-[50px] pb-[70px]"
    >
      <div className="flex flex-col w-full max-w-[1240px] items-center gap-[60px] py-[9px] px-6">
        {/* Section Header */}
        <motion.header 
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          <motion.p 
            variants={fadeInUp}
            className="[font-family:'Outfit',Helvetica] font-normal text-[#808187] text-base text-center leading-[22px]"
          >
            Our Resolved Cases
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            className="[font-family:'Outfit',Helvetica] font-medium text-[#1c3f3a] text-[45px] text-center leading-[51.8px]"
          >
            See the Real Results of the Cases
            <br />
            We Have Solved
          </motion.h2>
        </motion.header>

        {/* Case Studies */}
        <motion.div 
          variants={staggerContainer}
          className="flex flex-col items-start gap-[35px] w-full"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={cardVariants}
              className="sticky top-0"
              style={{ 
                zIndex: index + 1,
                marginBottom: index === caseStudies.length - 1 ? '0' : '35px'
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-0 flex flex-col h-auto items-center w-full overflow-hidden">
                <CardContent className="flex flex-col lg:flex-row w-full max-w-[1200px] items-center justify-center gap-5 py-[30px] px-0">
                  {caseStudy.imagePosition === "left" ? (
                    <>
                      {/* Image Section */}
                      <motion.div 
                        variants={imageVariants}
                        className="flex flex-col w-full lg:w-[760px] h-[300px] lg:h-[466px] items-start gap-2.5 relative rounded-[15px] overflow-hidden"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Image
                          src="/image-2.png"
                          alt="Case study image"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1c3f3a] opacity-20 rounded-[15px]" />
                      </motion.div>

                      {/* Content Section */}
                      <motion.div 
                        variants={contentVariants}
                        className="flex flex-col w-full lg:w-[420px] h-auto lg:h-[466px] items-start gap-[30px] lg:gap-[103px] p-[30px] bg-[#1c3f3a] rounded-[15px]"
                      >
                        <motion.div 
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.6,
                                delay: 0.6,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          className="flex flex-col w-full items-start gap-1.5"
                        >
                          <p className="self-stretch h-[17px] mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#e3f488] text-sm tracking-[-0.35px] leading-[17.5px]">
                            {caseStudy.category} - {caseStudy.date}
                          </p>
                          <h3 className="self-stretch [font-family:'Outfit',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[27.5px]">
                            {caseStudy.title.split(" ").slice(0, 4).join(" ")}
                          </h3>
                          <h3 className="self-stretch [font-family:'Outfit',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[27.5px]">
                            {caseStudy.title.split(" ").slice(4).join(" ")}
                          </h3>
                        </motion.div>

                        <motion.p 
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.8,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          className="w-full [font-family:'Outfit',Helvetica] font-normal text-[#ffffff7a] text-base leading-6"
                        >
                          {caseStudy.description.split(".")[0]}.
                          <br />
                          {caseStudy.description.split(".")[1]?.trim()}
                          <br />
                          {caseStudy.description.split(".")[2]?.trim()}
                        </motion.p>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 0.5,
                                delay: 1,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="px-7 py-[13px] bg-[#e3f488] rounded-[200px] hover:bg-[#d9eb7a]">
                            <span className="[font-family:'Outfit',Helvetica] font-semibold text-[#1c3f3a] text-base leading-5">
                              Read Details
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Content Section */}
                      <motion.div 
                        variants={contentVariants}
                        className="flex flex-col w-full lg:w-[420px] h-auto lg:h-[466px] items-start gap-[30px] lg:gap-[103px] p-[30px] bg-[#1c3f3a] rounded-[15px] order-2 lg:order-1"
                      >
                        <motion.div 
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.6,
                                delay: 0.6,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          className="flex flex-col w-full items-start gap-1.5"
                        >
                          <p className="self-stretch h-[17px] mt-[-1.00px] [font-family:'Outfit',Helvetica] font-medium text-[#e3f488] text-sm tracking-[-0.35px] leading-[17.5px]">
                            {caseStudy.category} - {caseStudy.date}
                          </p>
                          <h3 className="self-stretch [font-family:'Outfit',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[27.5px]">
                            {caseStudy.title.split(" ").slice(0, 4).join(" ")}
                          </h3>
                          <h3 className="self-stretch [font-family:'Outfit',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[27.5px]">
                            {caseStudy.title.split(" ").slice(4).join(" ")}
                          </h3>
                        </motion.div>

                        <motion.p 
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.8,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          className="w-full [font-family:'Outfit',Helvetica] font-normal text-[#ffffff7a] text-base leading-6"
                        >
                          {caseStudy.description.split(".")[0]}.
                          <br />
                          {caseStudy.description.split(".")[1]?.trim()}
                          <br />
                          {caseStudy.description.split(".")[2]?.trim()}
                        </motion.p>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: {
                                duration: 0.5,
                                delay: 1,
                                ease: "easeOut" as const
                              }
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="px-7 py-[13px] bg-[#e3f488] rounded-[200px] hover:bg-[#d9eb7a]">
                            <span className="[font-family:'Outfit',Helvetica] font-semibold text-[#1c3f3a] text-base leading-5">
                              Read Details
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>

                      {/* Image Section */}
                      <motion.div 
                        variants={imageVariants}
                        className="flex flex-col w-full lg:w-[760px] h-[300px] lg:h-[466px] items-start gap-2.5 relative rounded-[15px] overflow-hidden order-1 lg:order-2"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Image
                          src="/image-2.png"
                          alt="Case study image"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1c3f3a] opacity-20 rounded-[15px]" />
                      </motion.div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col lg:flex-row w-full max-w-[1110px] items-center justify-between px-0 lg:px-[103px] py-2.5 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-7 py-[13px] bg-[#e3f488] rounded-[200px] hover:bg-[#d9eb7a]">
              <span className="[font-family:'Outfit',Helvetica] font-medium text-[#1c3f3a] text-base leading-5">
                View All Cases
              </span>
            </Button>
          </motion.div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut" as const
                }
              }
            }}
            className="w-full max-w-[568.87px] h-auto mt-[-1.00px] text-[#656c6f] leading-[22px] [font-family:'Outfit',Helvetica] font-normal text-base text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit seddo
            eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            <br />
            veniam, quis nostrud exercitation ullamco laboris.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};