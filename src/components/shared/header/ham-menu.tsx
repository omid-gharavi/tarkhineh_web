import React from 'react'
import Icon from '../icon/icon'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/components/svgs/logo'
import { X } from 'lucide-react'
import NavigationMobile from './navigation-mobile'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import Search from '../search/search'

function HamburgerMenu() {
    return (
        <Sheet>
            <SheetTrigger className='max-laptop:block hidden'>
                <Icon name='menu' className='size-8 text-primary-theme' />
            </SheetTrigger>
            <SheetContent className='p-4'>
                <SheetTitle className='flex items-center justify-between'>
                    <Logo />
                    <SheetClose asChild>
                        <X className='size-5 text-primary-theme' />
                    </SheetClose>
                </SheetTitle>
                <div className='mt-2 flex flex-col gap-6'>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <button className='flex items-center gap-4'>
                                <Icon name='search' className='size-4 text-primary-theme' />
                                <p>جستجو</p>
                            </button>
                        </DrawerTrigger>
                        <DrawerContent className='min-h-[100dvh] !rounded-none'>
                            <Search />
                        </DrawerContent>
                    </Drawer>
                    <NavigationMobile />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default HamburgerMenu