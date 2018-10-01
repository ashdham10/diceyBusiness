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
    } 
    roll(){
        let rollButton = document.getElementById('roll-dice');
        rollButton.addEventListener('click', () =>{
            this.die.innerText = randomNum();
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
    
});