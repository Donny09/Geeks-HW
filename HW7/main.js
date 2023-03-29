class Lights {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    hide () {
        this.$element.style.display = 'none'
    }
    show () {
        this.$element.style.display = 'block'
    }
}
class Color extends Lights {
    constructor(options) {
        super(options.selector)
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
        this.$element.style.borderRadius = options.borderRadius + '%'
    }
}
const red = new Color ({
    selector: '#red',
    size: 50,
    color: 'red',
    borderRadius: 50
})
const yellow = new Color ({
    selector: '#yellow',
    size: 50,
    color: 'yellow',
    borderRadius: 50
})
const green = new Color ({
    selector: '#green',
    size: 50,
    color: 'green',
    borderRadius: 50
})
const userEntered = prompt('RED, YELLOW or GREEN').toLowerCase()
const cvet = () => {
    if (userEntered === 'red'){
        red.show()
        yellow.hide()
        green.hide()
        alert('STOP!')
    } else if (userEntered === 'yellow'){
        red.hide()
        yellow.show()
        green.hide()
        alert('wAIT!')
    } else if (userEntered === 'green'){
        red.hide()
        yellow.hide()
        green.show()
        alert('GO!')
    } else {
        alert('Введите цвет из указанных!')
    }
}
cvet() 




class Cars{
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start() {
        console.log(`${this.model} заведен`);
    }
}
class Toyota extends Cars {
    constructor(options) {
        super(options)
        this.hybrid = options.hybrid
    }
}
const corolla = new Toyota({
    model: 'Toyota corolla',
    color: 'gray',
    wheels : 4,
    hybrid: true
})
crown.start()
console.log(crown);

class Lexus extends Cars {
    constructor(options) {
        super(options)
        this.year = options.year
    }
}
const Gx470 = new Lexus({
    model: 'Lexus Gx470',
    color: 'white',
    wheels : 4,
    year: '2008'
})
Gx470.start()
console.log(Gx470);

class Audi extends Cars {
    constructor(options) {
        super(options)
        this.carBody = options.carBody
    }
}
const rs6 = new Audi({
    model: 'Audi rs6',
    color: 'dark gray',
    wheels : 4,
    carBody: 'RS6'
})
rs6.start()
console.log(rs6);