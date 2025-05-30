import Logo from '@/components/svgs/logo'
import React from 'react'
import Navigation from './navigation'
import Icon from '../icon/icon'
import HamburgerMenu from './ham-menu'
import { iconList } from '@/data/header-lists'

interface Props { }

function Header({ }: Props) {

    return (
        <div className='sticky top-0 py-8 max-laptop:py-4 px-[108px] max-laptop:px-5 flex items-center justify-between'>
            <HamburgerMenu />
            <Logo />
            <nav className='max-laptop:hidden flex items-center gap-6'>
                <Navigation />
            </nav>
            <div className='flex items-center gap-2'>
                {
                    iconList.map(({ name }, index) => (
                        <div key={index + 1} className={`bg-tint-1 hover:bg-tint-2 rounded-sm cursor-pointer flex items-center justify-center size-10 max-laptop:size-7 ${name === 'search' && 'max-laptop:hidden'}`}>
                            <Icon name={name} className='text-primary-theme max-laptop:size-4 size-6' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header