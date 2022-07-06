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

function setWidth() {
  const ancho = document.getElementById("campoAncho");
  document.getElementById("card").style.width = ancho.value + "px";
  ancho.value = "";
}

function setHeight() {
  const alto = document.getElementById("campoAlto");
  document.getElementById("card").style.height = alto.value + "px";
  alto.value = "";
}

function generarValor() {
  let indice = Math.floor(Math.random() * 12);
  return valores[indice];
}

function generarSimbolo() {
  let indice = Math.floor(Math.random() * 4);

  document.getElementById("head").className = simbolos[indice].color;
  document.getElementById("footer").className = simbolos[indice].color;
  return simbolos[indice].icono;
}

function renderCard() {
  document.getElementById("head").innerHTML = generarSimbolo();
  document.getElementById("center").innerHTML = generarValor();
  document.getElementById("footer").innerHTML = document.getElementById(
    "head"
  ).innerHTML;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  renderCard();
});

window.onload = () => renderCard();
