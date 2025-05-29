import React from 'react'
import Icon from '../icon/icon'

interface Props { }

function HamburgerMenu({ }: Props) {
    return (
        <div className='max-laptop:block hidden'>
            <Icon name='menu' className='size-6 text-primary-theme' />
        </div>
    )
}

export default HamburgerMenu