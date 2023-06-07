/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const palos = ["♦", "♥", "♠", "♣"];

  let figuras = palos[randomNum(palos)];

  function randomNum(array) {
    return Math.floor(Math.random() * array.length);
  }

  document.querySelector("#number").innerHTML = numeros[randomNum(numeros)];
  document.querySelectorAll("#palo")[0].innerHTML = figuras;
  document.querySelectorAll("#palo")[1].innerHTML = figuras;
};
