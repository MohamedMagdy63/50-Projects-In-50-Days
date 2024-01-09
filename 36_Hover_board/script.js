const colors = ['F1EAFF' , 'E5D4FF','DCBFFF','D0A2F7']
const squeres = 500
const container = document.querySelector('.container')

for (i=0 ; i< squeres ; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseenter', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}
const setColor =(square)=>{
    const color = `#${getRandomColor()}`
    square.style.background = color
}
const removeColor=(square)=>{
    square.style.background = '#435585'
}
const getRandomColor = ()=>{
    return colors[Math.floor(Math.random() * colors.length)]
}
