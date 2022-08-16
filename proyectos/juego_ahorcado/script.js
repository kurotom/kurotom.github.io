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
// Clase Ahorcado, 10 partes
//
  class Ahorcado {
    constructor(pencil) {
      this.pencil = pencil
    };
    base() {
      this.pencil.beginPath();
      this.pencil.moveTo(10, 140);
      this.pencil.lineTo(110, 140);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    mastil() {
      this.pencil.beginPath();
      this.pencil.moveTo(60, 5);
      this.pencil.lineTo(60, 140);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    viga() {
      this.pencil.beginPath();
      this.pencil.moveTo(60, 10);
      this.pencil.lineTo(210, 10);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    soga()  {
      // soga horca
      this.pencil.beginPath();
      this.pencil.moveTo(200, 10);
      this.pencil.lineTo(200, 30);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    cabeza()  {
      // cabeza
      this.pencil.beginPath();
      this.pencil.arc(200, 40, 12, 0, 2 * Math.PI);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    brazo_izquierdo()  {
      // brazo Izquierdo
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(180, 80);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    torso()  {
      // torso
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(200, 95);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    brazo_derecho()  {
      // brazo derecho
      this.pencil.beginPath();
      this.pencil.moveTo(200, 52);
      this.pencil.lineTo(220, 80);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    pierna_izquierda()  {
      // pierna Izquierda
      this.pencil.beginPath();
      this.pencil.moveTo(200, 95);
      this.pencil.lineTo(180, 122);
      this.pencil.stroke();
      this.pencil.closePath();
    };
    pierna_derecha()  {
      // pierna derecha
      this.pencil.beginPath();
      this.pencil.moveTo(200, 95);
      this.pencil.lineTo(215, 122);
      this.pencil.stroke();
      this.pencil.closePath();
    };
  };


  //
  // Da formato a las palabras secretas formateadas
  //
  const formatoPalabraJuego = (arrayWord, original) => {
    // console.log(arrayWord)
    let div = document.createElement('div');
    div.setAttribute('id', 'containerAnswers')

    let index = 0;
    arrayWord.forEach((item, posicion) => {
    // arrayWord.forEach(item => {
      let span = document.createElement("div");
      span.setAttribute("class", "answerDiv");

      // if (item === ' ') {
      //   span.innerHTML = `<input class="answer" type="text" name="${index}" maxlength="1" autofocus>`;
      // } else {
      //   span.innerText = item;
      // }


      if (original[posicion] === ' ' ) {
        span.innerHTML = `<input class="wordDisabled" type="text" name="${index}" maxlength="1" disabled>`;
      } else {

        if (item === ' ') {
          span.innerHTML = `<input class="answer" type="text" name="${index}" maxlength="1" autofocus>`;
        } else {
          span.innerText = item;
        }

      }

      div.appendChild(span);
      index++;
    });

    return div.outerHTML;
  }


  //
  // funcion palabra secreta del juego
  //
  const palabraSecreta = () => {

    // funcion para cortar palabras
    const cutWord = (palabra, maximo) => {
      let arrayWord = palabra.split('');
      let palabraProcesada = palabra.split('');
      let letrasQuitadas = [];

      let i = 1;
      while (i < maximo) {
        let indiceLetra = Math.floor(Math.random() * (arrayWord.length));

        if (arrayWord[indiceLetra] !== ' ') {
          let quitada = arrayWord.splice(indiceLetra, 1, ' ')[0]
          letrasQuitadas.push([quitada, indiceLetra])

          palabraProcesada.splice(indiceLetra, 1, ' ')

          // console.log(quitada, indiceLetra, arrayWord, palabraProcesada)

        }
        i++;

      };
      // fin funcion

      // Ordena por indice
      letrasQuitadas.sort((item1, item2) => item1[1] > item2[1]);
      //

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
      let entregaPalabra4 = cutWord(selectedWord, 5);
      return entregaPalabra4;
    }
    else if (selectedWord.length > 4 && selectedWord.length <= 6) {
      // quita 3 letras
      let entregaPalabra3 = cutWord(selectedWord, 4);
      return entregaPalabra3;
    }
    else if (selectedWord.length <= 4) {
      // quita 2 letras
      let entregaPalabra2 = cutWord(selectedWord, 3);
      return entregaPalabra2;
    };
  };
  // end -- funcion palabraSecreta
  //


  //
  // El juego
  //
  const theGame = (vida, usoCanvas, newWords) => {
    console.log('the game');

    if (newWords !== undefined) {
      newWords.forEach(item => {
        listOfWords.push(item);
      })
    }
    // console.log(listOfWords);

    let palabraJuego = palabraSecreta();
    // console.log(palabraJuego);
    // console.log(palabraJuego.original)

    let mensajeWinLose = document.getElementById('winORlose');
    mensajeWinLose.innerText = '';

    //  div palabra formada
    let palabraDisplay = document.getElementById('spanPalabra');
    // palabraDisplay.innerText = palabraJuego.procesada;

    palabraDisplay.innerHTML = formatoPalabraJuego(palabraJuego.procesada, palabraJuego.original);

    let statusGame = document.getElementById('displayStatusGame');
    let divCanvas = document.getElementById('tableroCanvas');
    let lapiz = usoCanvas.getContext("2d");

    lapiz.fillStyle = 'white';
    lapiz.fillRect(0, 0, divCanvas.clientWidth, divCanvas.clientHeight);

    lapiz.strokeStyle = 'black';
    lapiz.lineWidth = 2;

    // console.log(vida) 
    let palabraResponse = document.getElementById('respuesta');

    let respuestas = document.querySelectorAll('.answer');
    respuestas.forEach(inputResponse => {

      inputResponse.addEventListener('input', () => {
        // input cambia color al responder
        inputResponse.style.cssText = `border: 1px solid grey`;
        //

        let teclaPresionada = inputResponse.value;
        // console.log(teclaPresionada)

        if (Object.keys(keyCodesWord).includes(teclaPresionada.toLowerCase())) {

          teclaPresionada = teclaPresionada.toUpperCase();

          let xIndex = palabraJuego.quitadas.findIndex(item => item[0] === String(teclaPresionada));

          // console.log(xIndex, palabraJuego.quitadas[xIndex], teclaPresionada);

          if (xIndex > -1) {
            // console.log(xIndex, palabraJuego.quitadas[xIndex], teclaPresionada);
            // console.log(
            //   parseInt(inputResponse.name), palabraJuego.quitadas[xIndex], palabraJuego.quitadas[xIndex][1]
            // );

            if (parseInt(inputResponse.name) === palabraJuego.quitadas[xIndex][1]) {
              palabraJuego.procesada.splice(palabraJuego.quitadas[xIndex][1], 1, palabraJuego.quitadas[xIndex][0]);
              palabraJuego.quitadas.splice(xIndex, 1);

              inputResponse.disabled = true;
            };

            // console.log(palabraJuego.quitadas, palabraJuego.procesada);

            if (palabraJuego.quitadas.length === 0 && vida >= 0) {

              palabraResponse.innerText = palabraJuego.original;

              console.log('FIN DEL JUEGO');

              statusGame.innerText = 'FIN DEL JUEGO';

              mensajeWinLose.innerText = '';
              mensajeWinLose.setAttribute('class', 'winStyle');
              mensajeWinLose.innerText = 'Ganaste';

              // DETIENE EL JUEGO
              vida = null;
              //
            };
          } else {

            // console.log('fallo intento', teclaPresionada, palabraJuego.quitadas);
            // console.log(vida)

            // input cambia color al responder
            inputResponse.style.cssText = `outline: 7px solid red;`;
            //

            if (vida > -1 && vida !== null) {
              if (typeof(palabraJuego) !== 'boolean') {
                let erroneas = document.getElementById('incorrectas');
                erroneas.innerHTML += `<span>${teclaPresionada}</span>`;
              };
            };

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
              console.log('FIN DEL JUEGO');

              palabraResponse.innerText = palabraJuego.original;

              statusGame.innerText = 'FIN DEL JUEGO';

              mensajeWinLose.innerText = '';
              mensajeWinLose.setAttribute('class', 'loserStyle');
              mensajeWinLose.innerText = 'Perdiste';

              respuestas.forEach(item => {
                item.disabled = true;
              });

              vida = null;
            };

            vida--;

          };
        };
      });
    });
  };


  const manejoNuevaPalabra = () => {

    // let status = document.getElementById('displayStatusGame');
    // status.innerText = '';
    // let erroneas = document.getElementById('incorrectas');
    // erroneas.innerHTML = '';


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
    });

    form.addEventListener('submit', (evento) => {
      evento.preventDefault();

      let palabrasNuevas = [];

      if (texto.value.trim() !== '') {
        // listOfWords.push(texto.value.toUpperCase())

        palabrasNuevas.push(texto.value.toUpperCase());

        texto.value = '';

        // console.log('new list words-->', listOfWords);
        console.log('words-->', palabrasNuevas);

        let faltan = palabrasNuevas.filter(item => {
          if (listOfWords.includes(item) === false) {
            return item;
          }
        });
        faltan.map(item => {
          listOfWords.push(item)
        })
        // console.log(listOfWords, faltan)

        window.sessionStorage.setItem('palabras', JSON.stringify(listOfWords));
        window.sessionStorage.setItem('reload', true);
        window.location.reload();

      } else {
        texto.value = '';
      }
    });
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

    // console.log('RELOAD----->');

    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    let canvAs = document.getElementById('canvas');

    let inicioVida = 10;
    let words  = JSON.parse(window.sessionStorage.getItem('palabras'));
    // console.log(words);

    if (words !== null) {
      let faltantes = words.filter(item => {
        if (listOfWords.includes(item) === false) {
          return item
        }
      });
      // console.log('---->>>>', faltantes)

      theGame(inicioVida, canvAs, faltantes);
      window.sessionStorage.removeItem('palabras')
    }
    theGame(inicioVida, canvAs);
  };
  //    ////    //  //    ////    //  //    ////    //
  //    ////    //  //    ////    //  //    ////    //


  btnNuevoJuego.addEventListener('click', () => {

    // console.log()
    // console.log(listOfWords)
    // console.log()
    let antiguas  = JSON.parse(window.sessionStorage.getItem('palabras'));
    console.log(antiguas)
    if (antiguas !== null) {
      window.sessionStorage.removeItem('palabras')
      window.sessionStorage.setItem('palabras', JSON.stringify(listOfWords));
    } else {
      window.sessionStorage.setItem('palabras', JSON.stringify(listOfWords));
    }

    window.sessionStorage.setItem('reload', true);

    window.location.reload();
  });


  btnStart.addEventListener('click', () => {
    screenInicio.style.display = 'none';
    screenWords.style.display = 'none';
    screenGame.style.display = 'flex';

    let can = document.getElementById('canvas');

    let inicioVida = 10;
    theGame(inicioVida, can);

  });


  nuevaPalabra.addEventListener('click', () => {
    manejoNuevaPalabra();
  });

  btnAddWord.addEventListener('click', () => {
    manejoNuevaPalabra();
  });

});
