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
  const dibujoAhorcado = (pencil, indexVida) => {
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


    console.log('desde dibujoAhorcado', indexVida);


    if (indexVida > 9) {
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

  };





  const palabraSecreta = () => {

    // funcion para cortar palabras
    const cutWord = (palabra, maximo) => {
      let arrayWord = palabra.split('');
      let palabraProcesada = palabra.split('');
      let letrasQuitadas = []
      let indexUnique = [];
      let palabraCortada = [];


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

  }
  // end -- funcion palabraSecreta

  const theGame = (vida, juegoNuevo) => {
    console.log('the game');

    // Determinado por la cantidad de partes del muñeco ahorcado

    let palabraJuego = palabraSecreta();
    console.log(palabraJuego)


    let mensajeWinLose = document.getElementById('winORlose');
    mensajeWinLose.innerText = '';

    let palabraDisplay = document.getElementById('spanPalabra');
    palabraDisplay.innerText = palabraJuego.procesada;

    let statusGame = document.getElementById('displayStatusGame');


    let divCanvas = document.getElementById('tebleroCanvas');
    let pantalla = document.getElementById('canvas');
    let lapiz = pantalla.getContext("2d");

    if (juegoNuevo === false) {
      // Nueva pantalla canvas
      lapiz.fillStyle = 'white';
      lapiz.fillRect(0, 0, divCanvas.clientWidth, divCanvas.clientHeight);

      lapiz.strokeStyle = 'black';
      lapiz.lineWidth = 2;
    } else {
      // Limpia canvas para nuevo juego
      lapiz.clearRect(0, 0, divCanvas.clientWidth, divCanvas.clientHeight);

      lapiz.fillStyle = 'white';
      lapiz.fillRect(0, 0, divCanvas.clientWidth, divCanvas.clientHeight);

      lapiz.strokeStyle = 'black';
      lapiz.lineWidth = 2;

      juegoNuevo = true;
    }

    console.log(vida)


    document.addEventListener('keydown', (evento) => {

      // console.log(palabraJuego.quitadas, evento.key.toUpperCase())
      let teclaPresionada = evento.key.toUpperCase();

      let xIndex = palabraJuego.quitadas.findIndex(item => item[0] === String(teclaPresionada));
      // console.log(xIndex, teclaPresionada)

      if (xIndex > -1) {
        console.log(xIndex, palabraJuego.quitadas[xIndex], teclaPresionada);

        palabraJuego.procesada.splice(palabraJuego.quitadas[xIndex][1], 1, palabraJuego.quitadas[xIndex][0]);
        palabraJuego.quitadas.splice(xIndex, 1);

        palabraDisplay.innerText = palabraJuego.procesada;


        // console.log(palabraJuego.quitadas, palabraJuego.procesada);

        if (palabraJuego.quitadas.length === 0 && vida > 0) {
          this.removeEventListener('keydown', theGame);
          console.log('FIN DEL JUEGO');

          statusGame.innerText = 'FIN DEL JUEGO';

          mensajeWinLose.innerText = '';
          mensajeWinLose.setAttribute('class', 'winStyle');
          mensajeWinLose.innerText = 'Ganaste';

          // DETIENE EL JUEGO
          vida = -1
          //
        }
      } else {

        // console.log('fallo intento', vida);

        // ACA dibuja una parte del Ahorcado
        dibujoAhorcado(lapiz, vida);
        //



        if (vida === 0) {
          this.removeEventListener('keydown', theGame);
          console.log('FIN DEL JUEGO');

          statusGame.innerText = 'FIN DEL JUEGO';

          mensajeWinLose.innerText = '';
          mensajeWinLose.setAttribute('class', 'loserStyle')
          mensajeWinLose.innerText = 'Perdiste';

          vida = -1
        }
        vida--;
      }

    })

  };


  const manejoNuevaPalabra = () => {
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
        console.log(listOfWords);

        screenWords.style.display = 'none';
        screenGame.style.display = 'flex';

        document.removeEventListener('keydown', theGame);

        let inicioVida = 10;
        theGame(inicioVida, false);

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

  btnNuevoJuego.addEventListener('click', () => {
    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    document.removeEventListener('keydown', theGame);

    let inicioVida = 10;
    theGame(inicioVida, true);

  })


  btnStart.addEventListener('click', () => {
    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    document.removeEventListener('keydown', theGame);

    let inicioVida = 10;
    theGame(inicioVida, false);

  })


  nuevaPalabra.addEventListener('click', () => {
    manejoNuevaPalabra();
  })

  btnAddWord.addEventListener('click', () => {
    manejoNuevaPalabra();
  })

});
