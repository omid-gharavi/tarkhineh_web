import Image from "next/image";
import Icon from "../icon/icon";
import { Input } from "@/components/ui/input";

export default function Footer() {
    const footerList: { title: string, lists: string[], icons?: string[] }[] = [
        {
            title: 'دسترسی آسان',
            lists: ['پرسش‌های متداول', 'قوانین ترخینه', 'حریم خصوصی'],
            icons: ['twitter', 'instagram', 'telegram'],
        },
        {
            title: 'شعبه‌های ترخینه',
            lists: ['شعبه اکباتان', 'شعبه چالوس', 'شعبه اقدسیه', 'شعبه ونک'],
        },
    ];

    const inputList: { type: string, placeholder: string }[] = [
        {
            type: 'text',
            placeholder: 'نام و نام خانوادگی',
        },
        {
            type: 'tel',
            placeholder: 'شماره تماس',
        },
        {
            type: 'email',
            placeholder: 'آدرس ایمیل (اختیاری)',
        },
    ]

    return (
        <div className="mt-12 relative h-80">
            <Image
                src={'/images/pic01.jpg'}
                alt="footer"
                width={700}
                height={700}
                className="absolute -z-20 size-full object-cover"
            />
            <div className="absolute -z-10 inset-0 bg-[rgba(0,0,0,0.5)]"></div>
            <div className="text-white pt-8 flex justify-center gap-32 max-laptop:gap-20">
                {
                    footerList.map(({ title, lists, icons }, index) => (
                        <ul className="flex flex-col gap-4" key={index + 1}>
                            <span className="font-bold text-xl">{title}</span>
                            {
                                lists.map((list, index) => (
                                    <li key={index + 1} className="font-medium text-sm">{list}</li>
                                ))
                            }
                            <div className="flex items-center gap-4">
                                {
                                    icons?.map((icon, index) => (
                                        <Icon
                                            name={icon}
                                            key={index + 1}
                                            className="size-6"
                                        />
                                    ))
                                }
                            </div>
                        </ul>
                    ))
                }
                <form className="max-laptop:hidden">
                    <span className="font-bold text-xl">پیام به ترخینه </span>
                    <div className="mt-4 h-36 flex items-center gap-6">
                        <div className="flex flex-col gap-3">
                            {
                                inputList.map(({ type, placeholder }, index) => (
                                    <Input
                                        key={index + 1}
                                        type={type}
                                        placeholder={placeholder}
                                        className="placeholder:text-right placeholder:text-white h-10"
                                    />
                                ))
                            }
                        </div>
                        <div className="">
                            <textarea />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}