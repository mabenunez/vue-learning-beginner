new Vue({
    el: "#app",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increaseCounter: function(steps, e) {
            this.counter += steps;
        },
        coordinates: function(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        dead: function(e) {
            e.stopPropagation();
        },
        alertMe: function() {
            alert("blah");
        }
    }
})

