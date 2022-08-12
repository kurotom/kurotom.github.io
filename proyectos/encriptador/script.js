document.addEventListener('DOMContentLoaded', () => {
  console.log('Documento Cargado!');

  const logicEncript = (texto, type, divResultMsg) => {
      // console.log(texto);
      let encriptWords = [];
      let decriptMesaje = [];

      const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

      splitText = texto.split(' ')
      splitText.forEach(word => {

        let wordText = "";

        if (type === "encrypt") {
          for (let i = 0; i < word.length; i++) {
            if (alfabeto.includes(word[i])) {
              if (word[i] === word[i].toLowerCase()) {
                if (word[i] === "a") {
                  wordText += "ai"
                }
                else if (word[i] === "e") {
                  wordText += "enter"
                }
                else if (word[i] === "i") {
                  wordText += "imes"
                }
                else if (word[i] === "o") {
                  wordText += "ober"
                }
                else if (word[i] === "u") {
                  wordText += "ufat"
                }
                else {
                  wordText += word[i]
                }
              } else {
                wordText += word[i]
              }
            } else {
              wordText += word[i]
            }
          }
          encriptWords.push(wordText)
        }
        else if (type === "decrypt") {
          const keysWords = {
            "ai": 'a',
            "enter": 'e',
            "imes": 'i',
            "ober": 'o',
            "ufat": 'u'
          }

          Object.keys(keysWords).forEach(key => {
            let r = new RegExp(key, 'g');
            x = word.replace(r, keysWords[key])
            if (x.length > 0) {
              word = x
            }
          })
        }
        decriptMesaje.push(word)
      })

    let failed = document.getElementById('failedContent');
    let divSuccess = document.getElementById('divSuccess');
    let msgSuccess = document.getElementById('msgSuccess');

    if (type === "encrypt") {
      console.log(encriptWords.join(' '))
      failed.style.display = 'none';
      divSuccess.style.display = 'flex';
      msgSuccess.innerText = encriptWords.join(' ');
      return encriptWords.join(' ')
    }
    if (type === "decrypt") {
      console.log(decriptMesaje.join(' '))
      failed.style.display = 'none';
      divSuccess.style.display = 'flex';
      msgSuccess.innerText = decriptMesaje.join(' ')
      return decriptMesaje.join(' ')
    }
  }

  let trash = document.getElementById('iconTrash');
  let textArea = document.getElementById('textAreaMensaje');
  let msgResult = document.getElementById('mensajeResult');
  let textoResultado = document.getElementById('msgSuccess');

  let btnEnc = document.getElementById('btnEncriptar');
  let btnDesc = document.getElementById('btnDesencriptar');
  let btnCopy = document.getElementById('copiar');

  btnEnc.addEventListener('click', () => {
    logicEncript(textArea.value, 'encrypt', msgResult)

  });
  btnDesc.addEventListener('click', () => {
    logicEncript(textArea.value, 'decrypt', msgResult)
  });

  btnCopy.addEventListener('click', (evento) => {
    navigator.clipboard.writeText(textoResultado.innerText).then(
      () => {
        console.log('texto copiado');

        btnCopy.innerText = 'Copiado!';
        btnCopy.style.cssText = `
          font-weight: bold;
          font-size: 25px;
          text-shadow: 0px 1px 2px orange;
        `;
        setTimeout(() => {
          btnCopy.innerText = 'Copiar';
          btnCopy.style.cssText = `
            border: 1px solid #0A3871;
            color: #0A3871;
            font-size: 14px
            line-height: 150%;
            font-weight: 400;
          `;
        }, 2000);

      },
    );
  });

  trash.addEventListener('click', (evento) => {
    textArea.value = '';
  });

// End Event Listener --- DOMContentLoaded
});
