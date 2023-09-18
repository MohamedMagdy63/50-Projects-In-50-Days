const sounds = [ 'applause' ,"boo" , "gasp" , "tada" , "victory" , "wrong"]
const buttons = document.querySelector('#buttons')
sounds.forEach((sound)=>{
    const sBtn = document.createElement('button')
    sBtn.innerText= sound
    sBtn.addEventListener('click', ()=>{
        stopPlaying()
        document.getElementById(sound).play()
    })
    buttons.appendChild(sBtn)

})
const stopPlaying =() =>{
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}