const notificationButton = document.getElementById('notification')
const messageContainer = document.querySelector('.messageContainer')

const messages = [
    'First Message',
    'Second Message',
    'Third Message',
    'Fourth Message',
]

const types = ['info', 'success', 'error']

notificationButton.addEventListener('click',()=>createNotification())

function createNotification(type = null , message = null){
    const messageBox = document.createElement('div')
    messageBox.classList.add('toast')
    messageBox.classList.add(type ? type : getRandomType())
    messageBox.innerText =message ?  message : getRandomMessage()
    messageContainer.appendChild(messageBox)

    setTimeout(() => {
        messageBox.remove()
    }, 3000)
}
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}