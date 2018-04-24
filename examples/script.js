(function() {
    'use strict'

    new Vue({
        //this targets the div id app
        el: '#app',
        data: {
            boxes: {
                flexBoxOne: {
                    grow: 0,
                    shrink: 0,
                    basis: 'auto',
                },
                flexBoxTwo: {
                    grow: 0,
                    shrink: 0,
                    basis: 'auto',
                },
                flexBoxThree: {
                    grow: 0,
                    shrink: 0,
                    basis: 'auto',
                },
                flexBoxFour: {
                    grow: 0,
                    shrink: 0,
                    basis: 'auto',
                }
            }
        },
        methods: {
            reset: function () {
                for (let box in this.boxes) {
                    this.boxes[box].grow = 0;
                    this.boxes[box].shrink = 0;
                    this.boxes[box].basis = 'auto';
                }
            }
        }
    })

})()
