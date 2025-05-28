import Logo from '@/components/svgs/logo'
import React from 'react'
import Navigation from './navigation'
import Icon from '../icon/icon'

interface Props { }

function Header({ }: Props) {
    return (
        <div className='sticky top-0 h-[115px] px-[108px] flex items-center justify-between'>
            <Logo />
            <Navigation />
            <Icon name='search' size={24} className='text-primary-theme' />
        </div>
    )
}

export default Header