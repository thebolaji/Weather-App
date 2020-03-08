const API_KEY = '27fe3735b8e1138ef4042c1d5491806b';
const axios = require('axios');
// const Weather = require('../Model/Weather');

exports.Homepage = (req, res, next) => {
    res.render('index');
}

exports.getWeather = (req, res) => {
    const city = req.body.city

    // Making Request to this URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},ng&appid=${API_KEY}&units=metric`

    if (city == "") {
        console.log("Please enter the name of a city");
        res.render('index', { notFound: `Please enter the name of a city` })
    } else {
        // Make a request for a user with a given City
        axios.get(url)
            .then(function(response) {
                // handle success
                // res.cookie('city', req.body.city)
                res.render('index', { weather: `It is Currently ${response.data.main.temp}°C in ${response.data.name}` })
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
    }

}

exports.Users = function(req, res, next) {
    res.send('respond with a resource');
}