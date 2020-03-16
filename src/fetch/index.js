export default class FetchApi{
    static fetch = (url) => fetch(`${url}`, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'user-key': '3304ef30b4e8699c6590a68ab5bf4139'
        }
    }).then(res =>res.json().then(data=>data));

    static get = url => FetchApi.fetch(url);
}
