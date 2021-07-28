import plants from './plant-data.js';

let USER = 'USER';

//SAVEUSER FUNCTION
export function saveUser(userObject){
    let userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

//GET USER FUNCTION
export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

//FIND BY USER FUNCTION
export function findByUser(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.username === id) {
            return item;
        }
    }

    return null;
}

//FIND BY ID FUNCTION
export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function addPlantFunc(plantId) {
    const user = getUser();
    const plant = findById(plants, plantId);
    if (plant){
        plant.qty += 1;
    }
    else {
        const newPlant = { id: plantId, qty: 1 };
        user.plant.push(newPlant);

    }
    saveUser(user);
   
}

