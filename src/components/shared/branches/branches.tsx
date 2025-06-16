import Image from "next/image"

export default function Branches() {
    const branchList: { image: string, title: string, desc: string }[] = [
        {
            image: '/images/pic01.jpg',
            title: 'شعبه اکباتان',
            desc: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
        },
        {
            image: '/images/pic02.jpg',
            title: 'شعبه چالوس',
            desc: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
        },
        {
            image: '/images/pic01.jpg',
            title: 'شعبه اقدسیه',
            desc: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
        },
        {
            image: '/images/pic02.jpg',
            title: 'شعبه ونک',
            desc: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
        },
    ]

    return (
        <div className="pt-12">
            <p className="font-bold text-2xl text-center">ترخینه گردی</p>
            <div className="mt-6 grid grid-cols-[repeat(4,minmax(100px,280px))] max-laptop:grid-cols-1 justify-center gap-x-6 gap-y-3 px-5">
                {
                    branchList.map(({ image, title, desc }, index) => (
                        <div
                            className="branch" key={index + 1}>
                            <div
                                className="branch-child transition-all"
                            >
                                <Image
                                    className="size-full object-cover overflow-hidden"
                                    src={image}
                                    alt="cover"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <p className="font-semibold max-laptop:font-medium text-xl max-laptop:text-sm px-2 text-center">{title}</p>
                                <p className="font-medium text-sm max-laptop:text-[10px] text-center px-2 mt-4 max-laptop:mt-2">{desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}