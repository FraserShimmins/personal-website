'use client'

import { useState, useEffect } from "react";
import Image from "next/image"; 
import { type CarouselApi } from "../../shadcomponents/ui/carousel";
import { ChevronRight, ChevronLeft } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../shadcomponents/ui/carousel";

type Props = { images: string[] };

export default function ImageCarousel( { images }: Props) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

    useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative w-full group">
        <Carousel setApi={setApi} opts={{ loop: true }} className="bg-black rounded-2xl">
          <CarouselContent className="h-50 sm:h-90 ">
            {
              images.map((image : string) => (
                <CarouselItem key={image} className="h-full">

                  <div className="relative h-full w-full">
                      <Image
                        src={`/images/projectImages/${image}`}
                        alt={image}
                        fill
                        className="object-contain object-center"
                      />
                  </div>
                </CarouselItem>
              )
            )
            }
          </CarouselContent>
        </Carousel>

        <div className="text-sm md:text-lg lg:text-4xl">
          <button onClick={() => api?.scrollTo(current-1)} className="absolute left-3 top-1/2 -translate-y-1/2 
                                                            z-10 rounded-full text-black bg-white/30 group-hover:bg-white/50 
                                                            hover:bg-white active:bg-white/65 p-3">
            <ChevronLeft className="w-[1em] h-[1em]"/>
          </button>
          <button onClick={() => api?.scrollTo(current+1)} className="absolute right-3 top-1/2 -translate-y-1/2
                                                            z-10 rounded-full text-black bg-white/30 group-hover:bg-white/50
                                                            hover:bg-white active:bg-white/65 p-3">
            <ChevronRight className="w-[1em] h-[1em]"/>
          </button>
        </div>
    </div>
  )
}