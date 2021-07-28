import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
const mapSection = document.getElementById('map-section');


const user = getUser();
const veggies = user.plant;
console.log(veggies);

for (let item of veggies){
    const dataPlanta = findById(plants, item.id);

    const showIcons = renderPlantRow(dataPlanta, item.qty);


    mapSection.appendChild(showIcons);
}