'use client'

import Logo from '@/components/svgs/logo'
import React, { useState } from 'react'
import Navigation from './navigation'
import Icon from '../icon/icon'
import HamburgerMenu from './ham-menu'
import { iconList } from '@/lists/header-lists'
import Search from '../search/search'

function Header() {
    const [searchToggle, setSearchToggle] = useState<boolean>(false);

    return (
        <>
            <div className='sticky shadow-sm top-0 z-[60] bg-white py-8 max-laptop:py-4 px-[108px] max-laptop:px-5 flex items-center justify-between'>
                <HamburgerMenu />
                <Logo />
                <nav className='max-laptop:hidden flex items-center gap-6'>
                    <Navigation />
                </nav>
                <div className='flex gap-2'>
                    {
                        iconList.map((value, index) => (
                            index === 1 ?
                                (
                                    <div
                                        key={2}
                                        className={`bg-tint-1 hover:bg-tint-2 rounded-sm cursor-pointer flex items-center justify-center size-10 max-laptop:size-8 search max-laptop:hidden`}
                                        onClick={() => setSearchToggle(prev => !prev)}>
                                        <Icon name={value} className='text-primary-theme max-laptop:size-5 size-6' />
                                    </div>
                                ) :
                                (
                                    <div key={index + 1} className={`bg-tint-1 hover:bg-tint-2 rounded-sm cursor-pointer flex items-center justify-center size-10 max-laptop:size-8 ${value === 'search' ? 'max-laptop:hidden' : ''}`}>
                                        <Icon name={value} className='text-primary-theme max-laptop:size-5 size-6' />
                                    </div>
                                )
                        ))
                    }
                </div>
            </div>
            <Search searchToggle={searchToggle} />
        </>
    )
}

export default Header