new Vue({
    el : "#exercise",
    data: {
        myName: "María",
        myAge: 23,
        image: "https://a.thumbs.redditmedia.com/HaXDOt6VCSDYHNnBG2kmo7xArWVWkl8_QgppfGAQP-0.png",
        
    },
    methods: {
        multiplyAge: function(age) {
            return age*3
        },
        randomizer: function(number) {
            return Math.random()
        }
    }
})