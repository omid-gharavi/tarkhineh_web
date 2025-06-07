'use client'

import { DrawerClose } from "@/components/ui/drawer";
import { X } from "lucide-react";
import { useState } from "react";

export default function DrawerSearch() {
    const [inputSearch, setInputSearch] = useState<string>('');

    return (
        <div className="p-4">
            <div className="flex items-center gap-6">
                <input
                    type="search"
                    placeholder="جستجو"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    className="w-full h-10 rounded-xl border-gray-3 border-2 px-4"
                />
                <DrawerClose asChild>
                    <button>
                        <X size={20} />
                    </button>
                </DrawerClose>
            </div>
        </div>
    )
}