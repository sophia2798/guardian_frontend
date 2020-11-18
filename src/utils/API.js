const API =  {
    login: function(userData) {
        return fetch('http://localhost:9164/api/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).catch(err => null)
    },
    getProfile: function(token) {
        return fetch('http://localhost:9164/api/userInfo', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).catch(err => null)
    }
}

module.exports = API;