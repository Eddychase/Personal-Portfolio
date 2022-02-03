/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click' , () => {
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})



/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let workItem=document.querySelectorAll('.work__item');
let workCard=document.querySelectorAll('.work__card');

for(let i=0; i<workItem.length; i++){
    workItem[i].addEventListener('click',function(){
        for(let j=0; j<workItem.length; j++){
            workItem[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k=0; k<workCard.length; k++){
                 itemBox[k].classList.remove('active');
                 itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                 itemBox[k].classList.remove('hide');
                 itemBox[k].classList.add('active');
        }
        }
    })
}

/* Link active work */ 

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

