//IMPORT FUNCTIONS ANF DOM ELEMENTS
import plants from '../data/plant-data.js';
import companions from '../data/companion-data.js';
import { findByUser } from '../data/data-functions.js';

// const mainSection = document.getElementById('main-section');
const mainForm = document.getElementById('main-form');


for (let item of plants){
    // Plant section
    const plantLabel = document.createElement('label');
    const plantDiv = document.createElement('div');

    const plantInput = document.createElement('input');
    plantInput.type = 'radio';

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
        plantPRec, plantInput);

    plantLabel.append(plantDiv);

    mainForm.append(plantLabel);
    
}

//   //Companions section
//   const companionDiv = document.createElement('div');
//   const companionForm = document.createElement('form'); 
