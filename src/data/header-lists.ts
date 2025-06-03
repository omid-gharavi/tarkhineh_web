export const navList: { name: string, icon: string, isLink: boolean, href?: string }[] = [
    {
        name: 'صفحه اصلی',
        icon: 'home',
        href: '/',
        isLink: true,
    },
    {
        name: 'شعبه',
        icon: 'home-hashtag',
        isLink: false,
    },
    {
        name: 'منو',
        icon: 'menu-board',
        isLink: false,
    },
    {
        name: 'اعطای نمایندگی',
        icon: '',
        href: '/donation',
        isLink: true,
    },
    {
        name: 'درباره ما',
        icon: 'profile-user',
        href: '/about',
        isLink: true,
    },
    {
        name: 'تماس با ما',
        icon: 'call',
        href: '/contact',
        isLink: true,
    },
]

export const iconList: string[] = ['user', 'search', 'shopping-cart']