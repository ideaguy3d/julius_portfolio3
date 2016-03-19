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
