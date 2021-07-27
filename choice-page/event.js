import { getUser } from '../data/data-functions.js';
export function add(){
    let choiceQty = 0;
    const plantBtns = document.querySelectorAll('add');
    for (let plantBtn of plantBtns){
        plantBtn.addEventListener('click', ()=>{
            choiceQty++;
            plantBtn.textContent === choiceQty;
            console.log('add'); 
        }
        );
    } 
}

export function submit() {
    const mainForm = document.getElementById('main-form');
    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submitted');
    });

}