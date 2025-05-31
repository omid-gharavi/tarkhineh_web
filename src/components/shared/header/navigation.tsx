'use client'

import { navList } from '@/data/header-lists'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Icon from '../icon/icon'
import { motion } from 'motion/react'

function Navigation() {
    const pathname = usePathname();

    return (
        <>
            {
                navList.map(({ name, icon, href, isLink }, index) => (
                    isLink ?
                        <Link
                            key={index + 1}
                            href={href ?? ''}
                            className={`hover:text-tint-7 flex items-center gap-1 ${pathname === href ? 'text-primary-theme min-laptop:font-bold min-laptop:underline min-laptop:underline-offset-8' : 'text-gray-7 font-medium'}`}>
                            <Icon name={icon} className='size-4 text-black max-laptop:block hidden' />
                            {name}
                        </Link>
                        :
                        <motion.div
                            key={index + 1}
                            className='text-gray-7 font-medium flex items-center gap-1'
                            whileHover="hover"
                            whileTap='tap'
                        >
                            {name}
                            <motion.span
                                transition={{ type: 'keyframes', duration: 0.2 }}
                                variants={{
                                    hover: { rotate: 180 },
                                    tap: { rotate: 180 },
                                }}>
                                <Icon name='arrow-down' className='size-4' />
                            </motion.span>
                        </motion.div>
                ))
            }
        </>
    )
}

export default Navigation