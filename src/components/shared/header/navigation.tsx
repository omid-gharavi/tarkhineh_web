import { list } from '@/data/list'
import Link from 'next/link'
import React from 'react'

interface Props { }

function Navigation({ }: Props) {
    return (
        <nav className='flex items-center gap-6'>
            {
                list.map((val, index) => (
                    val.isLink ?
                        <Link href={val.href ?? ''}>{val.name}</Link>
                        :
                        <div>{val.name}</div>
                ))
            }
        </nav>
    )
}

export default Navigation