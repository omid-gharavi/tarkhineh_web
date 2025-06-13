'use client'

import { navList } from "@/data/header-lists";
import Link from "next/link";
import Icon from "../icon/icon";
import { useState } from "react";

export default function NavigationMobile() {
    const [toggle, setToggle] = useState<boolean[]>([false, false]);

    const switchToggle = (index: number): void => {
        setToggle(prev => {
            const updatedValue = [...prev];
            updatedValue[index] = !updatedValue[index];
            return updatedValue;
        })
    };

    return (
        <div className="flex flex-col gap-4">
            {
                navList.filter(item => item.href !== '/donation').map(({ name, icon, isLink, href, items }, index) => (
                    isLink ?
                        (
                            <div key={index + 1}>
                                <Link
                                    href={href ?? ''}
                                    className="flex items-center gap-2">
                                    <Icon name={icon} size={16} />
                                    <span>{name}</span>
                                </Link>
                                {
                                    href !== '/contact' && <div className="h-0.5 bg-gray-3 w-full mt-2"></div>
                                }
                            </div>
                        )
                        :
                        (
                            <div key={index + 1}>
                                <div className={`flex flex-col ${toggle[index - 1] ? 'gap-4' : 'gap-0'} transition-all duration-300 ease-in-out`}>
                                    <div
                                        className="flex items-center gap-2"
                                        onClick={() => switchToggle(index - 1)}>
                                        <Icon name={icon} size={16} />
                                        <span>{name}</span>
                                        <div
                                            className={`mr-auto transition-all duration-300 ease-in-out ${toggle[index - 1] ? 'rotate-180' : 'rotate-0'}`}>
                                            <Icon name='arrow-down' className='size-4' />
                                        </div>
                                    </div>
                                    <div className={`grid transition-all duration-300 ease-in-out shrink-0 ${toggle[index - 1] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                        <div className='overflow-hidden flex flex-col gap-2'>
                                            {
                                                items?.map(({ title, href }, index) => (
                                                    <Link key={index + 1} className={`pt-2 border-t-2 border-gray-3`} href={href}>{title}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="h-0.5 bg-gray-3 w-full mt-2"></div>
                            </div>
                        )
                ))
            }
        </div>
    )
}