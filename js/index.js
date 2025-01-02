
window.addEventListener('DOMContentLoaded', ()=>{
const brandBtn = document.querySelector('.brand-items__button')
const brands = document.querySelectorAll('.brand-items__row>.slider__row')

brandBtn.addEventListener('click', ()=>{
    if(brandBtn.innerText == "Показать все"){
        brands.forEach(item=>{
            item.classList.remove('slider__row-hide')
        })
        brandBtn.innerText = 'Скрыть'
        return
    }
    if(brandBtn.innerText == "Скрыть"){
        brands.forEach((item, i)=>{
            if(i < brands.length/2)
            item.classList.add('slider__row-hide')
        })
        brandBtn.innerText = 'Показать все'

    }



})

function setClass (arr, className, number = 200){
    arr.forEach((item, i)=>{
        if(i < number){
            item.classList.add(className)
        }
    })
}

    if(window.innerWidth <=320){
        console.log('mobile')
        return;
    }
    if(window.innerWidth <=768){
        console.log('tablet')
        setClass(brands, 'slider__row-hide', 5)

        return
    }
    if(1024<= window.innerWidth <=1440){
        setClass(brands, 'slider__row-hide', 3)

        console.log('notebook')
    }
})




// slider__row-hide