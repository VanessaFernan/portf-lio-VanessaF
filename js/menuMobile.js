const buttonMenu = document.querySelector('.button__menu') 
const cabecalho__menu__mobile = document.querySelector('.cabecalho__menu__mobile')
let isMenuOpen = false

buttonMenu.addEventListener('click', function(){
    isMenuOpen ? cabecalho__menu__mobile.classList.add('invisible') : cabecalho__menu__mobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', './assets/Menu.png') : buttonMenu.children[0].setAttribute('src', './assets/Close.svg')

    isMenuOpen
    
    isMenuOpen = !isMenuOpen
    console.log(isMenuOpen)
})