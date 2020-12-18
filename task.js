// addtion
function addtion(){
     document.getElementById('text').innerHTML ='Addition of 3'
     for (let index = 1; index <= 10; index++) {
          document.getElementById('operation').innerHTML += ('3' + ' + ' + index + ' = ' + (index+3) + '<br>') 
     }
}


// multiplication
function multiplication(){
     document.getElementById('text').innerHTML = 'multiplication of 3'
     for (let index = 1; index <= 10; index++) {
          document.getElementById('operation').innerHTML += ('3' + ' * ' + index + ' = ' + (index*3) + '<br>') 
     }
}

// prompt 
let choose = prompt('enter 1 to addtion, 2 to multiplication')
if(choose == 1)
     addtion()
else if(choose == 2)
     multiplication()

