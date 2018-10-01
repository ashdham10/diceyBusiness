document.addEventListener('DOMContentLoaded', function(){
    console.log('dom content loaded!');

let container = document.createElement('div');
document.body.appendChild(container);

class Die {
    constructor(value){
       this.die = document.createElement('div');
       this.die.classList.add('dice');
       container.appendChild(this.die);
       this.die.innerText = value;
       this.roll();
       this.oneRoll();
       this.removeDie();
    } 
    roll(){
        let rollButton = document.getElementById('roll-dice');
        rollButton.addEventListener('click', () => {
            this.die.innerText = randomNum();
        });
    }
    oneRoll(){
        this.die.addEventListener('click', () => {
            this.die.innerText = randomNum();
        });
    }
    removeDie(){
        this.die.addEventListener('dblclick', () => {
           container.removeChild(this.die);
        });
    }
}

function randomNum(){
    return Math.floor(Math.random() * 6) + 1;
}

let dieButton = document.getElementById('get-die');
dieButton.addEventListener('click', insertDie);

function insertDie(){
    let num = randomNum();
    let newDie = new Die(num);
}

let sumButton = document.getElementById('sum-dice');
sumButton.addEventListener('click', getSum);


 function getSum(){
    let innerHTMLs = Array.prototype.slice.call(document.getElementsByClassName('dice')).map(function(x){return x.innerHTML}); 
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let arr = innerHTMLs.reduce(reducer).split('');
    let arr2 = []
    arr.forEach(element => {
        let num = +element;
        arr2.push(num);
    });
    let sum = arr2.reduce((a, b) => a + b, 0);

    alert(`Sum of the dice is ${sum}!`);
};

    
});