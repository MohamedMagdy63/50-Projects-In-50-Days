const circles = document.querySelectorAll('.circle')
let activeItem = 1
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const line = document.getElementById('progress')
function handleNext(){
    activeItem ++ 
    if (activeItem > circles.length ){
        activeItem = circles.length
    }
    update()
}
function handlePrev(){
    activeItem -- 

    if(activeItem < 1) {
        activeItem = 1
    }
    update()
}
function update() {
    circles.forEach((circle , index) =>{
        if( index < activeItem ){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    line.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if(activeItem === 1) {
        prev.disabled = true
    } else if(activeItem === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}