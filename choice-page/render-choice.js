

export function renderChoices(planty){
    const plantDiv = document.createElement('div');
    plantDiv.classList.add('plant-div');
    
    const plantBtn = document.createElement('button');
    plantBtn.textContent = `Add ${planty.name}`;
    plantBtn.id = planty.id;
    plantBtn.value = planty.name;
    plantBtn.classList.add('add');

    
    const subtractBtn = document.createElement('button');
    subtractBtn.textContent = `Subtract ${planty.name}`;
    subtractBtn.value = planty.id;
    subtractBtn.classList.add('subtract', 'hidden');
        
    

    
    const plantQty = document.createElement('p');
    plantQty.id = planty.id;
    plantQty.textContent = `Amount of ${planty.name}`;
    plantQty.classList.add('qty');
    
    const plantImg = document.createElement('img');
    plantImg.src = '../assets/' + planty.image;
    
    const planth1 = document.createElement('h1');
    planth1.textContent = `Name: ${planty.name}`;
    
    const plantSpan = document.createElement('span');
    plantSpan.textContent = `Description: ${planty.description}`;
    
    const plantPFam = document.createElement('p');
    plantPFam.textContent = `Family: ${planty.family}`;
    
    const plantPRec = document.createElement('p');
    plantPRec.textContent = `Recommendations: ${planty.recommendations}`;


    plantDiv.append(plantImg, planth1, plantSpan, plantPFam,
        plantPRec, plantQty, plantBtn, subtractBtn);
    
    return plantDiv;
}