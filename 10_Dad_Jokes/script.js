const joke = document.getElementById('joke')
const jokeBtn =document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',getJoke)

getJoke()

async function getJoke(){
    const config = {
        headers :{
            Accept : 'application/json',
        },
    }
    const response = await fetch('https://icanhazdadjoke.com',config)
    const data =await response.json()
    joke.innerHTML = data.joke
}
const plusSt = 5 + '5'
console.log(plusSt)