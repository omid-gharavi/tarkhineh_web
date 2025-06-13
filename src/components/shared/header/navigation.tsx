'use client'

import { navList } from '@/data/header-lists'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Icon from '../icon/icon'
import { motion } from 'motion/react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent
} from '@/components/ui/navigation-menu'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'

function Navigation() {
    const pathname = usePathname();

    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList className='flex items-center gap-4' dir='rtl'>
                {
                    navList.map(({ name, href, isLink, items }, index) => (
                        isLink ?
                            <Link
                                key={index + 1}
                                href={href ?? ''}
                                className={`hover:text-tint-7 max-laptop:text-black ${pathname === href ? 'text-primary-theme font-bold underline underline-offset-8' : 'text-gray-7 font-medium'}`}>
                                {name}
                            </Link>
                            :
                            <NavigationMenuItem key={index + 1}>
                                <motion.div
                                    whileHover="hover"
                                    whileTap='tap'
                                >
                                    <NavigationMenuTrigger className='text-gray-7 font-medium flex items-center gap-1'>
                                        {name}
                                        <motion.span
                                            transition={{ type: 'keyframes', duration: 0.2 }}
                                            variants={{
                                                hover: { rotate: 180 },
                                                tap: { rotate: 180 },
                                            }}>
                                            <Icon name='arrow-down' className='size-4' />
                                        </motion.span></NavigationMenuTrigger>
                                </motion.div>
                                <NavigationMenuContent>
                                    <div className='flex flex-col gap-2 p-2'>
                                        {
                                            items?.map(({ title, href }, index) => (
                                                <NavigationMenuLink key={index + 1} asChild>
                                                    {
                                                        <Link className={`${items.length - 1 !== index && 'border-b border-gray-5 pb-2'}`} href={href}>{title}</Link>
                                                    }
                                                </NavigationMenuLink>
                                            ))
                                        }
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navigation