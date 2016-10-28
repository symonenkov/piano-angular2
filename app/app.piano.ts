import { Component } from '@angular/core';
import * as Tone from 'Tone';
import * as QwertyHancock from 'QwertyHancock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'piano',
  template: '<div id="Keyboard"></div><router-outlet></router-outlet>'
})

export class Piano {
  constructor() {
    var synth = new Tone.Synth({
      "oscillator": {
        "type": "square"
      },
      "envelope": {
        "attack": 0.01,
        "decay": 0.2,
        "sustain": 0.2,
        "release": 0.2,
      }
    }).toMaster();
    console.log(synth);
    setTimeout(function () {
      var keyboard = new QwertyHancock({
        id: "Keyboard",
        width: 800,
        height: 150,
        startNote: "C4",
        whiteKeyColour: "white",
        blackKeyColour: "black",
        hoverColour: "#1EDF3E",
        activeColour: "#ED33CF"
      });
      keyboard.keyDown = function (note, frequency) {
        synth.triggerAttack(frequency);
      };
      keyboard.keyUp = function () {
        synth.triggerRelease();
      };
    }, 100)
  }
}
