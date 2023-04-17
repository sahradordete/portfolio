let arrow = document.querySelectorAll('.arrow-icon');
let paragraph = document.querySelectorAll('.project-description')
// let 
// tenho que pegar o icone de arrow que vai ser clicado e o que vai aparecer 
// let icone de arrow
// let paragrafo que vai aparecer e desaparecer 

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener ('click', () =>{
        paragraph[i].classList.toggle('project-description');
    })
}

let menu = document.getElementById('menu-icon');
let menuItems = document.getElementsById('itens-menu');

function showMenu() {
    menuItems.style.display = 'block';
}

menu.addEventListener('click', showMenu);