
export const formContacto = () => {
  let formulario = document.querySelector("[data-form-contacto]");
  let nameInput = document.querySelector("[data-form-contacto-name]");
  let mensajeInput = document.querySelector("[data-form-contacto-mensaje]");

  let nameWarn = document.querySelector("[data-warning-name]");
  let mensajeWarn = document.querySelector("[data-warning-mensaje]");

  nameInput.addEventListener("focus", () => {
    nameWarn.innerText = "";
    nameInput.setAttribute("class", "valido");
  })
  mensajeInput.addEventListener("focus", () => {
    mensajeWarn.innerText = "";
    mensajeInput.setAttribute("class", "valido");
  })


  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (nameInput.value === "") {
      nameWarn.innerText = "Ingrese nombre.";
      nameInput.setAttribute("class", "invalido");
    }
    if (mensajeInput.value === "") {
      mensajeWarn.innerText = "Ingrese mensaje.";
      mensajeInput.setAttribute("class", "invalido");
    }

    if (nameInput.value !== "" && mensajeInput.value !== "") {
      console.log(
        nameInput.value,
        mensajeInput.value
      )

    }

  });


};
