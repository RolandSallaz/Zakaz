import {IMessage, IPost} from "../types";

const API_URL = 'http://localhost:3000'

const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getPosts() {
    return fetch(`${API_URL}/posts`).then<IPost>(checkResponse)
}

export function adminLogin(password: string) {
    return fetch(`${API_URL}/admin/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "credentials": 'include',
        },
        body: JSON.stringify({password})
    }).then<IMessage>(checkResponse)
}

export function checkToken() {
    return fetch(`${API_URL}/admin/checkToken`, {
        headers: {
            "credentials": 'include'
        }
    }).then<IMessage>(checkResponse)
}