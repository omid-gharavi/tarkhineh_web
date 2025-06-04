import { DrawerClose } from "@/components/ui/drawer";

export default function Search() {
    return (
        <div className="p-4">
            <div className="flex items-center gap-2">
                <input
                    type="search"
                    placeholder="جستجو"
                    className="w-full h-10 rounded-xl border-gray-3 border-2 px-4"
                />
                <DrawerClose asChild>
                    <button>x</button>
                </DrawerClose>
            </div>
        </div>
    )
}