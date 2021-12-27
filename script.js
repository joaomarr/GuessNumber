'use strict';

let adivinhe = {
  pontuação: 20,
  numero: '',
  recorde: '',
  texto: 'Comece a adivinhar...',
};

const randomNumber = (num) => {
  const number = Math.trunc(Math.random() * num) + 1;
  adivinhe.numero = number;
};

randomNumber(20);
console.log(Number(adivinhe.numero));

const check = () => {
  let value = document.querySelector('.guess').value;
  if (value > 20 || !value) {
    adivinhe.texto = 'Digite um número entre 1 a 20!';
    setAdivinhe();
  } else if (value > Number(adivinhe.numero)) {
    if (adivinhe.pontuação > 1) {
      adivinhe.pontuação--;
      document.querySelector('body').style.backgroundColor = '#222';
      adivinhe.texto = 'Menos!';
      setAdivinhe();
    } else {
      adivinhe.pontuação = 0;
      adivinhe.texto = 'Você perdeu o jogo!';
      document.querySelector('body').style.backgroundColor = 'red';
      setAdivinhe();
    }
  } else if (value < Number(adivinhe.numero)) {
    if (adivinhe.pontuação > 1) {
      adivinhe.pontuação--;
      document.querySelector('body').style.backgroundColor = '#222';
      adivinhe.texto = 'Mais!';
      setAdivinhe();
    } else {
      adivinhe.pontuação = 0;
      adivinhe.texto = 'Você perdeu o jogo!';
      document.querySelector('body').style.backgroundColor = 'red';
      setAdivinhe();
    }
  } else {
    adivinhe.texto = 'Acertou !!';
    document.querySelector('.number').textContent = adivinhe.numero;
    document.querySelector('body').style.backgroundColor = 'green';
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
  document.querySelector('body').style.backgroundColor = '#222';
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
