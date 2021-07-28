

export function renderCompanionRow(items){
    const companionDiv = document.createElement('div');
    const iconsImg = document.createElement('img');
    iconsImg.classList.add('companion-icons');
    iconsImg.src = '../assets/icons/' + items.icon;

    companionDiv.append(iconsImg);
    return companionDiv;
}

export function renderPlantRow(icons, qty){
    const plantDiv = document.createElement('div');
    for (let i = 0; i < qty; i++){
        const iconsImg = document.createElement('img');
        iconsImg.classList.add('plant-icons');
        iconsImg.src = '../assets/icons/' + icons.icon;

        plantDiv.append(iconsImg);
    }
    return plantDiv;
}