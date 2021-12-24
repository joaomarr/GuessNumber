'use strict';

let adivinhe = {
  pontuação: 20,
  numero: '',
  recorde: '',
  texto: 'Comece a adivinhar...',
};

const randomNumber = (num) => {
  const number = Math.floor(Math.random() * num);
  adivinhe.numero = number;
};

randomNumber(21);
console.log(adivinhe.numero);

const check = () => {
  let value = document.querySelector('.guess').value;
  if (value > 20 || !value) {
    adivinhe.texto = 'Digite um número entre 1 a 20!';
    setAdivinhe();
  } else if (value > Number(adivinhe.numero)) {
    adivinhe.pontuação--;
    adivinhe.texto = 'Menos';
    setAdivinhe();
  } else if (value < Number(adivinhe.numero)) {
    adivinhe.pontuação--;
    adivinhe.texto = 'Mais';
    setAdivinhe();
  } else {
    adivinhe.texto = 'Acertou !!';
    document.querySelector('.number').textContent = adivinhe.numero;
    if (adivinhe.pontuação > adivinhe.recorde) {
      adivinhe.recorde = adivinhe.pontuação;
      document.querySelector('.highscore').textContent = adivinhe.recorde;
    }
    setAdivinhe();
  }
};

const setAdivinhe = () => {
  document.querySelector('.message').textContent = adivinhe.texto;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = adivinhe.pontuação;
};

const reset = () => {
  randomNumber(21);
  adivinhe.texto = 'Comece a adivinhar...';
  adivinhe.pontuação = 20;
  document.querySelector('.message').textContent = adivinhe.texto;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = adivinhe.pontuação;
  document.querySelector('.number').textContent = '?';
};

const enter = (event) => {
  if (event.keyCode === 13) {
    check();
  }
};

document.addEventListener('keypress', enter);
document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', reset);
