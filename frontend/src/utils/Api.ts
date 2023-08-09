import {IMessage, IPost} from "../types";

const API_URL = 'http://localhost:3000'

const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getPosts() {
    return fetch(`${API_URL}/posts`).then<IPost>(checkResponse)
}

export function sendPost(form: HTMLFormElement) {
    const data = new FormData(form);
    console.log(Array.from(data));
    return fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {

            authorization: `Bearer ${localStorage.getItem('jwt')}`
        },
        body: data
    }).then<IPost>(checkResponse)
}

export function adminLogin(password: string) {
    return fetch(`${API_URL}/admin/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({password})
    }).then<{ token: string }>(checkResponse)
}

export function checkToken(token: string) {
    return fetch(`${API_URL}/admin/checkToken`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }).then<IMessage>(checkResponse)
}