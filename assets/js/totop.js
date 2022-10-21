document.addEventListener('DOMContentLoaded', () => {


  const scrollFunction = (yPosition) => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset >= yPosition) {
        botonTop.style.cssText = `
        display: block;
        opacity: 0;
        `;
      } else {
        botonTop.style.cssText = 'display: none;';
      }
    })
  };



  const botonTop = document.getElementById("totop");

  const url = new URL(window.location).pathname;

  if (url.search('curriculum') >= 1) {
    scrollFunction(30);
  } else if (url.search('creditos') >= 1) {
    scrollFunction(10);
  } else {
    scrollFunction(150);
  }


  botonTop.addEventListener('click', () => {
    window.scroll(0, 0);
  })

})
