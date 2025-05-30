export const navList: { name: string, isLink: boolean, href?: string }[] = [
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

export const iconList: { name: string }[] = [
    { name: 'user' },
    { name: 'search' },
    { name: 'shopping-cart' }
]