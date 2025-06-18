import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Image from "next/image";

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
  return (
    <footer className="relative w-full overflow-hidden bg-transparent">
      <div className="relative w-full">
        {/* CTA Section */}
        <div className="flex flex-col w-full items-center justify-center gap-2.5 px-6">
          <Card className="flex w-full max-w-[1240px] items-center gap-8 lg:gap-[152px] px-6 lg:px-[84px] py-8 relative rounded-[30px] shadow-shadow-1 bg-gradient-to-r from-[#f6fad5] to-[#e8f4c8]">
            <CardContent className="p-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-[152px] w-full">
              <div className="flex flex-col w-full max-w-[488px] items-start gap-10">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="w-fit mt-[-1.00px] font-semibold text-dark-bluecolor-1 text-[32px] leading-10 font-['Outfit',Helvetica]">
                    Get 15-Minutes complimentary
                    <br />
                    online session.
                  </h2>

                  <p className="w-full text-dark-bluecolor-3 leading-[22px] font-normal text-base font-['Outfit',Helvetica]">
                    <span className="text-[#6d7498]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus,
                      <br />
                      luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </span>
                  </p>
                </div>

                <Button className="w-[222.52px] h-[54px] bg-[#cfff9c] text-[#091d2d] rounded-[10px] border-[#adda7c] border relative hover:bg-[#c0f08d]">
                  <div className="absolute w-9 h-9 top-[9px] left-[15px] bg-[#091d2d] rounded-[50px] flex items-center justify-center">
                    <PhoneIcon className="w-3.5 h-3.5 text-[#cfff9c]" />
                  </div>
                  <span className="ml-12 font-normal text-sm text-center font-['Outfit',Helvetica]">
                    Make Appointment
                  </span>
                </Button>
              </div>

              <div className="relative w-full lg:w-[557.53px] h-[300px] lg:h-[382px] rounded-[20px_0px_0px_0px] overflow-hidden">
                <Image
                  src="/image-cta-jpg.png"
                  alt="CTA Image"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 w-[177px] h-[43px] rounded-lg overflow-hidden">
                  <Image
                    src="/google-meet-text-logo-2020-1-v2-jpg.png"
                    alt="Google Meet Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col w-full items-center gap-10 pt-[200px] pb-20 px-6 lg:px-[310px] mt-10 bg-gradient-to-b from-[#f6fad5] to-[#f6fad5]">
          <div className="flex flex-col lg:flex-row w-full max-w-[1240px] items-start gap-8 lg:gap-20 relative">
            {/* Logo and Description */}
            <div className="flex flex-col w-full lg:w-[331.04px] items-start gap-[15px] relative">
              <img
                className="relative w-[259px] flex-[0_0_auto]"
                alt="Logo"
                src="/logo.svg"
              />

              <p className="relative self-stretch font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm leading-[22px]">
                Bunmi George shares her inspiring journey, nutrition wisdom,
                faith principles, and practical fitness tools to help you live
                your best life.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col w-full lg:w-[164px] items-start gap-6 relative">
              <h3 className="w-fit mt-[-0.89px] font-bold text-dark-bluecolor-1 text-2xl whitespace-nowrap font-['Outfit',Helvetica] leading-[22px]">
                Quick Links
              </h3>

              <div className="inline-flex flex-col items-start gap-[17px]">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-fit font-normal text-dark-bluecolor-3 text-sm whitespace-nowrap font-['Outfit',Helvetica] leading-[22px] hover:text-dark-bluecolor-1"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col w-full lg:w-[164px] items-start gap-6 relative">
              <h3 className="w-fit mt-[-0.89px] font-bold text-dark-bluecolor-1 text-2xl whitespace-nowrap font-['Outfit',Helvetica] leading-[22px]">
                Social
              </h3>

              <div className="inline-flex flex-col items-start gap-[17px]">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-fit font-normal text-dark-bluecolor-3 text-sm whitespace-nowrap font-['Outfit',Helvetica] leading-[22px] hover:text-dark-bluecolor-1"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col h-auto lg:h-[280px] items-start gap-6 relative flex-1 grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <h3 className="self-stretch mt-[-1.00px] font-bold text-dark-bluecolor-1 text-2xl font-['Outfit',Helvetica] leading-[22px]">
                  Join Newsletter
                </h3>

                <p className="self-stretch font-normal text-dark-bluecolor-3 text-sm font-['Outfit',Helvetica] leading-[22px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus.
                </p>
              </div>

              <Card className="flex flex-col h-[140px] items-start justify-center p-3 self-stretch w-full bg-white rounded-[20px] border-[#eef0f5] shadow-shadow-2 border border-solid">
                <CardContent className="flex flex-col h-[105px] items-start gap-2.5 p-0 w-full">
                  <div className="flex flex-col max-w-[220.8px] w-full min-h-[47px] items-start justify-center pl-3 pr-0 py-0 rounded-[10px] overflow-hidden">
                    <Input
                      className="border-none shadow-none font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  <Button className="flex flex-col w-[138px] min-h-[47px] items-center justify-center bg-[#091d2d] rounded-[10px] hover:bg-[#152a3d]">
                    <span className="font-['Outfit',Helvetica] font-semibold text-white text-sm text-center leading-[29.7px] whitespace-nowrap">
                      SUBSCRIBE
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative w-fit mt-10 font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm text-center leading-[18px] whitespace-nowrap">
            © 2025 All rights reserved by Mrs Bunmi George
          </div>
        </div>
      </div>
    </footer>
  );
};