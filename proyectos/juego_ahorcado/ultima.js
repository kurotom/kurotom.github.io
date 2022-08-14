document.addEventListener('DOMContentLoaded', () => {

  const keyCodesWord = {
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
  }


  let listOfWords = [
    "GATHER",
    "SUPERB",
    "CLIP",
    "ELATED",
    "HEAVY",
    "BEEF",
    "HAPPY",
    "HIDEOUS",
    "ABSENT",
    "SCARED",
  ]

//
// ahorcado son 10 partes
//
  const dibujoAhorcado = (pencil, indexVida, bol) => {
    const base = () => {
      // base horca
      pencil.beginPath();
      pencil.moveTo(10, 140);
      pencil.lineTo(110, 140);
      pencil.stroke();
      pencil.closePath();
    }
    const mastil = () => {
      // mastil horca
      pencil.beginPath();
      pencil.moveTo(60, 5)
      pencil.lineTo(60, 140);
      pencil.stroke();
      pencil.closePath();
    }
    const viga = () => {
      // viga horca
      pencil.beginPath();
      pencil.moveTo(60, 10);
      pencil.lineTo(210, 10);
      pencil.stroke();
      pencil.closePath();
    }
    const soga = () => {
      // soga horca
      pencil.beginPath();
      pencil.moveTo(200, 10);
      pencil.lineTo(200, 30);
      pencil.stroke();
      pencil.closePath();
    }
    const cabeza = () => {
      // cabeza
      pencil.beginPath();
      pencil.arc(200, 40, 12, 0, 2 * Math.PI);
      pencil.stroke();
      pencil.closePath();
    }
    const brazo_izquierdo = () => {
      // brazo Izquierdo
      pencil.beginPath();
      pencil.moveTo(200, 52);
      pencil.lineTo(180, 80);
      pencil.stroke();
      pencil.closePath();
    }
    const torso = () => {
      // torso
      pencil.beginPath();
      pencil.moveTo(200, 52);
      pencil.lineTo(200, 95);
      pencil.stroke();
      pencil.closePath();
    }
    const brazo_derecho = () => {
      // brazo derecho
      pencil.beginPath();
      pencil.moveTo(200, 52);
      pencil.lineTo(220, 80);
      pencil.stroke();
      pencil.closePath();
    }
    const pierna_izquierda = () => {
      // pierna Izquierda
      pencil.beginPath();
      pencil.moveTo(200, 95);
      pencil.lineTo(180, 122);
      pencil.stroke();
      pencil.closePath();
    }
    const pierna_derecha = () => {
      // pierna derecha
      pencil.beginPath();
      pencil.moveTo(200, 95);
      pencil.lineTo(215, 122);
      pencil.stroke();
      pencil.closePath();
    }

    console.log('desde dibujoAhorcado', indexVida, bol);
    // indexVida = 0;


    if (indexVida !== -1) {
      if (indexVida > 9 ) {
        base();
      } else if (indexVida > 8) {
        mastil();
      } else if (indexVida > 7) {
        viga();
      } else if (indexVida > 6) {
        soga();
      } else if (indexVida > 5) {
        cabeza();
      } else if (indexVida > 4) {
        brazo_izquierdo();
      } else if (indexVida > 3) {
        torso();
      } else if (indexVida > 2) {
        brazo_derecho();
      } else if (indexVida > 1) {
        pierna_izquierda();
      } else if (indexVida > 0) {
        pierna_derecha();
      }
    }

  };

  class Ahorcado {
    constructor(pencil) {
      this.pencil = pencil
    }
    base() {
      this.pencil.beginPath();
      this.pencil.moveTo(10, 140);
      this.pencil.lineTo(110, 140);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    mastil() {
      this.pencil.beginPath();
      this.pencil.moveTo(60, 5);
      this.pencil.lineTo(60, 140);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    viga() {
      this.pencil.beginPath();
      this.pencil.moveTo(60, 10);
      this.pencil.lineTo(210, 10);
      this.pencil.stroke();
      this.pencil.closePath();
    }

    soga()  {
      // soga horca
      this.pencil.beginPath();
      this.pencil.moveTo(200, 10);
      this.pencil.lineTo(200, 30);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    cabeza()  {
      // cabeza
      this.pencil.beginPath();
      this.pencil.arc(200, 40, 12, 0, 2 * Math.PI);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    brazo_izquierdo()  {
      // brazo Izquierdo
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(180, 80);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    torso()  {
      // torso
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(200, 95);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    brazo_derecho()  {
      // brazo derecho
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(220, 80);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    pierna_izquierda()  {
      // pierna Izquierda
      this.pencil.beginPath();
      this.pencil.moveTo(200, 95);
      this.pencil.lineTo(180, 122);
      this.pencil.stroke();
      this.pencil.closePath();
    }
    pierna_derecha()  {
      // pierna derecha
      this.pencil.beginPath();
      this.pencil.moveTo(200, 95);
      this.pencil.lineTo(215, 122);
      this.pencil.stroke();
      this.pencil.closePath();
    }

    render() {
      console.log(this.pencil);
    }

  }

  const formatoPalabraJuego = (arrayWord) => {
    console.log(arrayWord)
    let div = document.createElement('div');
    arrayWord.forEach(item => {
      let span = document.createElement('span');
      if (item === ' ') {
        span.innerText = '_';
      } else {
        span.innerText = item;
      }
      div.appendChild(span);
    })
    return div.outerHTML;
  }


  //
  // funcion palabra secreta
  const palabraSecreta = () => {

    // funcion para cortar palabras
    const cutWord = (palabra, maximo) => {
      let arrayWord = palabra.split('');
      let palabraProcesada = palabra.split('');
      let letrasQuitadas = [];

      // DEPURAR : NO ENTREGA INDICE CORRECTO LETRA

      let i = 1;
      while (i < maximo) {
        let indiceLetra = Math.floor(Math.random() * (arrayWord.length));

        if (arrayWord[indiceLetra] !== ' ') {
          let quitada = arrayWord.splice(indiceLetra, 1, ' ')[0]
          letrasQuitadas.push([quitada, indiceLetra])

          palabraProcesada.splice(indiceLetra, 1, ' ')

          // console.log(quitada, indiceLetra, arrayWord, palabraProcesada)

          i++;
        };
      }
      // console.log(palabraProcesada)

      // ordena por indice
      letrasQuitadas.sort((a, b) => a[1] > b[1]);

      let objetoResultado = {
        'original': palabra,
        'procesada': palabraProcesada,
        'quitadas': letrasQuitadas,
      }
      return objetoResultado;
    }
    // end -- funcion para cortar palabras
    //


    let index = Math.floor(Math.random() * (listOfWords.length));
    let selectedWord = listOfWords[index].toUpperCase();

    if (selectedWord.length > 6) {
      // quita 4 letras
      // console.log(cutWord(selectedWord, 4));
      let entregaPalabra4 = cutWord(selectedWord, 5);
      return entregaPalabra4;

    } else if (selectedWord.length > 4 && selectedWord.length <= 6) {
      // quita 3 letras
      // console.log(cutWord(selectedWord, 3));
      let entregaPalabra3 = cutWord(selectedWord, 4);
      return entregaPalabra3;

    } else if (selectedWord.length <= 4) {
      // quita 2 letras
      // console.log(cutWord(selectedWord, 2));
      let entregaPalabra2 = cutWord(selectedWord, 3);
      return entregaPalabra2;

    }

  };
  // end -- funcion palabraSecreta
  //

  const theGame = (vida, usoCanvas) => {
    console.log('the game');


    // Determinado por la cantidad de partes del muñeco ahorcado

    let palabraJuego = palabraSecreta();
    console.log(palabraJuego)
    let f = JSON.parse(window.sessionStorage.getItem('noModificar'));
    if (f !== null) {
      palabraJuego = false;
    }


    let mensajeWinLose = document.getElementById('winORlose');
    mensajeWinLose.innerText = '';


    //  div palabra formada
    let palabraDisplay = document.getElementById('spanPalabra');
    // palabraDisplay.innerText = palabraJuego.procesada;

    palabraDisplay.innerHTML = formatoPalabraJuego(palabraJuego.procesada);


    let statusGame = document.getElementById('displayStatusGame');


    let divCanvas = document.getElementById('tableroCanvas');
    // let pantalla = document.getElementById('canvas');
    // let lapiz = pantalla.getContext("2d");
    let lapiz = usoCanvas.getContext("2d");

    lapiz.fillStyle = 'white';
    lapiz.fillRect(0, 0, divCanvas.clientWidth, divCanvas.clientHeight);

    lapiz.strokeStyle = 'black';
    lapiz.lineWidth = 2;

    // console.log(vida)

    document.addEventListener('keydown', (evento) => {

      // console.log(palabraJuego.quitadas, evento.key.toUpperCase())
      let teclaPresionada = evento.key.toUpperCase();

      let xIndex;
      if (typeof(palabraJuego) === 'object') {
        xIndex = palabraJuego.quitadas.findIndex(item => item[0] === String(teclaPresionada));
      } else if (typeof(palabraJuego) === 'boolean') {
        xIndex = -1
      }

      // console.log(xIndex, teclaPresionada)
      // console.log('--->', palabraJuego.quitadas)

      let f = JSON.parse(window.sessionStorage.getItem('noModificar'));
      if (f !== null) {
        console.log('ññññ', f)
        xIndex = -1;
        palabraJuego = '';
      }

      if (xIndex > -1) {
        console.log(xIndex, palabraJuego.quitadas[xIndex], teclaPresionada);

        palabraJuego.procesada.splice(palabraJuego.quitadas[xIndex][1], 1, palabraJuego.quitadas[xIndex][0]);
        palabraJuego.quitadas.splice(xIndex, 1);

        palabraDisplay.innerHTML = formatoPalabraJuego(palabraJuego.procesada);


        // console.log(palabraJuego.quitadas, palabraJuego.procesada);

        if (palabraJuego.quitadas.length === 0 && vida > 0) {

          document.removeEventListener('keydown', theGame);

          console.log('FIN DEL JUEGO');

          statusGame.innerText = 'FIN DEL JUEGO';

          mensajeWinLose.innerText = '';
          mensajeWinLose.setAttribute('class', 'winStyle');
          mensajeWinLose.innerText = 'Ganaste';

          // DETIENE EL JUEGO
          vida = null
          //
        }
      } else {

        // console.log('fallo intento', teclaPresionada, palabraJuego.quitadas);
        // console.log(vida)

        if (vida > -1 && vida !== null) {
          if (typeof(palabraJuego) !== 'boolean') {
            let erroneas = document.getElementById('incorrectas');
            erroneas.innerHTML += `<span>${teclaPresionada}</span>`;
          }
        }

        // ACA dibuja una parte del Ahorcado
        // dibujoAhorcado(lapiz, vida, juegoNuevo);
        let mono;
        mono = new Ahorcado(lapiz);

        switch(vida) {
          case 10:
            mono.base();
            break;
          case 9:
            mono.mastil();
            break;
          case 8:
            mono.viga();
            break;
          case 7:
            mono.soga();
            break;
          case 6:
            mono.cabeza();
            break;
          case 5:
            mono.torso();
            break;
          case 4:
            mono.brazo_izquierdo();
            break;
          case 3:
            mono.brazo_derecho();
            break;
          case 2:
            mono.pierna_izquierda();
            break;
          case 1:
            mono.pierna_derecha();
            break;
        };

        //

        if (vida === 0) {

          document.removeEventListener('keydown', theGame);

          console.log('FIN DEL JUEGO');

          statusGame.innerText = 'FIN DEL JUEGO';

          mensajeWinLose.innerText = '';
          mensajeWinLose.setAttribute('class', 'loserStyle')
          mensajeWinLose.innerText = 'Perdiste';

          vida = null
        }
        vida--;
      }

    }, false)

  };


  const manejoNuevaPalabra = () => {

    window.sessionStorage.setItem('noModificar', true);

    let status = document.getElementById('displayStatusGame');
    status.innerText = '';
    let erroneas = document.getElementById('incorrectas');
    erroneas.innerHTML = '';


    screenInicio.style.display = 'none';
    screenWords.style.display = 'flex';
    screenGame.style.display = 'none';

    let form = document.getElementById('formWord');
    let texto = document.getElementById('textField');
    let cancelar = document.getElementById('cancelar');

    cancelar.addEventListener('click', () => {
      texto.value = '';
      screenInicio.style.display = 'flex';
      screenWords.style.display = 'none';
      screenGame.style.display = 'none';

      document.removeEventListener('keydown', theGame);

    })

    form.addEventListener('submit', (evento) => {
      evento.preventDefault();
      if (texto.value.trim() !== '') {
        listOfWords.push(texto.value.toUpperCase())
        texto.value = '';
        console.log('new list words-->', listOfWords);

        screenWords.style.display = 'none';
        screenGame.style.display = 'flex';

        let erroneas = document.getElementById('incorrectas');
        erroneas.innerHTML = '';

        document.removeEventListener('keydown', theGame);

        let divCanvas = document.getElementById('tableroCanvas');
        divCanvas.innerHTML = '';

        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.style.cssText = `
          width: 100%;
          height: 100%;
        `
        divCanvas.appendChild(canvas);


        window.sessionStorage.removeItem('noModificar');

        let inicioVida = 10;
        theGame(inicioVida, canvas);
      } else {
        texto.value = '';
      }
    })
  };


  let screenInicio = document.getElementById('inicio');
  let screenWords = document.getElementById('insertPalabra');
  let screenGame = document.getElementById('thegame');

  let btnStart = document.getElementById('startGame');
  let btnAddWord = document.getElementById('addWord');

  let btnNuevoJuego = document.getElementById('nuevoJuego');
  let nuevaPalabra = document.getElementById('nuevaPalabra');

  //
  // comprueba si se hizo reload, para nuevo juego y lo elimina
  if (JSON.parse(window.sessionStorage.getItem("reload")) !== null) {
    window.sessionStorage.removeItem('reload');

    console.log('RELOAD----->')

    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    document.removeEventListener('keydown', theGame);

    let canvAs = document.getElementById('canvas');

    let inicioVida = 10;
    theGame(inicioVida, canvAs);
  };
  //    ////    //  //    ////    //  //    ////    //
  //    ////    //  //    ////    //  //    ////    //


  btnNuevoJuego.addEventListener('click', () => {

    window.sessionStorage.setItem('reload', true)

    window.location.reload();
  })


  btnStart.addEventListener('click', () => {
    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    document.removeEventListener('keydown', theGame);

    let can = document.getElementById('canvas');

    let inicioVida = 10;
    theGame(inicioVida, can);

  })


  nuevaPalabra.addEventListener('click', () => {
    document.removeEventListener('keydown', theGame, true);
    manejoNuevaPalabra();
  })

  btnAddWord.addEventListener('click', () => {
    document.removeEventListener('keydown', theGame, true);
    manejoNuevaPalabra();
  })

});
