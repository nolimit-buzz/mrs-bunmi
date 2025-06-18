import { ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

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
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-[70px] w-full bg-[url(/frame-1272638274.png)] bg-cover bg-center">
      <div className="flex flex-col items-center gap-6 max-w-[1240px] w-full px-6">
        <h2 className="font-['Outfit',Helvetica] font-bold text-[#242f65] text-4xl text-center leading-10">
          Elevate Your Life with Our Upcoming Events
        </h2>

        <p className="font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base text-center leading-[22px] max-w-[495px]">
          Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
          <br />
          accusantium doloremque laudantium elit.
        </p>
      </div>

      <Card className="max-w-[1240px] w-full shadow-shadow-1 rounded-[10px] mx-6">
        <CardContent className="p-0">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col lg:flex-row items-center justify-between p-[34px] gap-6 ${
                index < events.length - 1
                  ? "border-b-[0.5px] border-[#b6b9cb]"
                  : ""
              }`}
            >
              <div className="relative w-full lg:w-72 h-[165px]">
                <Image
                  src={event.image}
                  alt={`Event image for ${event.title}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-5 px-0 lg:px-9 py-2.5 h-full lg:border-x-[0.5px] lg:border-[#b6b9cb] flex-1">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-['Outfit',Helvetica] font-semibold text-[#242f65] text-[22px] tracking-[-0.07px] leading-[33px]">
                    {event.title}
                  </h3>

                  <p className="font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base leading-[22px]">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full">
                  <div className="w-6 h-6 bg-[#cfff9c] rounded-[30px] flex items-center justify-center">
                    <ClockIcon className="w-3.5 h-3.5 text-dark-bluecolor-1" />
                  </div>

                  <span className="font-['Outfit',Helvetica] font-light text-dark-bluecolor-3 text-lg">
                    {event.time}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full">
                  <div className="w-6 h-6 bg-[#cfff9c] rounded-[30px] flex items-center justify-center">
                    <MapPinIcon className="w-3.5 h-3.5 text-dark-bluecolor-1" />
                  </div>

                  <span className="font-['Outfit',Helvetica] font-light text-dark-bluecolor-3 text-lg">
                    {event.location}
                  </span>
                </div>
              </div>

              <Button className="w-full lg:w-[200px] h-[60px] bg-[#091d2d] rounded-[10px] text-white text-sm font-normal">
                LEARN MORE
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};