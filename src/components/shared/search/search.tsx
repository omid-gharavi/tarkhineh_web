'use client'

import { NotFoundSearch } from "@/components/svgs/not-found-search";
import { Input } from "@/components/ui/input"
import { SetStateAction, useRef } from "react"
import Icon from "../icon/icon";
import { X } from "lucide-react";

interface Props {
    setSearchToggle: React.Dispatch<SetStateAction<boolean>>
    searchToggle: boolean
}

export default function Search({ setSearchToggle, searchToggle }: Props) {
    const searchRef = useRef<HTMLInputElement | null>(null);

    return (
        <div
            className={`fixed top-[115px] right-0 z-50 shadow-lg bg-white w-full h-[calc(100dvh-115px)] transition-all duration-500 ease-in-out ${searchToggle ? 'translate-y-0' : '-translate-y-[calc(100dvh)]'}`}>
            <X onClick={() => setSearchToggle(false)} className="absolute top-4 left-8" size={24} />
            <div className="pt-20 pb-12 flex flex-col items-center gap-14">
                <div className="relative">
                    <Input
                        className="w-[392px] pl-11"
                        placeholder="جستجو..."
                        ref={searchRef}
                        type="search"
                        id="search"
                    />
                    <Icon className="absolute top-1/2 -translate-y-1/2 left-4" name="search" size={24} />
                </div>
                <NotFoundSearch />
            </div>
        </div>
    )
}