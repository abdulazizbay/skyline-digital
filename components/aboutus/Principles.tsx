"use client"
import { PRINCIPLESINFO } from "@/constants";
import {LeaveRequestLink} from "@/components/Buttons";
import {Reviews} from "@/components/aboutus/Reviews";
import React from "react"

interface Principle {
    title: string;
    desc: string;
}

export const Principles = () => {
    return (
            <div className="max-container pt-150">
                <h4 >Наши принципы</h4>

                {/* Carousel for mobile */}
                {/*<div className="md:hidden">*/}
                {/*    <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows>*/}
                {/*        {PRINCIPLESINFO.map((item: Principle, key: number) => (*/}
                {/*            <div key={key} className=" p-4 rounded shadow">*/}
                {/*                <h6>#{key + 1}</h6>*/}
                {/*                <h6 className="font-bold">{item.title}</h6>*/}
                {/*                <p>{item.desc}</p>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </Carousel>*/}
                {/*</div>*/}

                {/* Grid for larger screens */}
                <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-50">
                    {PRINCIPLESINFO.map((item: Principle, key: number) => (
                        <li key={key} className="bold-600 w-[330px]">
                            <h6 className="blue-main">#{key + 1}</h6>
                            <h6 className="text-2xl">{item.title}</h6>
                            <p className="bold-400 text-base">{item.desc}</p>
                        </li>
                    ))}
                </ul>
                <div className="pt-100 w-400">
                    <h4 className="bold-600">Клиенты о нас</h4>
                    <p className="text-base pt-2.5 ">Создаем стильные и функциональные веб-сайты, которые привлекают внимание и удобны в использовании. </p>
                    <div className="pt-7">
                        <LeaveRequestLink/>
                    </div>

                </div>
                <Reviews/>
            </div>


    );
};


