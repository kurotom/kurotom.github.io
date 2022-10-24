document.addEventListener('DOMContentLoaded', () => {

  const formulario = document.querySelector("[data-formulario]");
  let nombre = document.querySelector("[data-nombre]");
  let email = document.querySelector("[data-email]");
  let mensaje = document.querySelector("[data-mensaje]");
  let notificacion = document.querySelector("[data-notificacion]");


  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    console.log(nombre.value, email.value, mensaje.value)

    if (nombre.value.length > 0 && email.value.length > 0 && mensaje.value.length > 0) {


      nombre.value = '';
      email.value = '';
      mensaje.value = '';

      formulario.style.cssText = "display: none;"
      notificacion.style.cssText = "display: flex;"

      setTimeout(() => {
        formulario.style.cssText = "display: flex;"
        notificacion.style.cssText = "display: none;"

        window.scrollTo(0, 5316);
      }, 3000);
    } else {
      console.log('INGRESEN DATOS')
    }

  });


});
