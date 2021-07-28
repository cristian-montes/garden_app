

export function renderCompanionRow(items){
    const companionDiv = document.createElement('div');
    const iconsImg = document.createElement('img');
    iconsImg.src = '../assets/icons/' + items.icon;

    companionDiv.append(iconsImg);
    return companionDiv;
}

export function renderPlantRow(icons){
    const plantDiv = document.createElement('div');
    const iconsImg = document.createElement('img');
    iconsImg.src = '../assets/icons/' + icons.icon;

    plantDiv.append(iconsImg);
    return plantDiv;
}