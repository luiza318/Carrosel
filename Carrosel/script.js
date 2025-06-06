let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let containerButton = document.getElementById('container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0 
let firstPoint = 0
let lastpoint = items.length - 1  

nextButton.onclick= () => {
    let itemOld = containerButton.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastpoint ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

   indicator.querySelector('.number').innerText = String(active + 1).padStart(2, '0');

}

prevButton.onclick= () => {
     let itemOld = containerButton.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPoint? lastpoint : active - 1
    items[active].classList.add('active') 

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

     indicator.querySelector('.number').innerText = String(active + 1).padStart(2, '0');
}