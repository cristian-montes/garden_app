import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';


// const mapSection = document.getElementById('map-section');
const plantSection = document.getElementById('plant-section');
const compaSection = document.getElementById('compa-section');

const user = getUser();
const veggies = user.plant;
const companions = user.companions;

// RENDER PICKED VEGGIES
for (let item of veggies){
    const dataPlanta = findById(plants, item.id);

    const showIcons = renderPlantRow(dataPlanta, item.qty);

    plantSection.appendChild(showIcons);
}

// RENDER PICKED COMPANIONS
for (let item of companions){
    const dataCompanions = findById(companionPlants, item.id);

    const showCompanions = renderCompanionRow(dataCompanions, item.qty);

    compaSection.appendChild(showCompanions);
}

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Veggies',
            data: veggies,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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