import React from 'react'
import Icon from '../icon/icon'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/svgs/logo'
import Navigation from './navigation'
import { X } from 'lucide-react'

function HamburgerMenu() {
    return (
        <Sheet>
            <SheetTrigger className='max-laptop:block hidden'>
                <Icon name='menu' className='size-7 text-primary-theme' />
            </SheetTrigger>
            <SheetContent className='p-4'>
                <SheetTitle className='flex items-center justify-between'>
                    <Logo />
                    <SheetClose asChild>
                        <X className='size-5 text-primary-theme' />
                    </SheetClose>
                </SheetTitle>
                <div className='mt-2 flex flex-col gap-6'>
                    <div className='bg-tint-1 rounded-sm cursor-pointer flex items-center justify-center size-8'>
                        <Icon name='search' className='size-4 text-primary-theme' />
                    </div>
                    <Navigation />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default HamburgerMenu