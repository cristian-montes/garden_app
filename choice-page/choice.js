//IMPORT FUNCTIONS ANF DOM ELEMENTS
import plants from '../data/plant-data.js';
// import companions from '../data/companion-data.js';
import { addPlant } from '../data/data-functions.js';


// const mainSection = document.getElementById('main-section');
const mainForm = document.getElementById('main-form');
// const plantQty = document.getElementsByClassName('qty');

for (let item of plants){
    // Plant section
    const plantLabel = document.createElement('label');
    const plantDiv = document.createElement('div');
    const plantAdd = document.createElement('button');
    plantAdd.textContent = 'Add';
    plantAdd.value = item.id;
    plantAdd.classList.add('add');

    // const plantInput = document.createElement('input');
    // plantInput.type = 'button';
    // plantInput.textContent = 'submit';
    
    const plantQty = document.createElement('p');
    plantQty.textContent = 0;
    plantQty.classList.add('qty');
    plantQty.id = plants.id;
    
    // const plantSbtract = document.createElement('button');
    
    const plantImg = document.createElement('img');
    plantImg.src = '../assets/' + item.image;
    
    const planth1 = document.createElement('h1');
    planth1.textContent = `Name: ${item.name}`;
    
    const plantSpan = document.createElement('span');
    plantSpan.textContent = `Description: ${item.description}`;
    
    const plantPFam = document.createElement('p');
    plantPFam.textContent = `Family: ${item.family}`;
    
    const plantPRec = document.createElement('p');
    plantPRec.textContent = `Recommendations: ${item.recommendations}`;
    
    
    
    
    
    plantDiv.append(plantImg, planth1, plantSpan, plantPFam,
        plantPRec, plantQty, plantAdd);
        
    plantLabel.append(plantDiv);
        
    mainForm.append(plantLabel);
        
        
        
}
const addBtn = document.querySelectorAll('add');
for (let addPlant of addBtn){
        
        
        
     
    plantAdd.addEventListener('click', (e)=>{
        e.preventDefault();
        addPlant(Number(plantAdd.value));
        for (let i = 0; 
            i < plantQty.length; i++){
            if (Number(plantQty[i].id) === Number(plantAdd.value)) {
                plantQty[i].textContent = Number(plantQty[i].textContent) + 1;
                
            }
        }
    }
    );}


//   //Companions section
//   const companionDiv = document.createElement('div');
//   const companionForm = document.createElement('form'); 
