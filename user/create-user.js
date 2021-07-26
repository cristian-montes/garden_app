export function createUser(formData){
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password'),
        toDos: []
    };
    return newUser;
}