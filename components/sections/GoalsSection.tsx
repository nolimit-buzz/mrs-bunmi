"use client";

import { ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

// Event data for mapping
const events = [
  {
    id: 1,
    title: "Denfest Life Mastery Summit",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
    time: "9:00 am - 4:00 pm, Jun 09, 2024",
    location: "Convention Hall 1 - Nusa Dua",
    image: "/image-blur.png",
  },
  {
    id: 2,
    title: "Denfest Life Mastery Summit",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
    time: "9:00 am - 4:00 pm, Jun 09, 2024",
    location: "Convention Hall 1 - Nusa Dua",
    image: "/image-blur-1.png",
  },
  {
    id: 3,
    title: "Denfest Life Mastery Summit",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
    time: "9:00 am - 4:00 pm, Jun 09, 2024",
    location: "Convention Hall 1 - Nusa Dua",
    image: "/image-blur-2.png",
  },
];

export const GoalsSection = (): JSX.Element => {
  const { ref, controls, inView } = useScrollAnimation();

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const eventItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="flex flex-col items-center justify-center gap-10 py-[70px] w-full bg-[url(/frame-1272638274.png)] bg-cover bg-center"
    >
      <motion.div 
        variants={fadeInUp}
        className="flex flex-col items-center gap-6 max-w-[1240px] w-full px-6"
      >
        <motion.h2 
          variants={fadeInUp}
          className="font-['Outfit',Helvetica] font-bold text-[#242f65] text-4xl text-center leading-10"
        >
          Elevate Your Life with Our Upcoming Events
        </motion.h2>

        <motion.p 
          variants={fadeInUp}
          className="font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base text-center leading-[22px] max-w-[495px]"
        >
          Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
          <br />
          accusantium doloremque laudantium elit.
        </motion.p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="max-w-[1240px] w-full mx-6"
      >
        <Card className="w-full shadow-shadow-1 rounded-[10px]">
          <CardContent className="p-0">
            <motion.div
              variants={staggerContainer}
              className="w-full"
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={eventItemVariants}
                  className={`flex flex-col lg:flex-row items-center justify-between p-[34px] gap-6 ${
                    index < events.length - 1
                      ? "border-b-[0.5px] border-[#b6b9cb]"
                      : ""
                  }`}
                  whileHover={{
                    backgroundColor: "rgba(207, 255, 156, 0.05)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="relative w-full lg:w-72 h-[165px]"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image
                      src={event.image}
                      alt={`Event image for ${event.title}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>

                  <div className="flex flex-col gap-5 px-0 lg:px-9 py-2.5 h-full lg:border-x-[0.5px] lg:border-[#b6b9cb] flex-1">
                    <motion.div 
                      className="flex flex-col gap-2.5"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeOut" as const
                          }
                        }
                      }}
                    >
                      <h3 className="font-['Outfit',Helvetica] font-semibold text-[#242f65] text-[22px] tracking-[-0.07px] leading-[33px]">
                        {event.title}
                      </h3>

                      <p className="font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base leading-[22px]">
                        {event.description}
                      </p>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-2.5 w-full"
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: 0.2,
                            ease: "easeOut" as const
                          }
                        }
                      }}
                    >
                      <motion.div 
                        className="w-6 h-6 bg-[#cfff9c] rounded-[30px] flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <ClockIcon className="w-3.5 h-3.5 text-dark-bluecolor-1" />
                      </motion.div>

                      <span className="font-['Outfit',Helvetica] font-light text-dark-bluecolor-3 text-lg">
                        {event.time}
                      </span>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-2.5 w-full"
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: 0.3,
                            ease: "easeOut" as const
                          }
                        }
                      }}
                    >
                      <motion.div 
                        className="w-6 h-6 bg-[#cfff9c] rounded-[30px] flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <MapPinIcon className="w-3.5 h-3.5 text-dark-bluecolor-1" />
                      </motion.div>

                      <span className="font-['Outfit',Helvetica] font-light text-dark-bluecolor-3 text-lg">
                        {event.location}
                      </span>
                    </motion.div>
                  </div>

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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full lg:w-[200px] h-[60px] bg-[#091d2d] rounded-[10px] text-white text-sm font-normal">
                      LEARN MORE
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};