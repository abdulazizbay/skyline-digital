"use client"
import Image from "next/image";
import bannerImage from "../../app/assets/images/bannerImage.svg";
import { ButtonCircle, ScrollDownRoundedShape } from "@/components/Buttons";
import React from "react";

export const Banner = () => {
    return (
        <div className="max-container flex pt-24 gap-36">
            {/* Left Section */}
            <div>
                <Image width={400} height={415} src={bannerImage} alt="banner image" />
                <div className="mt-200 float-left">
                    <ScrollDownRoundedShape
                        RoundedtextColor="#0DA4F5"
                        imageType="scrollDownOvalShape"
                    />
                </div>
            </div>

            <div className="flexCol ">
                <div>
                    <div className="text-4xl font-bold">
                        <span className="text-blue-400">SKYLINE</span> - это исключительна уникальная кампания
                    </div>
                    <div className="text-xl leading-6 pt-5 ">
                        Lorem ipsum dolor sit amet consectetur.
                        Faucibus euismod eget tortor maecenas.
                        Erat nisi purus a aliquet habitant placerat.
                    </div>
                </div>

                <div className="flex justify-end pt-[144px]">
                    <ButtonCircle />
                </div>
            </div>
        </div>
    );
};
