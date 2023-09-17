const container = document.querySelector('.container')
const searchInput = document.getElementById('searchInput')
const searchIcon = document.getElementById('searchIcon')


searchIcon.addEventListener('click' , () =>{
    searchInput.classList.toggle('active')

    container.classList.toggle('containerActive')
})