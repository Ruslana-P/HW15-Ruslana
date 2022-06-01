function Clock(elem) {
    this.format = true;
    this.element = elem;
    this.element.addEventListener('click', () => this.changeFormat());
}

Clock.prototype.display = function () {
        if (this.format) {
            this.element.innerHTML = new Date().toLocaleTimeString();
        } else {
            this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
        }
    }


Clock.prototype.changeFormat = function() {
    this.format = !this.format;
}

Clock.prototype.interval = setInterval( ()=> {
    Clock.prototype.display()
    }, 1000);


let timeNow = document.querySelector('#timeNow');
console.log(timeNow)
//let timeNow2 = document.querySelector('#timeNow2')
let clock1 = new Clock (timeNow);
//clock1.format = false;

clock1

//const clock1 = new Clock(timeNow);
//clock1.format = false;

/*
const clock2 = new Clock(timeNow2)
clock2.display = function() {
    if (this.format) {
        this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time:' + new Date().toLocaleTimeString();
    } else {
        this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time' + new Date().toLocaleTimeString().substring(0, 5);
    }
}
//clock2.prototype.display = ()=> console.log('work')
console.log(clock2)


const clock3 = new Clock(timeNow)
console.log(clock3)

*/
