const Weather = function(data) {
    this.data = data
    this.error = []
}

Weather.prototype.validateInput = function() {
    if (this.data == "") {
        this.error.push("Please enter the name of a city")
    }
}

module.exports = Weather;