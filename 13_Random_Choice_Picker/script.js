const text = document.getElementById('textarea')
const tagsContainer = document.getElementById('tags')
text.addEventListener('keyup',(event)=>{  
    tagsFunction(event.target.value) 
})
const tagsFunction=(tagName)=>{
    const tags = tagName.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
 
    tagsContainer.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsContainer.appendChild(tagEl)
    })
}

