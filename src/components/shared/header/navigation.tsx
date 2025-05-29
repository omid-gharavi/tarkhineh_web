'use client'

import { navigationList } from '@/data/list'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Icon from '../icon/icon'
import { motion } from 'motion/react'

interface Props { }

function Navigation({ }: Props) {
    const pathname = usePathname();

    return (
        <nav className='max-laptop:hidden flex items-center gap-6'>
            {
                navigationList.map((val, index) => (
                    val.isLink ?
                        <Link
                            key={index + 1}
                            href={val.href ?? ''}
                            className={`hover:text-tint-7 ${pathname === val.href ? 'text-primary-theme font-bold underline underline-offset-8' : 'text-gray-7 font-medium'}`}>
                            {val.name}
                        </Link>
                        :
                        <motion.div
                            key={index + 1}
                            className='text-gray-7 font-medium flex items-center gap-1'
                            whileHover="hover"
                        >
                            {val.name}
                            <motion.span
                                transition={{ type: 'keyframes', duration: 0.2 }}
                                variants={{
                                    hover: { rotate: 180 },
                                }}>
                                <Icon name='arrow-down' className='size-4 text-gray-7' />
                            </motion.span>
                        </motion.div>
                ))
            }
        </nav>
    )
}

export default Navigation