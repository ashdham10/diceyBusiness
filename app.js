document.addEventListener('DOMContentLoaded', function(){
    console.log('dom content loaded!');

class Die {
    constructor(value){
        this.value = value;
    }
    roll(){
        this.value = Math.floor((Math.random() * 6) + 1);
    }
};

let container = document.createElement('div');
document.body.appendChild(container);

document.getElementById('getDie').onclick = function(e){
    let die = document.createElement('div');
    die.classList.add('dice');
    container.appendChild(die);
    
}



});