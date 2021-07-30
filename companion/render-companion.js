
export function renderCompanion(friends) {

    const companionDiv = document.createElement('div');
    companionDiv.classList.add('companion-div');

    const compaBtn = document.createElement('button');
    compaBtn.textContent = `Add ${friends.name}`;
    compaBtn.id = friends.id;
    compaBtn.value = friends.name;
    compaBtn.classList.add('add');

    const subtractBtn = document.createElement('button');
    subtractBtn.textContent = `Subtract ${friends.name}`;
    subtractBtn.value = friends.id;
    subtractBtn.classList.add('subtract', 'hidden');



    const companionImg = document.createElement('img');
    companionImg.src = '../assets/icons/' + friends.image;
        
    const companionh3 = document.createElement('h3');
    companionh3.textContent = `${friends.name}`;
    
    const companionSpan = document.createElement('span');
    companionSpan.textContent = `Purpose: ${friends.purpose}`;
    
        
    companionDiv.append(companionImg, companionh3, companionSpan, compaBtn, subtractBtn);
        
    return companionDiv;

}

export function renderIcons(icons){

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('pics');

    const iconsImg = document.createElement('img');
    iconsImg.src = '../assets/icons/' + icons.icon;

    const iconsNameh1 = document.createElement('h1');
    iconsNameh1.textContent = icons.name;

    iconsDiv.append(iconsImg, iconsNameh1);
    return iconsDiv;
}
