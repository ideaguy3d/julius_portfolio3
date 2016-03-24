/**
 * Created by Julius Hernandez on 1/5/2016.
 */
"use strict";
var seqElement = document.getElementById('sequence1');

var options = {
  keyNavigation: true,
  fadeStepWhenSkipped: true,
  animateCanvas: true,
  animateCanvasDuration: 500,
  startingStepAnimatesIn: true,
  autoPlay: true,
  autoPlayInterval: 4000
};

var myseq = sequence(seqElement, options);

console.log("jsequence.js says hello world !!1");


var foo = {
  "records": [
    {"CustomerName": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany"},
    {"CustomerName": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico"},
    {"CustomerName": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico"},
    {"CustomerName": "Around the Horn", "City": "London", "Country": "UK"},
    {"CustomerName": "B's Beverages", "City": "London", "Country": "UK"},
    {"CustomerName": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden"},
    {"CustomerName": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany"},
    {"CustomerName": "Blondel père et fils", "City": "Strasbourg", "Country": "France"},
    {"CustomerName": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain"},
    {"CustomerName": "Bon app'", "City": "Marseille", "Country": "France"},
    {"CustomerName": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada"},
    {"CustomerName": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina"},
    {"CustomerName": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico"},
    {"CustomerName": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland"},
    {"CustomerName": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil"}
  ]
};
