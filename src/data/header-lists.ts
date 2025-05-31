export const navList: { name: string, icon: string, isLink: boolean, href?: string }[] = [
    {
        name: 'صفحه اصلی',
        icon: 'home',
        href: '/',
        isLink: true,
    },
    {
        name: 'شعبه',
        icon: '',
        isLink: false,
    },
    {
        name: 'منو',
        icon: '',
        isLink: false,
    },
    {
        name: 'اعطای نمایندگی',
        icon: '',
        href: '/contact',
        isLink: true,
    },
    {
        name: 'درباره ما',
        icon: '',
        href: '/about',
        isLink: true,
    },
    {
        name: 'تماس با ما',
        icon: '',
        href: '/test',
        isLink: true,
    },
]

export const iconList: { name: string }[] = [
    { name: 'user' },
    { name: 'search' },
    { name: 'shopping-cart' }
]