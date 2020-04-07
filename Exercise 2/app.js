new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert("You clicked")
            },
            updateValue: function(e) {
                this.value = e.target.value
            }
        }
    });