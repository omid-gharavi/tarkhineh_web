import React from 'react'
import Icon from '../icon/icon'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/svgs/logo'
import { X } from 'lucide-react'
import NavigationMobile from './navigation-mobile'
import DrawerSearch from '../search/drawer-search'

function HamburgerMenu() {
    return (
        <Sheet>
            <SheetTrigger className='max-laptop:block hidden'>
                <Icon name='menu' className='size-8 text-primary-theme' />
            </SheetTrigger>
            <SheetContent className='p-4 z-[70]'>
                <SheetTitle className='flex items-center justify-between'>
                    <Logo />
                    <SheetClose asChild>
                        <X className='size-5 text-primary-theme' />
                    </SheetClose>
                </SheetTitle>
                <div className='mt-2 flex flex-col gap-6'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className='flex items-center gap-4'>
                                <Icon name='search' className='size-4 text-primary-theme' />
                                <p>جستجو</p>
                            </button>
                        </SheetTrigger>
                        <SheetContent side='bottom' className='min-h-[100dvh] !rounded-none z-[70]'>
                            <DrawerSearch />
                        </SheetContent>
                    </Sheet>
                    <NavigationMobile />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default HamburgerMenu