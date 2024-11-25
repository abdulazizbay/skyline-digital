"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants/index";
import { SkyLineLogoButton } from "@/components/Buttons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    return (
        <nav className="w-full max-w-[1240px] mx-auto flex items-center justify-between pt-[50px] px-3 whitespace-nowrap">

            <Link href="/" className="">
                <SkyLineLogoButton
                    wCircle="medium"
                    hCircle="medium"
                    borCircle="medium"
                    wRectangle="medium"
                    hRectangle="medium"
                    borRectangle="medium"
                    hLine="medium"
                    gapText="medium"
                    sizeTitle="md"
                    sizeDesc="sm"
                    gapAll="medium"
                    role="navbar"
                />
            </Link>

            <div className="hidden lg:flex relative">
                <button
                    className="text-blue-main "
                    onClick={() => setBurgerOpen((prev) => !prev)}
                >
                    ☰
                </button>
                {isBurgerOpen && (
                    <div className="absolute top-full mt-2 right-0   shadow-lg rounded-lg p-4 z-50">
                        <ul className="flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href} onClick={() => setBurgerOpen(false)}>
                                        <h6>{link.label}</h6>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <h6>+998(90) 777 77 77</h6>
                            </li>
                            <li>
                                <h6>RU</h6>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex lg:hidden items-center gap-[92px]">
                <ul className="flex gap-12">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href}>
                                <h6>{link.label}</h6>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="transition duration-300">

                                    <h6>+998(90) 777 77 77</h6>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="flex">
                                    <ul className="float-right">
                                        <li>
                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                Link 1
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                Link 2
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                                Link 3
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <p className="text-[11px]">SKYLINE DIGITAL</p>
                </div>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent transition duration-300">
                                <h6>RU</h6>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="rounded-md mt-1">
                                <ul className="p-2">
                                    <li>
                                        <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                            Link 1
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                            Link 2
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200">
                                            Link 3
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};
