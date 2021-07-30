import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';


// const mapSection = document.getElementById('map-section');
const plantSection = document.getElementById('plant-section');
const compaSection = document.getElementById('compa-section');



const user = getUser();
let name = [];
let plantChart = [];
let companionChart = [];
let veggies = user.plant;
let companions = user.companions;

// RENDER PICKED VEGGIES
for (let item of veggies){
    const dataPlanta = findById(plants, item.id);
    name.push(item.name);
    const showIcons = renderPlantRow(dataPlanta, item.qty);

    plantSection.appendChild(showIcons);
}

// RENDER PICKED COMPANIONS
for (let item of companions){
    const dataCompanions = findById(companionPlants, item.id);
    name.push(dataCompanions.companions);
    companionChart.push(dataCompanions.id);
    const showCompanions = renderCompanionRow(dataCompanions, item.qty);

    compaSection.appendChild(showCompanions);
}
console.log(companions);
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: 'veggies',
            data: veggies,
            backgroundColor: [
                'black',
            ],
            borderColor: [
                'white',
               
            ],
            borderWidth: 3 },
        { label: 'companions',
            data: companions,
            backgroundColor: [
                'red',
            ],
            borderColor: [
                'white',
                
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});