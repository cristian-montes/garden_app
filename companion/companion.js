import { renderCompanion } from './render-companion.js';
import companionPlants from '../data/companion-data.js';

const userSection = document.getElementById('user-section');
const companionSection = document.getElementById('companion-section');

for (let item of companionPlants) {
    const showCompanions = renderCompanion(item);
    companionSection.appendChild(showCompanions);
}