import React from 'react'
import Icon from '../icon/icon'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/svgs/logo'
import Navigation from './navigation'

interface Props { }

function HamburgerMenu({ }: Props) {
    return (
        <Sheet>
            <SheetTrigger className='max-laptop:block hidden'>
                <Icon name='menu' className='size-7 text-primary-theme' />
            </SheetTrigger>
            <SheetContent className='p-4'>
                <SheetTitle>
                    <Logo />
                </SheetTitle>
                <div className='mt-2 flex flex-col gap-6'>
                    <div className='bg-tint-1 rounded-sm cursor-pointer flex items-center justify-center size-8'>
                        <div className=''>
                            <Icon name='search' className='size-4 text-primary-theme' />
                        </div>
                    </div>
                    <Navigation />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default HamburgerMenu