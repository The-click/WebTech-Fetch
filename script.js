// Burger

const burger = document.querySelector('.burger');

burger.addEventListener('click', openBurger);
document.querySelector('.nav').addEventListener('click', openBurger);



function openBurger(e){
        burger.classList.toggle('active');
}


// Scroll Up

const btnUp = document.querySelector('.btnUp');
const introHeight = document.querySelector('.intro').clientHeight;

btnUp.addEventListener('click', (e) => window.scrollTo(0,0))

window.addEventListener('scroll', showBtnUp);



function showBtnUp(){
        if (introHeight < scrollY){
                btnUp.classList.add('active');
        }else{
                btnUp.classList.remove('active');
        }
}