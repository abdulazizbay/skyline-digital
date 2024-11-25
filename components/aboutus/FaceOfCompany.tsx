"use client";
import { faceOfCompanyInfo } from "../../constants";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

export const FaceOfCompany = () => {
    return (
        <div className="max-container-width pt-150">
            <div className="max-container">
                <h4 className="bold-700">
                    Лица компании <span className="blue-main">SKYLINE DIGITAL</span>
                </h4>
            </div>
            <Carousel
                className="w-full pt-100"
                plugins={[
                    // Autoplay({
                    //     delay: 2000,
                    // }),
                ]}
            >
                <CarouselContent className="flex gap-0.5">
                    {faceOfCompanyInfo.map((item, index) => (
                        <CarouselItem key={index} className="flex-none">
                            <Card className="shadow-none">
                                <CardContent className="flex-col text-center p-2">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={300}
                                        height={350}
                                        className="transition duration-1000 ease-in-out grayscale hover:grayscale-0"
                                    />
                                    <h4 className="pt-5">{item.name}</h4>
                                    <h6 className="text-gray1 text-sm">{item.role}</h6>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
