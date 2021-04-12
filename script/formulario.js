

const v = (p) => {


    p.preload = function () {


    }
    p.setup = function () {
        p.createCanvas(350, 900);


    }
    p.draw = function () {
        p.background('#fae');


    }
}

var myp5 = new p5(v,'myContainer2');