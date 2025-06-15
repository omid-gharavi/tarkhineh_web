import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon from "../icon/icon";

export default function AboutBody() {
    const aboutList: { title: string, icon: string }[] = [
        {
            title: 'پرسنلی مجرب و حرفه‌ای',
            icon: 'user',
        },
        {
            title: 'کیفیت بالای غذاها',
            icon: 'diagram',
        },
        {
            title: 'محیطی دلنشین و آرام',
            icon: 'home-wifi',
        },
        {
            title: 'منوی متنوع',
            icon: 'menu-board',
        },
    ]

    return (
        <div className="relative mt-20 min-h-96">
            <div className="absolute size-full backdrop-blur-xs -z-10"></div>
            <Image
                src={'/images/pic02.jpg'}
                className="absolute -z-20 size-full object-cover brightness-50"
                width={700}
                height={300}
                alt="cover"
            />
            <div className="mx-auto px-5 py-12 max-laptop:py-4 flex flex-wrap content-center justify-center gap-x-56 gap-y-6 text-white">
                <div className="w-full max-w-[600px]">
                    <p className="font-bold text-2xl max-laptop:text-lg">رستوران‌های زنجیره‌ای ترخینه</p>
                    <p className="text-xl max-laptop:text-sm mt-6 text-justify leading-8">مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
                    <Button variant={'glass'} className="font-medium mt-4 float-left">
                        اطلاعات بیشتر
                        <Icon name="arrow-down" className="rotate-90 mr-2 w-[184px]" />
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-x-6 max-laptop:gap-x-12 gap-y-2 max-laptop:gap-y-4">
                    {
                        aboutList.map(({ title, icon }, index) => (
                            <div className="flex flex-col items-center gap-y-4" key={index + 1}>
                                <Icon name={icon} className="size-12 max-laptop:size-6" />
                                <p className="text-lg max-laptop:text-xs">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}