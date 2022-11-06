function Resumen(){
    const cant = document.getElementById('cantidad').value;
    const descuento = Desc();
    const total = Total(descuento, cant);    
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
    
    const form = document.getElementById('form').innerHTML;
    form.reset();
    document.getElementById('total').innerHTML=('');    
};

 