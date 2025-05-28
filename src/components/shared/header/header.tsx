import Logo from '@/components/svgs/logo'
import React from 'react'
import Navigation from './navigation'

interface Props { }

function Header({ }: Props) {
    return (
        <div className='h-[115px] px-[108px] flex items-center justify-between'>
            <Logo />
            <Navigation />
        </div>
    )
}

export default Header