import localFont from "next/font/local";

export const vazir_font = localFont({
    src: [
        {
            path: '../../public/fonts/Vazir-Medium.woff',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../../public/fonts/Vazir-Medium.woff2',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../../public/fonts/Vazir-Medium.ttf',
            style: 'normal',
            weight: '400'
        },
        {
            path: '../../public/fonts/Vazir-Bold.woff',
            style: 'normal',
            weight: '700'
        },
        {
            path: '../../public/fonts/Vazir-Bold.woff2',
            style: 'normal',
            weight: '700'
        },
        {
            path: '../../public/fonts/Vazir-Bold.ttf',
            style: 'normal',
            weight: '700'
        },
    ],
    display: 'swap'
});