'use client'

import { navList } from "@/data/header-lists";
import Link from "next/link";
import Icon from "../icon/icon";
import { useState } from "react";

export default function NavigationMobile() {
    const [toggle, setToggle] = useState<boolean[]>([false, false]);

    const switchToggle = (index: number): void => {
        console.log(index, 'index')
        setToggle(prev => {
            const updatedValue = [...prev];
            updatedValue[index] = !updatedValue[index];
            return updatedValue;
        })
    };

    return (
        <div className="flex flex-col gap-4">
            {
                navList.filter(item => item.href !== '/donation').map(({ name, icon, isLink, href }, index) => (
                    isLink ?
                        (
                            <Link
                                key={index + 1}
                                href={href ?? ''}
                                className="flex items-center gap-2">
                                <Icon name={icon} size={16} />
                                <span>{name}</span>
                            </Link>
                        )
                        :
                        (
                            <div
                                key={index + 1}
                                className="flex items-center gap-2"
                                onClick={() => switchToggle(index - 1)}>
                                <Icon name={icon} size={16} />
                                <span>{name}</span>
                                <div
                                    className={`mr-auto transition-all duration-300 ease-in-out ${toggle[index - 1] ? 'rotate-180' : 'rotate-0'}`}>
                                    <Icon name='arrow-down' className='size-4' />
                                </div>
                            </div>
                        )
                ))
            }
        </div>
    )
}