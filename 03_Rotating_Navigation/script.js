const openIcon = document.getElementById('open')
const container = document.querySelector('.container')
const closeIcon = document.getElementById('close')
closeIcon.style.display = 'none'


openIcon.addEventListener('click',()=>{
    openIcon.style.display = 'none'
    closeIcon.style.display = 'flex'
    container.classList.add('active')
})
closeIcon.addEventListener('click', ()=>{
    openIcon.style.display = 'flex' 
    closeIcon.style.display = 'none'
    container.classList.remove('active')
})