import axios from 'axios'

const api = axios.create({ baseURL: 'https://68864b3af52d34140f6be048.mockapi.io/tarkhineh' });

export const fetchRequestInstance = ({ ...options }: { url: string, method: 'POST' | 'GET', data?: any }) => {
    api.defaults.headers.common.Authorization = 'Berear token';
    return api(options).then(res => res).catch(err => console.error(err))
}