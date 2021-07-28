// import plants from './plant-data.js';

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

//FIND BY NAME FUNCTION
export function findByName(array, name) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.name === name) {
            return item;
        }
    }

    return null;
}

//FIND BY USERNAME FUNCTION
export function findByUser(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.user === id) {
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

// export function addPlantFunc(plantId) {
//     const user = getUser();
//     const plant = findById(plants, plantId);
//     if (plant){
//         plant.qty += 1;
//     }
//     else {
//         const newPlant = { id: plantId, qty: 1 };
//         user.plant.push(newPlant);

//     }
//     saveUser(user);
   
// }

