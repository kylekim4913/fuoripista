
var home = document.querySelector('.m_header .logo');

var main_menu = document.querySelector('.m_header .menu');
var open_menu = document.querySelector('.m_header .mopen');
var open_menu_left = document.querySelector('.m_header .mopen .menuleft a');
var open_menu_right_top = document.querySelector('.m_header .mopen .menuright .mrtop a:nth-of-type(2)');
var h_logo = document.querySelector('.m_header .logo');

var sec1 = document.querySelector('.sec1 a');
var sec1Cont = document.querySelector('main .sec1 .sec_1_cont');
var sec2Cont = document.querySelector('main .sec_2_cont');



home.addEventListener('click',function(e){
    open_menu.classList.remove('act');
    sec1Cont.classList.remove('act');
    sec2Cont.classList.remove('act');
})

main_menu.addEventListener('click',function(e){
    h_logo.classList.remove('blogo');
    h_logo.classList.add('logo');

    open_menu.classList.add('act');
})

sec1.addEventListener('click',function(e){
    h_logo.classList.remove('logo');
    h_logo.classList.add('blogo');
    sec1Cont.classList.add('act');
    
})

open_menu_left.addEventListener('click',function(e){
    h_logo.classList.remove('logo');
    h_logo.classList.add('blogo');

    sec1Cont.classList.add('act');
    open_menu.classList.remove('act');
    sec2Cont.classList.remove('act');
    
})

open_menu_right_top.addEventListener('click',function(e){
    
    sec2Cont.classList.add('act');
    open_menu.classList.remove('act');
    
})

// var tosub = document.querySelector('.main .part1 .tosub');
// var back = document.querySelector('.main .toback');
// var flt1 = document.querySelector('.main .part1 .float1');
// var fct1 = document.querySelector('.main .part1 .float1 .fcont');
// var sec1 = document.querySelector('.main .part1 .float1 .fcont .sec1');

// tosub.addEventListener('click',function(){
    
//     flt1.classList.add('active');
//     fct1.classList.add('active');
    
    
//     console.log(fct1);
// })


// back.addEventListener('click',function(){
//     flt1.classList.remove('active');
//     fct1.classList.remove('active');
// })