/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let valores = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
let simbolos = [
  {
    icono: "♦",
    clase: "diamond",
    color: "red"
  },
  {
    icono: "♥",
    clase: "heart",
    color: "red"
  },
  {
    icono: "♠",
    clase: "spade",
    color: "black"
  },
  {
    icono: "♣",
    clase: "club",
    color: "black"
  }
];

// 1.- Generamos un valor random para la carta
function generarValor() {
  let indice = Math.floor(Math.random() * 12);
  return valores[indice];
}

// 2.- Generamos símbolo aleatorio y devolvemos tanto el símbolo como la clase:
function generarSimbolo() {
  let indice = Math.floor(Math.random() * 4);
  document.getElementById("head").classList.add(simbolos[indice].color);
  document.getElementById("footer").classList.add(simbolos[indice].color);
  return simbolos[indice].icono;
}

// 3.-Insertar los valores del objeto al HTML
function renderCard() {
  document.getElementById("head").innerHTML = generarSimbolo();
  document.getElementById("center").innerHTML = generarValor();
  document.getElementById("footer").innerHTML = document.getElementById(
    "head"
  ).innerHTML;
}
// 4.- Creamos botón para generar una carta aleatoriamente

//Al cargar la página generamos una carta y vamos generando una nueva cada 10s

window.onload = renderCard();
window.onload = setInterval(function() {
  renderCard();
}, 10000);
