export function createUser(formData){
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
        plants: []
    };
    return user;
}