// addtion
let sum = 1
function addtion(){
     document.getElementById('text').innerHTML ='Addition of 3'
     for (let index = 1; index <= 10; index++) {
          sum = index + 3
          document.getElementById('operation').innerHTML += ('3' + ' + ' + index + ' = ' + sum + '<br>') 
     }
}


// multiplication
let mul = 1
function multiplication(){
     document.getElementById('text').innerHTML = 'multiplication of 3'
     for (let index = 1; index <= 10; index++) {
          mul = index * 3
          document.getElementById('operation').innerHTML += ('3' + ' * ' + index + ' = ' + mul + '<br>') 
     }
}

// prompt 
let choose = prompt('enter 1 to addtion, 2 to multiplication')
if(choose == 1)
     addtion()
else if(choose == 2)
     multiplication()

