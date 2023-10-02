const counters = document.querySelectorAll('.counter')
counters.forEach((counter)=>{
    counter.innerHTML='0'
    const updateCounter=()=>{
        const target = +counter.getAttribute('data-target')
        const add = +counter.innerHTML
        const increment = target/200
        if(add < target){
            counter.innerHTML=`${Math.ceil(add + increment)}`
            setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
    } 
    updateCounter()
})
