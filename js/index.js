
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN







    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }

    document.body.style.backgroundColor = getBrightRandomRGB();

    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 


    //>  ████████████████████████████████████  GENERAL PROGRAM

    function getWeather() {

        return new Promise(function (resolve, reject) {

            resolve('🌞');
        })
    }

    const promise = getWeather();
    promise.then(function (data) {

        console.log(data);

    });

    console.log(promise);

    //>  ████████████████████████████████████  GENERAL PROGRAM



    // console.log(document.documentElement);

    //< ████████████████████████████████████  MISC

})

