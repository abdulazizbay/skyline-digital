"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SOCIALMEDIAINFO } from "../constants";
import Image from "next/image";
import React from "react"

const formSchema = z.object({
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    userMessage: z.string().min(1, { message: "Message cannot be empty." }),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions.",
    }),
});

export function ContactForm({role}) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: true,
        },
    });
    const router = useRouter();

    const onSubmit = (data) => {
        console.log(data);
        form.reset({ username: "", email: "", termsAccepted: "",userMessage:"" })
        router.push("/");
    };

    return (
        <div className=" max-container">
            {
                role==="home"
                    ? (
                        <h3 className="bold-500 pb-100 lg:text-lg lg:pb-6">
                            <span className="blue-main">Свяжитесь с нами</span> для<br />
                            расчета стоимости
                        </h3>
                    )
                    :null
            }
            <div className="flexBetween lg:block">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-[650px] lg:w-full">
                        <div className="flex gap-12 lg:gap-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Ваше имя"
                                                {...field}
                                                className="border-0 border-b border-b-gray3 focus:border-white focus:ring-0 w-300 lg:w-[169px] text-xl lg:text-sm bold-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Ваше E-mail"
                                                {...field}
                                                className="border-0 border-b border-b-gray3 focus:border-white focus:ring-0 w-300 lg:w-[169px] text-xl lg:text-sm bold-500"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="userMessage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Напишите все что Вам нужно"
                                            {...field}
                                            className="w-full border-0 border-b border-b-gray3 focus:border-white focus:ring-0  mt-50 text-xl lg:text-sm bold-500"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="pt-50 flex items-center gap-3 lg:pt-6">
                            <FormField
                                control={form.control}
                                name="termsAccepted"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Checkbox
                                                id="terms"
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="rounded-[30px] w-[30px] h-[30px] lg:w-[14px] lg:h-[14px] border-[2px] border-blue-main"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <label
                                htmlFor="terms"
                                className="text-base bold-500 peer-disabled:cursor-not-allowed text-gray3 lg:text-[10px]"
                            >
                                я принимаю Политику конфиденциальности
                            </label>
                        </div>

                        {
                            role==="home"
                                ? (
                                    <div className="pt-50 flexBetween lg:pt-8">
                                        {SOCIALMEDIAINFO.map((item, key) => (
                                            <a href={item.linkTo} key={key}>
                                                <div className="w-[180px] h-[100px] lg:w-100 lg:h-[56px] border-[1px] border-blue-main rounded-20 flex flexCol gap-1 lg:gap-0 justify-center items-center">
                                                    <Image src={item.icon} alt="icon" className="lg:w-[16px] lg:h-[16px]"/>
                                                    <p className="text-base lg:text-[10px]">{item.label}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )
                                :null
                        }


                        <Button
                            type="submit"
                            className="w-full h-[68px] lg:h-[47px] bg-blue-main text-white text-2xl lg:text-sm bold-500 rounded-[100px] mt-50 hover:bg-blue-main"
                        >
                            {role==="home"?
                            "Подать заявку"
                                :
                                "Отправить"
                            }
                        </Button>
                    </form>
                </Form>
                {
                    role==="home"
                        ? (
                            <p style={{ textShadow: '-1px 0px 48px rgba(13, 164, 245, 1)' }}>Your text here</p>
                        )
                        :null
                }
            </div>
        </div>
    );
}
