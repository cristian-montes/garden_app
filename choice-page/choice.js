//IMPORT FUNCTIONS
import plants from '../data/plant-data.js';
import { findById, saveUser, getUser } from '../data/data-functions.js';
import { renderChoices } from './render-choice.js';


const mainSection = document.getElementById('main-section');

for (let veggies of plants){
    const showVeggies = renderChoices(veggies);
    mainSection.appendChild(showVeggies);
}


// ADD ITEMS TO LOCAL STORAGE USING RELATED BUTTONS
const user = getUser();
const plantBtns = document.querySelectorAll('.add');

for (let btnPlant of plantBtns){
    btnPlant.addEventListener('click', ()=>{
        const dataPlant = findById(plants, btnPlant.id);
        const plant = findById(user.plant, btnPlant.id);
        if (plant){
            plant.qty ++;
            plant.area = dataPlant.space * plant.qty;
        } else {
            user.plant.push({ id: btnPlant.id, 
                name: btnPlant.value, 
                qty: 1,
                area: dataPlant.space,
                companions: dataPlant.companions
            });
            // console.log(dataPlant.companions);
        }
        areaGet(user.plant);
        getTotalArea();
        saveUser(user);
    });
}


// SUBTRACTING ITEMS TO LOCAL STORAGE USING RELATED BUTTONS
const subtractBtns = document.querySelectorAll('.subtract');

for (let btnSubtract of subtractBtns){
    btnSubtract.addEventListener('click', () => {
        const dataPlant = findById(plants, btnSubtract.value);
        const plant = findById(user.plant, btnSubtract.value);
        
        if (plant){
            plant.qty --;
            plant.area = dataPlant.space * plant.qty;
        }
        areaGet(user.plant);
        getTotalArea();
        saveUser(user);
    });
}

// DISPLAY QTY OF VEGGIES PICKED AT EVERY VEGGIE
const plantQtyPar = document.querySelectorAll('.qty');
for (let displayQty of plantQtyPar){

    for (let item of user.plant){
        const userPlant = findById(user.plant, item.id);
        displayQty.textContent = `Total Amount of ${userPlant.name}s: ${userPlant.qty}`;
    }
    
}



// FUNCTION TO GET AREAS OF PLANTS LS
function areaGet(array){
    const newArr = array.map(element => {
        getUser();
        return element.area;
    });
    return newArr;
}


// FUNCTION TO GET TOTAL AREA FROM LS
let totalArea = 0;

function getTotalArea(){
    const arrayArea = areaGet(user.plant);

    if (arrayArea.length >= 1) totalArea = arrayArea.reduce((a, b) => a + b);
    if (totalArea === 8){
        alert('You ran out of land! Hit submit button below.');
    }
}



//EVENT LISTENER FOR SUBMIT BUTTON AND TOTAL PLANTS
const submitBtn = document.getElementById('submit-form');
submitBtn.addEventListener('click', ()=> {

    if (totalArea < 8){
        alert('Keep on adding GOODIES, still have some land left to plant.');

    } else if (totalArea > 8){
        alert('You have too many plants, please remove plants.');
    } else {
        window.location.replace('../companion');
    }
});