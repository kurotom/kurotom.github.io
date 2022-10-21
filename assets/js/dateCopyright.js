document.addEventListener("DOMContentLoaded", () => {

  const spanYear = document.querySelector("[data-year-copyright]");

  const date = new Date();

  spanYear.innerText = date.getFullYear();

})
