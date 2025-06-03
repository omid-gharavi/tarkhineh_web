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
                navList.map(({ name, href, isLink }, index) => (
                    isLink ?
                        <Link
                            key={index + 1}
                            href={href ?? ''}
                            className={`hover:text-tint-7 max-laptop:text-black flex items-center gap-1 ${pathname === href ? 'text-primary-theme font-bold underline underline-offset-8' : 'text-gray-7 font-medium'}`}>
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