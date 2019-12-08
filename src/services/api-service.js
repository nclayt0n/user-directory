import config from '../config';

const ApiService = {
    getUser(num) {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        };
        return Promise.all([
                fetch(`${config.API_ENDPOINT}?results=10&page=${num}&seed=abc&inc=name,email,phone,dob,gender,picture`,
                    options)
            ])
            .then(([usersRes]) => {
                if (!usersRes.ok) {
                    return usersRes.json().then(e => Promise.reject(e));
                }
                return Promise.all([usersRes.json()]);
            });
    }
}
export default ApiService;