// NextStepPage.tsx
"use client";

import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import {Summary} from "@/components/services/Summary";
import {ContactForm} from "@/components/ContactForm";
import {ScrollDownRoundedShape} from "@/components/Buttons";

const NextStepPage = () => {
    const selectedData = useSelector((state: any) => state.progress.data);
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        if (selectedData?.items) {
            setItems(selectedData.items); // Populate items once the data is available
        }
    }, [selectedData]); // Only run when selectedData changes
    return (
        <div className="max-container pt-70 pb-10 ">
            <div className="max-w-[642px]">
                <h4 className="bold-700 ">
                    Ваша персональная оценка почти завершена!
                </h4>
                <p className="bold-500 mt-10 leading-6">
                    Чтобы убедиться в его точности, у нас осталось всего несколько вопросов.
                    Заполните форму или
                    <span className="blue-main"><Link href="/"> Запланируйте звонок </Link></span>
                    прямо сейчас, чтобы начать свой проект без промедления
                </p>
            </div>
            <div className="mt-100 flexBetween ">
                <Summary/>
                <div>
                    <ContactForm
                        role="service"
                    />
                    <div className="mt-[90px] flex float-right ">
                        <ScrollDownRoundedShape />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default NextStepPage;
