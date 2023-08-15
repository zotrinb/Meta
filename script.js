let Menu = document.querySelector('.burger__menu');
let MenuItems = document.querySelector('.header__nav');
let Header = document.querySelector('.header')
let Hero = document.querySelector('.hero')

if (document.documentElement.clientWidth < 721) {
    Hero.style.paddingTop = Header.offsetHeight + 'px'
}

Menu.addEventListener('click', () => {
    MenuItems.classList.toggle('active');
    document.body.classList.toggle('locked');

});

let imgArray = ["img/member1.jpg", "img/member2.jpg", "img/member3.jpg"];
let activeButtons = [...document.querySelectorAll(".btn__js")];
let img = document.querySelector(".slider__item--img");

activeButtons.forEach(el => {
    el.addEventListener('click', movefurther)
})

let counter = 0;

function movefurther(button) {
    let btn = button.currentTarget.innerHTML;
    if (btn === "next") {
        counter++
        if (counter == imgArray.length) {
            counter = 0;
        }
    }

    else {
        counter--
        if (counter < 0) {
            counter = imgArray.length - 1;
        }
    }
    img.src = imgArray[counter];

}