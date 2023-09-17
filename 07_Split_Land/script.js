const leftBox = document.querySelector('.leftBox')
const rightBox = document.querySelector('.rightBox')
const container = document.querySelector('.container')
leftBox.addEventListener('mouseenter',()=>{container.classList.add('hover-left')})
leftBox.addEventListener('mouseleave',()=>{container.classList.remove('hover-left')})

rightBox.addEventListener('mouseenter',()=>{container.classList.add('hover-right')})
rightBox.addEventListener('mouseleave',()=>{container.classList.remove('hover-right')})

