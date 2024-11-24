
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

    const preHeat = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const preHeat = true;

                if (preHeat) {
                    resolve('preheated');
                } else {
                    reject('failed')
                }
            }, 1000)
        })
    };

    const sugar = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const sugar = true;

                if (sugar) {
                    resolve('Sugar!');
                } else {
                    reject('sugar failed')
                }
            }, 1000)
        })
    };

    const chocolate = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const chocolate = false;

                if (chocolate) {
                    resolve('Chocolate!');
                } else {
                    reject('chocolate failed')
                }
            }, 1000)
        })
    };

    const cacao = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const cacao = true;

                if (cacao) {
                    resolve('Cacao!');
                } else {
                    reject('cacao failed')
                }
            }, 1000)
        })
    };

    const bake = () => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const bake = true;

                if (bake) {
                    resolve('Baked!');
                } else {
                    reject('baking failed')
                }
            }, 1000)
        })
    };

const bakeThem = async () => {
try {
const taskOne = await preHeat();
console.log(taskOne);
const taskTwo = await sugar();
console.log(taskTwo);
const taskThree = await chocolate();
console.log(taskThree);
const taskFour = await cacao();
console.log(taskFour);
const taskFive = await bake();
console.log(taskFive);
}

catch(error) {
console.log(error);
}}
bakeThem();












    //>  ████████████████████████████████████  GENERAL PROGRAM



    // console.log(document.documentElement);

    //< ████████████████████████████████████  MISC

})

