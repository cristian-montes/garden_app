import { renderCompanion, renderIcons } from './render-companion.js';
import companionPlants from '../data/companion-data.js';
import plants from '../data/plant-data.js';
import { getUser, saveUser, findById, findByUser } from '../data/data-functions.js';

const userSection = document.getElementById('user-section');
const companionSection = document.getElementById('companion-section');

const user = getUser();
let friends = user.plant;

for (let item of plants) {
    const showIcons = renderIcons(item);
    userSection.appendChild(showIcons);
}

for (let item of friends) {
    const showCompanions = renderCompanion(item);
    companionSection.appendChild(showCompanions);
}

