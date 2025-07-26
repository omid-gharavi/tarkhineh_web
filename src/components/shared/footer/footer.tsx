import Image from "next/image";
import Icon from "../icon/icon";
import FooterForm from "./footer-form";
import { footerList } from "@/lists/footer-lists";

export default function Footer() {
    return (
        <footer className="mt-12 relative min-h-80 max-laptop:min-h-[1000px]">
            <Image
                src={'/images/pic01.jpg'}
                alt="footer"
                width={700}
                height={700}
                className="absolute -z-20 size-full object-cover"
            />
            <div className="absolute -z-10 inset-0 bg-[rgba(0,0,0,0.5)]"></div>
            <div className="text-white pt-8 flex max-laptop:flex-col max-laptop:items-center justify-center gap-32 max-laptop:gap-20">
                {
                    footerList.map(({ title, lists, icons }, index) => (
                        <ul className="flex flex-col gap-4" key={index + 1}>
                            <span className="font-bold text-xl">{title}</span>
                            {
                                lists.map((list, index) => (
                                    <li key={index + 1} className="font-medium text-sm hover:text-tint-7">{list}</li>
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
                <FooterForm />
            </div>
        </footer>
    )
}