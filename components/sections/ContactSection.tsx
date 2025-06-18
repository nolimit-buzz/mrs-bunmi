"use client";

import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

// Data for quick links section
const quickLinks = [
  { title: "Home", href: "#" },
  { title: "About Me", href: "#" },
  { title: "Booking", href: "#" },
  { title: "Shop", href: "#" },
];

// Data for social links section
const socialLinks = [
  { title: "X (Twittter)", href: "#" },
  { title: "LinkedIn", href: "#" },
  { title: "Facebook", href: "#" },
  { title: "Youtube", href: "#" },
];

export const ContactSection = (): JSX.Element => {
  const { ref, controls, inView } = useScrollAnimation();

  // Animation variants
  const ctaCardVariants = {
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
      x: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const footerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="relative w-full overflow-hidden bg-transparent"
    >
      <div className="relative w-full">
        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col w-full items-center justify-center gap-2.5 px-6"
        >
          <motion.div
            variants={ctaCardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="flex w-full max-w-[1240px] items-center gap-8 lg:gap-[152px] px-6 lg:px-[84px] py-8 relative rounded-[30px] shadow-shadow-1 bg-gradient-to-r from-[#f6fad5] to-[#e8f4c8]">
              <CardContent className="p-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-[152px] w-full">
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col w-full max-w-[488px] items-start gap-10"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col items-start gap-6 w-full"
                  >
                    <motion.h2 
                      variants={fadeInUp}
                      className="w-fit mt-[-1.00px] font-semibold text-dark-bluecolor-1 text-[32px] leading-10 font-['Outfit',Helvetica]"
                    >
                      Get 15-Minutes complimentary
                      <br />
                      online session.
                    </motion.h2>

                    <motion.p 
                      variants={fadeInUp}
                      className="w-full text-dark-bluecolor-3 leading-[22px] font-normal text-base font-['Outfit',Helvetica]"
                    >
                      <span className="text-[#6d7498]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus,
                        <br />
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                      </span>
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          delay: 0.4,
                          ease: "easeOut" as const
                        }
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-[222.52px] h-[54px] bg-[#cfff9c] text-[#091d2d] rounded-[10px] border-[#adda7c] border relative hover:bg-[#c0f08d]">
                      <motion.div 
                        className="absolute w-9 h-9 top-[9px] left-[15px] bg-[#091d2d] rounded-[50px] flex items-center justify-center"
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <PhoneIcon className="w-3.5 h-3.5 text-[#cfff9c]" />
                      </motion.div>
                      <span className="ml-12 font-normal text-sm text-center font-['Outfit',Helvetica]">
                        Make Appointment
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div 
                  variants={imageVariants}
                  className="relative w-full lg:w-[557.53px] h-[300px] lg:h-[382px] rounded-[20px] overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/image-cta-jpg.png"
                    alt="CTA Image"
                    fill
                    className="object-cover object-top"
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-[177px] h-[43px] rounded-lg overflow-hidden"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.6,
                          ease: "easeOut" as const
                        }
                      }
                    }}
                  >
                    <Image
                      src="/google-meet-text-logo-2020-1-v2-jpg.png"
                      alt="Google Meet Logo"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Footer Section */}
        <motion.div 
          variants={footerVariants}
          className="flex flex-col w-full items-center gap-10 pt-[200px] pb-20 px-6 lg:px-[310px] mt-10 bg-gradient-to-b from-[#f6fad5] to-[#f6fad5]"
        >
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col lg:flex-row w-full max-w-[1240px] items-start gap-8 lg:gap-20 relative"
          >
            {/* Logo and Description */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col w-full lg:w-[331.04px] items-start gap-[15px] relative"
            >
              <motion.img
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut" as const
                    }
                  }
                }}
                className="relative w-[259px] flex-[0_0_auto]"
                alt="Logo"
                src="/logo.svg"
              />

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                      ease: "easeOut" as const
                    }
                  }
                }}
                className="relative self-stretch font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm leading-[22px]"
              >
                Bunmi George shares her inspiring journey, nutrition wisdom,
                faith principles, and practical fitness tools to help you live
                your best life.
              </motion.p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col w-full lg:w-[164px] items-start gap-6 relative"
            >
              <motion.h3 
                variants={fadeInUp}
                className="w-fit mt-[-0.89px] font-bold text-dark-bluecolor-1 text-2xl whitespace-nowrap font-['Outfit',Helvetica] leading-[22px]"
              >
                Quick Links
              </motion.h3>

              <motion.div 
                variants={staggerContainer}
                className="inline-flex flex-col items-start gap-[17px]"
              >
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeOut" as const
                        }
                      }
                    }}
                    whileHover={{
                      x: 5,
                      color: "#091d2d",
                      transition: { duration: 0.3 }
                    }}
                    className="w-fit font-normal text-dark-bluecolor-3 text-sm whitespace-nowrap font-['Outfit',Helvetica] leading-[22px] hover:text-dark-bluecolor-1"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col w-full lg:w-[164px] items-start gap-6 relative"
            >
              <motion.h3 
                variants={fadeInUp}
                className="w-fit mt-[-0.89px] font-bold text-dark-bluecolor-1 text-2xl whitespace-nowrap font-['Outfit',Helvetica] leading-[22px]"
              >
                Social
              </motion.h3>

              <motion.div 
                variants={staggerContainer}
                className="inline-flex flex-col items-start gap-[17px]"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1,
                          ease: "easeOut" as const
                        }
                      }
                    }}
                    whileHover={{
                      x: 5,
                      color: "#091d2d",
                      transition: { duration: 0.3 }
                    }}
                    className="w-fit font-normal text-dark-bluecolor-3 text-sm whitespace-nowrap font-['Outfit',Helvetica] leading-[22px] hover:text-dark-bluecolor-1"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Newsletter */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col h-auto lg:h-[280px] items-start gap-6 relative flex-1 grow"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col items-start gap-6 relative self-stretch w-full"
              >
                <motion.h3 
                  variants={fadeInUp}
                  className="self-stretch mt-[-1.00px] font-bold text-dark-bluecolor-1 text-2xl font-['Outfit',Helvetica] leading-[22px]"
                >
                  Join Newsletter
                </motion.h3>

                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut" as const
                      }
                    }
                  }}
                  className="self-stretch font-normal text-dark-bluecolor-3 text-sm font-['Outfit',Helvetica] leading-[22px]"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus.
                </motion.p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.4,
                      ease: "easeOut" as const
                    }
                  }
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="flex flex-col h-[140px] items-start justify-center p-3 self-stretch w-full bg-white rounded-[20px] border-[#eef0f5] shadow-shadow-2 border border-solid">
                  <CardContent className="flex flex-col h-[105px] items-start gap-2.5 p-0 w-full">
                    <div className="flex flex-col max-w-[220.8px] w-full min-h-[47px] items-start justify-center pl-3 pr-0 py-0 rounded-[10px] overflow-hidden">
                      <Input
                        className="border-none shadow-none font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="flex flex-col w-[138px] min-h-[47px] items-center justify-center bg-[#091d2d] rounded-[10px] hover:bg-[#152a3d]">
                        <span className="font-['Outfit',Helvetica] font-semibold text-white text-sm text-center leading-[29.7px] whitespace-nowrap">
                          SUBSCRIBE
                        </span>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
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
            className="relative w-fit mt-10 font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm text-center leading-[18px] whitespace-nowrap"
          >
            © 2025 All rights reserved by Mrs Bunmi George
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};