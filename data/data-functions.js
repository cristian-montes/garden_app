let USER = 'USER';


export function saveUser(userObject){
    let userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}


export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function findByUser(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.username === id) {
            return item;
        }
    }

    return null;
}