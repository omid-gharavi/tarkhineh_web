interface footer_form_inputs {
    username: string;
    phone: string;
    email: string;
    message: string;
}

interface input_list {
    id: 'username' | 'phone' | 'email' | 'message',
    type: 'text' | 'tel' | 'email' | 'textarea',
    placeholder: string,
    dir: 'ltr' | 'rtl',
}
interface footer_list {
    title: string,
    lists: string[],
    icons?: string[]
}