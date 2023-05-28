//var form = document.getElementById("idform")

const form = document.getElementById('idform');
const username= document.getElementById('username');
const lastname= document.getElementById('lastname');
const email= document.getElementById('email');
const cantidad= document.getElementById('cantidad');
const categoria= document.getElementById('categoria');
const pagar= document.getElementById('total');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
    totalPagar();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const cantidadValue = cantidad.value.trim();
    
    if (!usernameValue || usernameValue === ''){
        setErrorFor(username, 'Usuario invalido')
    } else{
        setSuccessFor(username);
    }

    if (!lastnameValue || lastnameValue === ''){
        setErrorFor(lastname, 'Usuario invalido')
    } else{
        setSuccessFor(lastname);
    }
    

    if( emailValue === ''){
        setErrorFor(email,'Email invalido');
    } else if (!isEmail(emailValue)){
        setErrorFor(email,'Email no valido');
    } else{
        setSuccessFor(email);
    }
    if (cantidadValue === ''){
        setErrorFor(cantidad, 'Contraseña invalido')
    } else{
        setSuccessFor(cantidad);
    }
  


}


function  setErrorFor(input,message){
    const formControl = input.parentElement;
    console.log (input)
    const small = formControl.querySelector(`#${input.id}_small`);

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

function totalPagar(){
    const cantidadValue = cantidad.value.trim();
    const categoriaValue = categoria.value.trim();
    
    let precioNeto=cantidadValue * 200;
    let precioDescuento= precioNeto * categoriaValue
    let total = precioNeto-precioDescuento
    pagar.value=`${total}`
}