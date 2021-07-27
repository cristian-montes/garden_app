//IMPORT FUNCTIONS ANF DOM ELEMENTS
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';
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
                companions: dataPlant.companions,
            });
            console.log(dataPlant.companions);
        }
        saveUser(user);
    });
}


// ADD ITEMS TO LOCAL STORAGE USING RELATED BUTTONS
const subtractBtns = document.querySelectorAll('.subtract');

for (let btnSubtract of subtractBtns){
    btnSubtract.addEventListener('click', () => {
        const dataPlant = findById(plants, btnSubtract.value);
        const plant = findById(user.plant, btnSubtract.value);
        
        if (plant){
            plant.qty --;
            plant.area = dataPlant.space * plant.qty;
        }
        saveUser(user);
    });
}







































// for (let item of plants){
//     // Plant section
//     const plantDiv = document.createElement('div');
    
//     const plantBtn = document.createElement('button');
//     plantBtn.textContent = item.name;
//     plantBtn.id = item.id;
//     plantBtn.value = item.name;
//     plantBtn.classList.add('add');

//     // const plantInput = document.createElement('input');
//     // plantInput.type = 'button';
//     // plantInput.textContent = 'submit';
    
//     const plantQty = document.createElement('p');
//     plantQty.id = item.id;
//     plantQty.textContent = 'No. of Plants';
//     plantQty.classList.add('qty');
    
//     // const plantSbtract = document.createElement('button');
    
//     const plantImg = document.createElement('img');
//     plantImg.src = '../assets/' + item.image;
    
//     const planth1 = document.createElement('h1');
//     planth1.textContent = `Name: ${item.name}`;
    
//     const plantSpan = document.createElement('span');
//     plantSpan.textContent = `Description: ${item.description}`;
    
//     const plantPFam = document.createElement('p');
//     plantPFam.textContent = `Family: ${item.family}`;
    
//     const plantPRec = document.createElement('p');
//     plantPRec.textContent = `Recommendations: ${item.recommendations}`;


//     plantDiv.append(plantImg, planth1, plantSpan, plantPFam,
//         plantPRec, plantQty, plantBtn);
        
   
        
//     mainSection.append(plantDiv);

// }







    
    
    

    