// import functions
import { saveUser, getUser, findByUser } from './data/data-functions.js';
import { createUser } from './user/create-user.js';

// reference needed DOM elements

const userForm = document.getElementById('user-form');
const logInBtn = document.getElementById('login-btn');
// const 
// const createBtn = document.getElementById('create-btn');

// set event listeners 

// userForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(userForm);
//     const user = getUser(formData);
//     // add function find by item to look for existing users
//     // window.location.replace = './list';
// });

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const newUser = createUser(formData);
    saveUser(newUser);
    window.location.replace('./choice-page');
});

logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const oldUser = getUser();
    findByUser(formData);
    if (oldUser.password === formData.get('password')) {
        window.location.replace('./choice-page');
        return alert('Welcome Back');
    } else if (oldUser.password === !oldUser.password){
        // window.location.reload();
    } else {
        return alert('Wrong Password');
    }
});
// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
