import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';
Chart.defaults.color = 'black';
Chart.defaults.font.size = 20;




// const mapSection = document.getElementById('map-section');
const plantSection = document.getElementById('plant-section');
const compaSection = document.getElementById('compa-section');



const user = getUser();
let name = [];
let plantChart = [];
let companionChart = [];
const veggies = user.plant;
const companions = user.companions;

// RENDER PICKED VEGGIES
for (let item of veggies){
    const dataPlanta = findById(plants, item.id);
    name.push(item.name);
    plantChart.push(item.qty);
    const showIcons = renderPlantRow(dataPlanta, item.qty);

    plantSection.appendChild(showIcons);
}

// RENDER PICKED COMPANIONS
for (let item of companions){
    const dataCompanions = findById(companionPlants, item.id);
    name.push(item.name);
    companionChart.push(item.qty);
    const showCompanions = renderCompanionRow(dataCompanions, item.qty);

    compaSection.appendChild(showCompanions);
}
// console.log(name);

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: name,
        datasets: [{
            label: name,
            data: plantChart,
            backgroundColor: [
                'green',
            ],
            borderColor: [
                'white',
               
            ],
            borderWidth: 3 },
        { label: name,
            data: companionChart,
            backgroundColor: [
                'brown',
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