'use client'

import { navigationList } from '@/data/list'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props { }

function Navigation({ }: Props) {
    const pathname = usePathname();

    return (
        <nav className='flex items-center gap-6'>
            {
                navigationList.map((val, index) => (
                    val.isLink ?
                        <Link
                            key={index + 1}
                            href={val.href ?? ''}
                            className={`${pathname === val.href ? 'text-primary-theme font-bold' : 'text-gray-7 font-medium'}`}>
                            {val.name}
                        </Link>
                        :
                        <div
                            key={index + 1}
                            className='text-gray-7 font-medium'>
                            {val.name}
                        </div>
                ))
            }
        </nav>
    )
}

export default Navigation