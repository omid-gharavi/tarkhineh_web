import Logo from '@/components/svgs/logo'
import React from 'react'
import Navigation from './navigation'
import Icon from '../icon/icon'
import HamburgerMenu from './ham-menu'

interface Props { }

function Header({ }: Props) {
    const iconList: { name: string, icon: React.ReactElement<SVGElement> }[] = [
        {
            name: 'search',
            icon: <Icon name='search' className='text-primary-theme max-laptop:size-4 size-6' />
        },
        {
            name: 'shopping-cart',
            icon: <Icon name='shopping-cart' className='text-primary-theme max-laptop:size-4 size-6' />
        },
        {
            name: 'user',
            icon: <Icon name='user' className='text-primary-theme max-laptop:size-4 size-6' />
        },
    ]

    return (
        <div className='sticky top-0 py-8 max-laptop:py-4 px-[108px] max-laptop:px-5 flex items-center justify-between'>
            <HamburgerMenu />
            <Logo />
            <Navigation />
            <div className='flex items-center gap-2'>
                {
                    iconList.map(({ name, icon }, index) => (
                        <div key={index + 1} className={`bg-tint-1 hover:bg-tint-2 rounded-sm cursor-pointer flex items-center justify-center size-10 max-laptop:size-6 ${name === 'search' && 'max-laptop:hidden'}`}>
                            {icon}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header