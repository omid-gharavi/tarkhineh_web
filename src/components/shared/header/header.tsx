import Logo from '@/components/svgs/logo'
import React from 'react'
import Navigation from './navigation'
import Icon from '../icon/icon'

interface Props { }

function Header({ }: Props) {
    const iconList: { icon: React.ReactElement<SVGElement> }[] = [
        {
            icon: <Icon name='search' size={24} className='text-primary-theme' />
        },
        {
            icon: <Icon name='shopping-cart' size={24} className='text-primary-theme' />
        },
        {
            icon: <Icon name='user' size={24} className='text-primary-theme' />
        },
    ]

    return (
        <div className='sticky top-0 h-[115px] px-[108px] flex items-center justify-between'>
            <Logo />
            <Navigation />
            <div className='flex items-center gap-2'>
                {
                    iconList.map((value, index) => (
                        <div key={index + 1} className='bg-tint-1 rounded-sm p-2'>
                            {value.icon}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header