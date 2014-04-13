/* global Raphael */

define(function(require, exports, module) {
    "use strict";

    var DrawingModule = require("drawing_module.js");

    var moods = ['Rubbish', 'Not Good', 'OK', 'Smily', 'Crazy'];
    var colors = ['#cc0000', '#a97e22', '#9f9136', '#7c9a2d', '#3a9a2d'];

    var LEFT = 30;
    var BOTTOM = 50;
    var RADIUS = 20;

    var RatingWidget = module.exports = function RatingWidget(domElement){
        this._mood = 1;
        this._paper = new Raphael(domElement, 350, 100);
        this._drawingModule = new DrawingModule(this._paper);
        this.init();
    };

    RatingWidget.prototype.setMood = function (mood) {
        this._mood = mood;
    };

    RatingWidget.prototype.init = function () {
        this._paper.clear();

        this.circ = this._paper.circle(LEFT, BOTTOM, RADIUS).attr({fill: '#000'});
        this.mood_text = this._paper.text(LEFT, BOTTOM, 'My\nRate').attr({fill: '#fff'});

        var that = this;
        this.circ.node.onclick = function(){ that.show();};
        this.mood_text.node.onclick = function(){ that.show();};
    };

    RatingWidget.prototype.show = function () {

        this.init();
        for (var i = 0; i < this._mood; i += 1) {
            var color = colors[this._mood - 1];
            var start = {left: LEFT, bottom: BOTTOM};
            var end = {left: LEFT + 42 * (i + 1), bottom: BOTTOM};
            var delay = i * 50;
            this._drawingModule.drawAnimatedCircle(color, RADIUS, start, end, delay);
        }

        this._paper.text(LEFT, BOTTOM + 30, moods[this._mood - 1]).attr({fill: colors[this._mood - 1]});
    };

});

