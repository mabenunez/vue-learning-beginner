new Vue({
    el: "#app",
    data: {
        title: "Hello Vue, this is the title",
        message: "Whatever's on the input",
        link: "http://google.com"
    },
    methods: {
        changeMessage: function(e) {
            this.message = event.target.value;
        },
        sayHello: function() {
            return "Hello"
        },
        changeTitle: function() {
            this.title = "Title if there was re-render"
        }
    }
})