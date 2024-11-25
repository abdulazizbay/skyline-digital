"use client";

import { useState } from "react";
import Image from "next/image";
import expertiseIcon from "@/app/assets/images/Expertise.svg";
import databaseIcon from "@/app/assets/images/databasecloud.svg";
import cnnIcon from "@/app/assets/images/CNN.svg";
import HighScalIcon from "@/app/assets/images/HighScalability.svg";
import openSourceIcon from "@/app/assets/images/Opensourceprojects.svg";
import BracketsIcon from "@/app/assets/images/brackets.svg";
import React from "react"

const choices = [
    { image: expertiseIcon, label: "Веб-дизайн", label2: "UI/UX", text: "Создаем стильные и функциональные веб-сайты, которые привлекают внимание и удобны в использовании. Будь то корпоративный сайт, блог или портфолио – ваш сайт будет выделяться" },
    { image: databaseIcon, label: "Веб-разработка", label2: "Backend", text: "Превращаем ваши идеи в реальность. Мы разрабатываем уникальные веб-решения, оставляющие впечатление." },
    { image: cnnIcon, label: "Аналитика", label2: "Big Data", text: "Современный подход к анализу данных и решений, отличающихся красотой и функциональностью." },
    { image: HighScalIcon, label: "Масштабируемость", label2: "High Scalability", text: "Уникальные решения для бизнеса. Мы создаем адаптивные сайты, которые выглядят великолепно." },
    { image: openSourceIcon, label: "Open Source", label2: "Сообщество", text: "Дизайн, который говорит за вас. Воплощаем желания в дизайне, отражающем ваш бренд." },
];

const iconPositions = [
    { position: "top-0 left-0", index: 0 },
    { position: "top-0 right-0", index: 1 },
    { position: "bottom-0 left-0", index: 2 },
    { position: "bottom-0 right-0", index: 3 },
];

export const AgencyServices = () => {
    const [centerIndex, setCenterIndex] = useState<number>(4);

    const handleClick = (index: number) => {
        setCenterIndex(index);
    };

    return (
        <div className="max-container pt-150">
            <p className="text-2xl font-bold">Услуги агентства</p>
            <div className="mt-2 w-[63px] h-[2px] bg-white"></div>

            <div className="relative w-full mt-100">
                {iconPositions.map(({ position, index }) => (
                    <div
                        key={index}
                        className={`absolute ${position} cursor-pointer flexCenter w-[70px] h-[70px] bg-gray2 rounded-[24px] blur-[1px]`}
                        onClick={() => handleClick(index)}
                    >
                        <Image src={choices[index].image} alt={choices[index].label} width={42} height={42} />
                    </div>
                ))}

                <div className="flexCol items-center text-center">
                    <div className="flex space-x-1">
                        <Image src={BracketsIcon} alt="Brackets Icon" />
                        <Image src={BracketsIcon} alt="Brackets Icon" />
                    </div>
                    <p className="bold-700 mt-5 w-[550px]">{choices[centerIndex].text}</p>
                    <div className="w-[100px] h-[100px] bg-gray2 rounded-[24px] flexCenter mt-6">
                        <Image src={choices[centerIndex].image} alt={choices[centerIndex].label} width={42} height={42} />
                    </div>
                    <p className="bold-700 mt-5">{choices[centerIndex].label}</p>
                    <p className="bold-700 mt-2.5">{choices[centerIndex].label2}</p>
                    <div className="flex space-x-2 mt-8">
                        {choices.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2.5 w-2.5 rounded-full border-[1px] cursor-pointer border-blue-main ${
                                    index === centerIndex ? "bg-blue-600" : ""
                                }`}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};