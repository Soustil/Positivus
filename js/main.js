// Select all open buttons and all tab explain elements
const openBtns = document.querySelectorAll('.tab_open');
const explains = document.querySelectorAll('.tab_explain');
const titles = document.querySelectorAll('.tab_number_title');
const workingTabs = document.querySelectorAll('.working_tab');

// Iterate through each open button and attach an event listener
openBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const working = workingTabs[index];
        const explain = explains[index];
        const title = titles[index];
        btn.classList.toggle('minus');
        
        if (btn.classList.contains('minus')) {
            btn.innerHTML = '-';
        } else {
            btn.innerHTML = '+';
        }
        working.classList.toggle('working_tab_opened');
        explain.classList.toggle('opened');
        title.classList.toggle('title_opened');
    });
});


$('.testimonials_slider').slick({
    dots: true,
    appendDots:$('.slider-dots'),
    appendArrows: $('.slider-btns'),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});

$('.cases_mobile_slider').slick({
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true
});

$( document ).ready(function() {
    $('.slick-prev').html('<img src="img/arrow-right.svg" alt="">');
    $('.slick-next').html('<img src="img/arrow-right.svg" alt="">');
    $('.slick-dots>li>button').html('<img src="img/dot-star.svg" alt="">');
});


const mobileBtn = document.querySelector('.mobile_menu_btn');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

mobileBtn.addEventListener('click', function(){
    menu.classList.toggle('menu-opened');
    mobileBtn.classList.toggle('close');
    document.body.classList.toggle('over1');
});