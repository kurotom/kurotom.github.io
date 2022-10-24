document.addEventListener('DOMContentLoaded', () => {


  const scrollFunction = (yPosition, parentButton) => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset >= yPosition) {
        parentButton.style.cssText = `
        display: block;
        opacity: 0;
        `;
      } else {
        parentButton.style.cssText = 'display: none;';
      }
    })
  };


  const divTop = document.getElementById("totop");
  const botonTop = document.getElementById("iconTop");

  const url = new URL(window.location).pathname;

  if (url.search('curriculum') >= 1) {
    scrollFunction(30, divTop);
  } else if (url.search('creditos') >= 1) {
    scrollFunction(10, divTop);
  } else {
    scrollFunction(150, divTop);
  }


  botonTop.addEventListener('click', () => {
    window.scroll(0, 0);
  })

})
