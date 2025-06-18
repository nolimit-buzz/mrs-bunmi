import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const NavigationSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="w-3.5 h-3.5" />,
      text: "hello@jbums.com",
    },
    {
      icon: <PhoneIcon className="w-3.5 h-3.5" />,
      text: "(+62) 8896-2220",
    },
  ];

  // Navigation menu items
  const navItems = ["ABOUT ME", "BOOKING", "SHOP", "CONTACT US"];

  return (
    <header className="flex flex-col items-center w-full bg-transparent border-[0.3px] border-solid border-[#b6b9cb] relative z-50">
      {/* Top bar with contact information */}
      <div className="flex w-full items-center justify-center bg-dark-bluecolor-10">
        <div className="w-full max-w-[1240px] h-[42px] flex items-center justify-between py-2.5 px-6">
          <div className="flex items-center gap-[9px]">
            <img className="w-3.5 h-3.5" alt="Icon" src="/icon-1.svg" />
          </div>

          <div className="flex items-center gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <div className="font-kit-baliniz-com-semantic-item font-[number:var(--kit-baliniz-com-semantic-item-font-weight)] text-light-bluecolor-6 text-[length:var(--kit-baliniz-com-semantic-item-font-size)] tracking-[var(--kit-baliniz-com-semantic-item-letter-spacing)] leading-[var(--kit-baliniz-com-semantic-item-line-height)] whitespace-nowrap [font-style:var(--kit-baliniz-com-semantic-item-font-style)]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="flex w-full max-w-[1240px] h-[100px] items-center justify-between px-6 py-2.5">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img className="w-[60px] h-[66px]" alt="B LOGO" src="/b-logo.svg" />
          <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#242f65] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Bunmi George
          </div>
        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="[font-family:'Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-sm tracking-[0] leading-[normal] cursor-pointer hover:text-dark-bluecolor-1 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Appointment button */}
        <div className="flex items-center">
          <Button className="h-[54px] bg-[#cfff9c] text-[#091d2d] hover:bg-[#adda7c] rounded-[10px] border border-solid border-[#adda7c] px-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#091d2d] rounded-[50px] flex items-center justify-center">
                <PhoneIcon className="w-3.5 h-3.5 text-[#cfff9c]" />
              </div>
              <span className="[font-family:'Outfit',Helvetica] font-normal text-sm">
                Make Appointment
              </span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};