import { getUser } from '../data/data-functions.js';


getUser();
export function renderCompanion(friends) {
    // for (let things of friends){
    const companionDiv = document.createElement('div');

    const compaBtn = document.createElement('button');
    compaBtn.textContent = `Add ${friends.name}`;
    compaBtn.id = friends.id;
    compaBtn.value = friends.name;
    compaBtn.classList.add('add');

    const subtractBtn = document.createElement('button');
    subtractBtn.textContent = `Subtract${friends.name}`;
    subtractBtn.value = friends.id;
    subtractBtn.classList.add('subtract');



    const companionImg = document.createElement('img');
    companionImg.src = '../assets/' + friends.image;
        
    const companionh3 = document.createElement('h3');
    companionh3.textContent = `Name: ${friends.name}`;
    
    const companionSpan = document.createElement('span');
    companionSpan.textContent = `Purpose: ${friends.purpose}`;
    
        
    companionDiv.append(companionImg, companionh3, companionSpan, compaBtn, subtractBtn);
        
    return companionDiv;
    // }

}

export function renderIcons(icons){
    // ICONS DIV
    const iconsDiv = document.createElement('div');

    const iconsImg = document.createElement('img');
    iconsImg.src = '../assets/icons/' + icons.icon;

    const iconsNameh1 = document.createElement('h1');
    iconsNameh1.textContent = icons.name;

    // const companionSpan = document.createElement('span');
    // companionSpan.textContent = `Companion Plants : ${icons.companions}`;

    iconsDiv.append(iconsImg, iconsNameh1);
    return iconsDiv;
}




// export function renderIcons(icons){
//     const iconsDiv = document.createElement('div');
//     const iconsImg = document.createElement('img');
//     iconsImg.src = '../assets/icons/' + icons.icon;

//     iconsDiv.append(iconsImg);
//     return iconsDiv;
// }