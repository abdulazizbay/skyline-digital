"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { SERVICESINFO } from "@/constants";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import rightArrowIcon from "@/app/assets/images/rightArrow.svg";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { saveFormData } from "@/redux/progressSlice";
import { useRouter } from "next/navigation";
import { Summary } from "@/components/services/Summary";

const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "Выберите хотя бы 1 услугу.",
    }),
});

export const Services1 = () => {
    const [progress, setProgress] = useState(25);
    const [dataInfo, setDataInfo] = useState(0);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: [],
        },
    });

    const dispatch = useDispatch();
    const router = useRouter();

    const watchedItems = useWatch({ control: form.control, name: "items" });

    useEffect(() => {
        dispatch(saveFormData({ items: watchedItems }));
    }, [watchedItems, dispatch]);

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        setProgress(progress + 25);
        const newDataInfo = dataInfo + 1;
        setDataInfo(newDataInfo);

        if (newDataInfo === 3) {
            router.push("/services/nextStep");
        }
    };

    const handlePrev = () => {
        if (progress > 25) {
            setProgress(progress - 25);
            setDataInfo(dataInfo - 1);
        }
    };

    return (
        <div className="pt-150 pb-130 max-w-[1143px] mx-auto">
            <h4>Выберите сервис</h4>
            <Progress value={progress} className="w-[1090px] bg-gray4 mt-7" />

            <div className="pt-100 flexBetween">
                <div className="w-[717px]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                            <FormField
                                control={form.control}
                                name="items"
                                render={() => (
                                    <FormItem className="grid grid-cols-2 gap-[25px]">
                                        {(SERVICESINFO[dataInfo] || []).map((item) => (
                                            <FormField
                                                key={item.label}
                                                control={form.control}
                                                name="items"
                                                render={({ field }) => (
                                                    <FormItem
                                                        className="flex gap-5 w-[346px] h-90 bg-[#0DA4F51A] rounded-[24px] items-center pl-[40px] cursor-pointer"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className="rounded-full w-5 h-5 bg-gray5"
                                                                checked={field.value?.includes(item.label)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.label])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.label
                                                                            )
                                                                        );
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel>
                                                            <h6 className="bold-500">{item.label}</h6>
                                                        </FormLabel>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between mt-50">
                                {progress > 25 && <NextPrevButton role="prev" onClick={handlePrev} />}
                                <NextPrevButton role="next" />
                            </div>
                        </form>
                    </Form>
                </div>

                <Summary />
            </div>
        </div>
    );
};

const NextPrevButton = ({ role, onClick }) => {
    return (
        <>
            {role === "next" ? (
                <Button
                    type="submit"
                    className="flexBetween px-[30px] w-[346px] h-[57px] rounded-[100px] bg-gradient-to-r from-[#00A6FF4D] via-[#00A6FF4D] to-[#00A6FF]"
                >
                    <h6>Следующий этап</h6>
                    <Image src={rightArrowIcon} alt="right arrow" />
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={onClick}
                    className="w-[232px] h-[68px] bg-[#00A6FF1A] rounded-[100px]"
                >
                    <Image src={rightArrowIcon} alt="right arrow" className="rotate-180" />
                    <h6>Назад</h6>
                </Button>
            )}
        </>
    );
};
