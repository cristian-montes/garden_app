//IMPORT FUNCTIONS AND DOM ELEMENTS
import { renderCompanion, renderIcons } from './render-companion.js';
import companionPlants from '../data/companion-data.js';
import plants from '../data/plant-data.js';
import { getUser, saveUser, findById, findByName } from '../data/data-functions.js';


const userSection = document.getElementById('user-section');


//GET DATA FROM LOCAL STORAGE
const user = getUser();
const friends = user.plant;

// FUNCTION TO  DISPLAY COMPANIONS FOR VIGGIES PICKED

//FUNCTION TO DISPLAY VEGGIES PICKED 
for (let item of friends){
    const dataPlanta = findById(plants, item.id);
    const showIcons = renderIcons(dataPlanta);
    displayCompas(item);
   
    userSection.appendChild(showIcons);
}
function displayCompas(arr){
    for (let thing of arr.companions){
        const dataCompanions = findByName(companionPlants, thing);
        const showCompanions = renderCompanion(dataCompanions);
        userSection.appendChild(showCompanions);
    }
}

// ADD COMPANIONS TO LOCAL STORAGE USING RELATED BUTTONS
const compaBtns = document.querySelectorAll('.add');

for (let addCompaBtn of compaBtns){
    addCompaBtn.addEventListener('click', ()=>{
        const dataCompaPlant = findById(companionPlants, addCompaBtn.id);
        const compa = findById(user.companions, addCompaBtn.id);
        if (compa){
            compa.qty ++;
            compa.area = dataCompaPlant.space * compa.qty;
        } else {
            user.companions.push({ id: addCompaBtn.id, 
                name: addCompaBtn.value, 
                qty: 1,
                area: dataCompaPlant.space,
            });
        }
        areaGet(user.companions);
        getCompaArea();
        saveUser(user);
    });
}

const subtractBtns = document.querySelectorAll('.subtract');
for (let subtractCompaBtn of subtractBtns){
    subtractCompaBtn.addEventListener('click', ()=>{
        console.log('clicked');
        const dataCompaPlant = findById(companionPlants, subtractCompaBtn.value);
        const compa = findById(user.companions, subtractCompaBtn.value);
        if (compa){
            compa.qty --;
            compa.area = dataCompaPlant.space * compa.qty;
        }
        areaGet(user.companions);
        getCompaArea();
        saveUser(user);
    });
}

function areaGet(array){
    const newArr = array.map(element => {
        getUser();
        return element.area;
    });
    return newArr;
}

let totalArea = 0;
function getCompaArea(){
    const compArr = areaGet(user.companions);
    if (compArr.length >= 1) totalArea = compArr.reduce((x, y) => x + y);
    if (totalArea === 8){
        alert('Your garden is complete, please submit');
    }

}

const submitBtn = document.getElementById('submit-form');
submitBtn.addEventListener('click', ()=> {

    if (totalArea < 8){
        alert('Keep on adding GOODIES, still have some land left to plant.');

    } else if (totalArea > 8){
        alert('You have too many plants, please remove plants.');
    } else {
        window.location.replace('../map-page');
    }
});












// WE MIGHT NOT NEED THIS ONE SINCE WE ONLY NEED TO DISPLAY VEGGIES IN LS PICKED BY USER.
// for (let item of plants) {
//     const showIcons = renderIcons(item);
//     userSection.appendChild(showIcons);
// }

// for (let item of friends) {
//     const showCompanions = renderCompanion(item);
//     companionSection.appendChild(showCompanions);
// }

