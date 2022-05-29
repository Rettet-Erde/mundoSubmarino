// CARROUSEL EN INDEX-----------------------------------------

const padre = document.querySelector('.padre')
const boton = document.querySelectorAll('.boton')

//Recorre TODOS los puntos para asignales la acción a ejecutar en el evento CLICK
boton.forEach( (arrBoton,posicion)=> {
    boton[posicion].addEventListener('click',()=>{           //Asigna un CLICK a arrBoton
        let operacion = posicion * -9.939                     //Calcula el espacio que debe DESPLAZARSE el PADRE
        padre.style.transform = `translateX(${operacion}%)`  //Mueve el PADRE
        boton.forEach((arrBoton,posicion)=>{                 //Recorre TODOS los botones
            boton[posicion].classList.remove('activo')       //Quita la clase ACTIVO a TODOS los botones
        })
            boton[posicion].classList.add('activo')          //AÑADE la clase ACTIVO en el botón donde se hace CLICK
    })
})




// VALIDACIONES FORMULARIO--------------------------------------------------

document.addEventListener("DOMContentLoaded", function(){
  
    document.getElementById("formulario")
    .addEventListener('submit', validarFormulario)
    .addEventListener('click', limpiarFormulario); 
  
});
  
    
    function validarFormulario(evento) {
      evento.preventDefault();
      let nombre = document.getElementById('nombre').value;
      if(nombre.length <= 2 || nombre.length >=21) {
        alert('Complete el nombre, de 3 a 20 caracteres, incluyendo espacios.');
        return;
      }
      let apellido = document.getElementById('apellido').value;
      if (apellido.length <= 1 || nombre.length >=21) {
        alert('Complete el apellido, de 2 a 20 caracteres, incluyendo espacios.');
        return;
      }
      let edad = document.getElementById('edad').value;
      if (edad<= 17) {
        alert('Solo se admiten mayores de 18 años.');
        return;
      }
      let dni = document.getElementById('dni').value;
      if (dni.length <= 6) {
        alert('Complete su numero de DNI. No escriba aqui su número de L.E, ni pasaporte, ni ningún otro documento.');
        return;
      }
      let pais = document.getElementById('pais').value;
      if (pais.length <= 2 || nombre.length >=17) {
        alert('Complete el pais de residencia, de 3 a 16 caracteres, incluyendo espacios.');
        return;
      }
      let email = document.getElementById('email').value;
      if (email.length == 0) {
        alert ('Complete su correo electrónico sin comas (,) asteriscos (*) ni espacios en blanco.');
        return;
      }
      alert("¡Muchas gracias por enviar el formulario!");
      this.submit();
      
      function limpiarFormulario(){
        document.getElementById("formulario").reset();}
    };
  