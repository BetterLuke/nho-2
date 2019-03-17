import $http from './http';

const API = {
    createCamp: (title, description) => {
        return $http({
            url: '/camp',
            method: 'POST',
            body: JSON.stringify({
                title,
                description
            })
        })
    }
}
export default API;