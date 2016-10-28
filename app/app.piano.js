"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Tone = require('Tone');
var QwertyHancock = require('QwertyHancock');
var Piano = (function () {
    function Piano() {
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
        }, 100);
    }
    Piano = __decorate([
        core_1.Component({
            selector: 'piano',
            template: '<div id="Keyboard"></div><router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], Piano);
    return Piano;
}());
exports.Piano = Piano;
//# sourceMappingURL=app.piano.js.map