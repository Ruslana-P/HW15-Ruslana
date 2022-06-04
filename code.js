function Clock(elem) {
    this.format = true;
    this.element = elem;

    this.element.addEventListener('click', () => this.changeFormat());
    setInterval( ()=> {
        this.display();
    }, 1000);
}

Clock.prototype.display = function() {
    if (this.format) {
        this.element.innerHTML = new Date().toLocaleTimeString();
    } else {
        this.element.innerHTML = new Date().toLocaleTimeString().substring(0, 5);
    }
}

Clock.prototype.changeFormat = function() {
    this.format = !this.format;
}

function ClockWithDate(elem) {
    Clock.call(this, elem);
}

ClockWithDate.prototype = Object.create(Clock.prototype);

ClockWithDate.prototype.display = function() {
    if (this.format) {
        this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time: ' + new Date().toLocaleTimeString();
    } else {
        this.element.innerHTML = 'Data: ' + new Date().toLocaleDateString() + ' Time: ' + new Date().toLocaleTimeString().substring(0, 5);
    }
}

function RegularClock(elem) {
    Clock.call(this, elem);
}

RegularClock.prototype = Object.create(Clock.prototype);

RegularClock.prototype.display = function() {
    if (this.format) {
        this.element.innerHTML = 'Actual time: ' + new Date().toLocaleTimeString();
    } else {
        this.element.innerHTML = 'Actual time: ' + new Date().toLocaleTimeString().substring(0, 5);
    }
}

let timeNow = document.querySelector('#timeNow');
let timeNow2 = document.querySelector('#timeNow2');
let clock1 = new ClockWithDate(timeNow);
let clock2 = new RegularClock(timeNow2);

