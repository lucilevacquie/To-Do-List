export function putList (key, list) {
    return localStorage.setItem(key, JSON.stringify(list))
}


export function getList (key) {
    return JSON.parse(localStorage.getItem(key)) || {}
}