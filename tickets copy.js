
    
function Resumen(){

    const cant = document.getElementById('cantidad').value;
    const descuento = Desc();
    const total = Total(descuento, cant); 
    
    
    /*if (cat === 'Estudiante'){
        let desc = 200*(80/100);
        
        let tic = cant*200;
        const tot = tic-desc;
        document.getElementById('total').innerHTML=tot;
    }

    if (cat === 'Trainee'){
        let desc = 200*(50/100);
        
        let tic = cant*200;
        const tot = tic-desc;
        document.getElementById('total').innerHTML=tot;
    }    

    if (cat === 'Junior'){
        let desc = 200*(15/100);
        
        let tic = cant*200;
        const tot = tic-desc;
        document.getElementById('total').innerHTML=tot;
    }*/  
};

  
function Desc () {
    const cat = document.getElementById('categoria').value;
    if (cat === 'Estudiante'){
        let descuento = 0.2;
        return descuento;
    }else if (cat === 'Trainee'){
        let descuento = 0.5;
        return descuento;
    }else if (cat === 'Junior'){
        let descuento = 0.8;
        return descuento;
    }
};

function Total (descuento, cant){
    const tot = cant*200*descuento;
    document.getElementById('total').innerHTML=tot;
};


function Limpiar() {
    document.getElementById('total').innerHTML=('');
    document.getElementById('form').value=('');
};


//basicamente, tengo que hacer una funcion para cada descuento, agregarlas a resumen. REFACTORIZAR LA FUNCION
//establecer globalmente la variable ticket(cantidad de ticketes seleccionados por el precio 200)
//preguntar si el descuento es al precio de todos los ticketes o al precio general nada mas

//cada funcion aplica su propio descuento

//podria hacer un return y luego ese valor que sea procesado en la funcion princip
//PG hizo fue 80%=cant*40 , 50%=cant*100, 15%=cant*170

