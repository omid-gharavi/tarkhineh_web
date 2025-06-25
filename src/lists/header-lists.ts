export const navList: { name: string, icon: string, isLink: boolean, href?: string, items?: { title: string, href: string }[] }[] = [
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
        items: [
            {
                title: 'اکباتان',
                href: '',
            },
            {
                title: 'چالوس',
                href: '',
            },
            {
                title: 'اقدسیه',
                href: '',
            },
            {
                title: 'ونک',
                href: '',
            },
        ],
    },
    {
        name: 'منو',
        icon: 'menu-board',
        isLink: false,
        items: [
            {
                title: 'غذای اصلی',
                href: '',
            },
            {
                title: 'پیش غذا',
                href: '',
            },
            {
                title: 'دسر',
                href: '',
            },
            {
                title: 'نوشیدنی',
                href: '',
            },
        ],
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