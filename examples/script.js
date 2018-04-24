(function() {
    'use strict'

    new Vue({
        //this targets the div id app
        el: '#app',
        data: {
            boxes: {
                flexBoxOne: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto'
                },
                flexBoxTwo: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto'
                },
                flexBoxThree: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto'
                },
                flexBoxFour: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto'
                }
            },
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            containerWidth: '100%',
            containerHeight: 'auto',
        },
        methods: {
            resetFlexItems: function () {
                for (let box in this.boxes) {
                    this.boxes[box].grow = 0;
                    this.boxes[box].shrink = 1;
                    this.boxes[box].basis = 'auto';
                    this.boxes[box].alignSelf = 'auto';
                }
            },

            resetFlexContainer: function () {
                this.containerWidth = '100%';
                this.containerHeight = 'auto';
            },

            resetFlexContainerFlexProperties: function () {
                this.justifyContent = 'flex-start';
                this.alignItems = 'stretch';
                this.flexDirection = 'row';
                this.flexWrap = 'nowrap';
            },

            resetAll: function () {
                this.resetFlexItems();
                this.resetFlexContainer();
                this.resetFlexContainerFlexProperties();
            }
        }
    })

})()
