const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')
let clickTime = 0 
let timesClicked = 0

loveMe.addEventListener('click',(e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800){
            clickHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }  
})
function clickHeart(e){
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    
    const X = e.clientX
    const Y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = X - leftOffset
    const yInside = Y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}