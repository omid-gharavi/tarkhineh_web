import { fetchRequestInstance } from "@/utils/api-request";

export class footerFormRequest {
    static instance = new footerFormRequest();

    async postMessage(data: footer_form_inputs) {
        return fetchRequestInstance({ url: '/usermessages', method: 'POST', data: data })
    }
}