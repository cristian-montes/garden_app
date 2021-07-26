import plants from './plant-data.js';

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

export function addPlant(plantId) {
    const user = getUser();
    const plant = findByUser(plants, plantId);
    if (plant){
        plant.qty += 1;
    }
    else {
        const newPlant = { id: plantId, qty: 1 };
        user.push(newPlant);

    }
    saveUser(user);
}