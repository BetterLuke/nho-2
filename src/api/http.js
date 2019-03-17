let initParams = {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    }
}
const URL = 'http://10.205.22.91:8080';

const $http = ( params = initParams) => {
    const { url, method, body, headers } = params;
    return new Promise((resolve, reject) => {
        fetch(`${URL}${url}`,{
            method,
            body,
            headers: headers || initParams.headers,
        }).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        })
    })
}

export default $http;