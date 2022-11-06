function Buy(){
  
    const discountValue = discount();
     
    const numberOfTickets = document.getElementById('quantity').value;
    
    const valueOfTickets = document.getElementById('value').innerHTML;//osea 200 pesos
    
    
    amountToPay(numberOfTickets, valueOfTickets, discountValue);
}

function discount() {//averiguar sobre SWITCH - si esta en el contenido del curso
  
    const disc = document.getElementById('inputState').value;
  
    switch(disc) {
      case 'Estudiante':
        return 20;
        break;
      case 'Trainee':
        return 50;
        break;
      case 'Junior':
        return 85;
        break;
    }
}

function amountToPay(t, v, d) {

    const total = ((t * v) * d / 100)
    
    document.getElementById('amount').innerHTML = total
  
  }

 
function reset() {
    document.getElementById('reset').value.reset();
}


switch (categorias) {
  case "Estudiante":
       valor= parseInt(cantida)*200*0.2;
       document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
       break;
 case "Trainee":
      valor = parseInt(cantida)*200*0.5; 
      document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
      break;
case "Junior":
      valor = parseInt(cantida)*200*0.85; 
      document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
      break;
default:
      break;
}
