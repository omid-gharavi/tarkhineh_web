export const navigationList: { name: string, isLink: boolean, href?: string }[] = [
    {
        name: 'صفحه اصلی',
        href: '/',
        isLink: true,
    },
    {
        name: 'شعبه',
        isLink: false,
    },
    {
        name: 'منو',
        isLink: false,
    },
    {
        name: 'اعطای نمایندگی',
        href: '/contact',
        isLink: true,
    },
    {
        name: 'درباره ما',
        href: '/about',
        isLink: true,
    },
    {
        name: 'تماس با ما',
        href: '/test',
        isLink: true,
    },
]

// export const navigationIcons: { icon: SVGElement, href?: string }[] = [
//     {
//         icon: <Search,
//         href: '',
//     },
// ]