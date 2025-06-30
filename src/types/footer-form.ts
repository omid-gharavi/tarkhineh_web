interface input_list {
    type: 'text' | 'tel' | 'email' | 'textarea',
    placeholder: string,
    dir: 'ltr' | 'rtl'
}
interface footer_list {
    title: string,
    lists: string[],
    icons?: string[]
}