import { Button } from "@/components/ui/button";
import { menu } from "@/lists/menu";
import Image from "next/image";

export default function Menu() {
    return (
        <div className="flex flex-col items-center">
            <span className="text-2xl font-bold mt-12 mb-[153px] max-laptop:mb-16">منوی رستوران</span>
            <div className="grid grid-cols-4 max-laptop:grid-cols-2 items-center justify-center gap-x-6 gap-y-28">
                {
                    menu.map(({ title, image }, index) => (
                        <div key={index + 1} className="relative w-[287px] max-laptop:w-[152px] max-w-full min-h-[180px] max-laptop:min-h-[81px] border border-primary-theme rounded-lg">
                            <Image
                                loading="lazy"
                                src={image}
                                alt="cover"
                                className="size-[240px] max-laptop:size-[100px] absolute bottom-[61px] max-laptop:bottom-[29px] left-1/2 -translate-x-1/2 fade-animation opacity-0"
                                width={64}
                                height={64}
                            />
                            <Button
                                className="absolute left-1/2 -translate-x-1/2 top-[156px] max-laptop:top-[71px] w-[155px] max-laptop:w-[71px] h-12 max-laptop:h-8 text-xl max-laptop:text-xs"
                                variant={'primaryTheme'}>
                                {title}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}