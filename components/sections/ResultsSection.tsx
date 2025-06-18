import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import Image from "next/image";

export const ResultsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-2.5 py-12 bg-white w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1240px] w-full px-6 gap-8">
        <div className="relative w-full max-w-[827px] h-[516.66px] rotate-180 order-2 lg:order-1">
          <div className="relative h-[517px]">
            <div className="absolute w-[585px] h-[517px] top-0 left-[242px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,119,76,1)_0%,rgba(255,119,76,0)_73%)] opacity-60" />

            <div className="absolute w-[691px] h-[497px] top-2.5 left-0 overflow-hidden rounded-[15px]">
              <div className="relative w-[329px] h-[467px] left-[365px] rotate-180">
                <Image
                  src="/cover-book-mockup-2-png-1.png"
                  alt="Book cover mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <Card className="border-none shadow-none -ml-0 lg:-ml-60 order-1 lg:order-2">
          <CardContent className="flex flex-col items-start gap-[26px] pl-0 lg:pl-20 pr-0 py-0">
            <h2 className="w-fit mt-[-1.00px] font-['Outfit',Helvetica] font-bold text-dark-bluecolor-1 text-4xl tracking-[0] leading-10">
              Don&apos;t miss out on my
              <br />
              latest free guide
            </h2>

            <p className="w-full max-w-[552px] h-[60px] text-dark-bluecolor-3 leading-[22px] font-['Outfit',Helvetica] font-normal text-base tracking-[0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <Separator className="w-full max-w-[500px] border-[#242f651a]" />

            <p className="w-full max-w-[532px] h-[73px] font-['Outfit',Helvetica] font-normal text-dark-bluecolor-3 text-base tracking-[0] leading-[22px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
              <br />
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              <br />
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>

            <Button className="w-[200px] h-[60px] px-[46px] py-0 bg-[#091d2d] rounded-[10px] text-[#cfff9c] text-sm hover:bg-[#091d2d]/90">
              BUY NOW
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};