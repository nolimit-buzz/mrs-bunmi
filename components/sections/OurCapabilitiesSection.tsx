"use client";

import React from "react";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const capabilitiesData = [
  {
    id: 1,
    title: "Consulting",
    description: "Lorem ipsum dolor elit amet enim consecte.",
    bgColor: "bg-[#2d4a3e]",
    iconBg: "bg-[#cfff9c]",
    iconColor: "#2d4a3e",
    textColor: "text-white",
    descColor: "text-[#a8b5aa]",
    checkBgColor: "bg-[#cfff9c]",
    checkIconColor: "text-[#2d4a3e]",
    features: Array(5).fill("Executive Planning")
  },
  {
    id: 2,
    title: "Planning",
    description: "Lorem ipsum dolor elit amet enim consecte.",
    bgColor: "bg-[#cfff9c]",
    iconBg: "bg-[#2d4a3e]",
    iconColor: "#cfff9c",
    textColor: "text-[#2d4a3e]",
    descColor: "text-[#6b7c6f]",
    checkBgColor: "bg-[#2d4a3e]",
    checkIconColor: "text-[#cfff9c]",
    features: Array(5).fill("Executive Planning")
  },
  {
    id: 3,
    title: "Management",
    description: "Lorem ipsum dolor elit amet enim consecte.",
    bgColor: "bg-[#2d4a3e]",
    iconBg: "bg-[#cfff9c]",
    iconColor: "#2d4a3e",
    textColor: "text-white",
    descColor: "text-[#a8b5aa]",
    checkBgColor: "bg-[#cfff9c]",
    checkIconColor: "text-[#2d4a3e]",
    features: Array(5).fill("Executive Planning")
  },
  {
    id: 4,
    title: "Business",
    description: "Lorem ipsum dolor elit amet enim consecte.",
    bgColor: "bg-[#cfff9c]",
    iconBg: "bg-[#2d4a3e]",
    iconColor: "#cfff9c",
    textColor: "text-[#2d4a3e]",
    descColor: "text-[#6b7c6f]",
    checkBgColor: "bg-[#2d4a3e]",
    checkIconColor: "text-[#cfff9c]",
    features: Array(5).fill("Executive Planning")
  }
];

export const OurCapabilitiesSection = (): JSX.Element => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      // initial="hidden"
      // animate={controls}
      variants={staggerContainer}
      className="mt-12 flex flex-col items-center justify-center gap-[80px] py-[100px] px-6 w-full bg-white"
    >
      <div className="flex flex-col items-center justify-center max-w-[1240px] w-full">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-16 mb-[60px]"
        >
          <div className="flex flex-col items-start gap-6 flex-1 relative">
            <motion.span
              variants={fadeInUp}
              className="[font-family:'Outfit',Helvetica] font-normal text-[#9ca3af] text-base tracking-[1px] leading-[24px] uppercase absolute -top-10 left-0"
            >
              Our Capabilities
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="[font-family:'Outfit',Helvetica] font-bold text-[#2d4a3e] text-4xl md:text-5xl lg:text-[52px] tracking-[-1px] leading-[1.1]"
            >
              Your Business Goals
              <br />
              Are Our Top Priority
            </motion.h2>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex-1 max-w-[600px]"
          >
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#6b7280] text-lg leading-[28px]">
              We are driven by a fervent commitment to forge{" "}
              <span className="font-semibold text-[#2d4a3e]">
                profound connections between brands, services, and campaigns
              </span>{" "}
              fostering enduring and prosperous relationships between businesses and customers.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px]"
        >
          {capabilitiesData.map((capability, index) => (
            <motion.div key={capability.id} variants={staggerItem} className="relative">
              <div className="relative">
                <motion.div
                  className={`absolute -top-16 left-[10%] transform -translate-x-1/2 ${capability.bgColor} rounded-[20px] w-[80%] h-[253px] flex flex-col items-start justify-start gap-4 z-20 p-6 pt-8`}
                  whileHover={{
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  initial={{ rotateY: 0, scale: 1 }}
                >
                  <motion.div
                    className={`${capability.iconBg} rounded-[12px] w-[64px] h-[64px] flex items-center justify-center`}
                  >
                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.75008 16.5C9.63804 16.5 9.52601 16.5164 9.41914 16.5511C8.81164 16.7484 8.17273 16.875 7.50008 16.875C6.82742 16.875 6.18851 16.7484 5.58054 16.5511C5.47367 16.5164 5.36211 16.5 5.25008 16.5C2.34101 16.5 -0.015393 18.8662 7.57256e-05 21.7791C0.00663823 23.01 1.01867 24 2.25008 24H12.7501C13.9815 24 14.9935 23.01 15.0001 21.7791C15.0155 18.8662 12.6591 16.5 9.75008 16.5ZM7.50008 15C9.98539 15 12.0001 12.9853 12.0001 10.5C12.0001 8.01469 9.98539 6 7.50008 6C5.01476 6 3.00008 8.01469 3.00008 10.5C3.00008 12.9853 5.01476 15 7.50008 15ZM27.7501 0H9.75008C8.50929 0 7.50008 1.04297 7.50008 2.32453V4.5C8.59789 4.5 9.61414 4.81781 10.5001 5.33438V3H27.0001V16.5H24.0001V13.5H18.0001V16.5H14.4263C15.3216 17.2823 15.9788 18.3155 16.2868 19.5H27.7501C28.9909 19.5 30.0001 18.457 30.0001 17.1755V2.32453C30.0001 1.04297 28.9909 0 27.7501 0Z"
                        fill={capability.iconColor}
                      />
                    </svg>
                  </motion.div>

                  <h3 className={`[font-family:'Outfit',Helvetica] font-bold ${capability.textColor} text-xl leading-[24px] text-left w-full`}>
                    {capability.title}
                  </h3>

                  <p className={`[font-family:'Outfit',Helvetica] font-normal ${capability.descColor} text-sm leading-[18px] text-left w-full`}>
                    {capability.description}
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#F7F8FB] rounded-[20px] p-6 pt-[200px] flex flex-col gap-4 min-h-[320px] relative border border-gray-100 mt-[126px]"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="flex flex-col gap-3 flex-1">
                    {capability.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.div
                          className={`w-4 h-4 rounded-full ${capability.checkBgColor} flex items-center justify-center flex-shrink-0`}
                          whileHover={{
                            scale: 1.2,
                            rotate: 180,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <CheckIcon className={`w-2.5 h-2.5 ${capability.checkIconColor}`} />
                        </motion.div>
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#6b7280] text-sm leading-[20px]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
