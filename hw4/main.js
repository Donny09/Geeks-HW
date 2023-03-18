const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
block.addEventListener('mousemove', () => {
    posX.innerHTML = event.x
    posY.innerHTML = event.y
})


var plus = () => {
    number.innerHTML+=1
    const btn = document.getElementById('green_plus')
    btn.addEventListener('click', () =>{
        number.style.color = 'green'
    })
}
plus()
var minus = () => {
    number.innerHTML-=1
    const btn = document.getElementById('red_minus')
    btn.addEventListener('click', () =>{
        number.style.color = 'red'
    })
}
minus()


var userEntered = prompt('RED, YELLOW or GREEN').toLowerCase().trim()
var lights = () => {
    if (userEntered == 'red') {
        alert('STOP!')
        red.style.background = 'red'
    } else if (userEntered == 'yellow') {
        alert('WAIT!')
        yellow.style.background = 'yellow'
    } else if (userEntered == 'green') {
        alert('GO!')
        green.style.background = 'green'
    } else {
        alert('Введите цвета из указанных')
    }
}
lights()
