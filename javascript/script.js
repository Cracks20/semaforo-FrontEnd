let elements = ["circle1","circle2","circle3", "circle2"];
let colors = ["red", "yellow", "lime", "yellow"];
let shadows = ["#BE0000","#BEBE00","#00BE00","#BEBE00"];

let i=0;
let prevLight = null;

const changeLightColor = () => {
    let element = document.getElementById(elements[i]);
    element.style.backgroundColor = colors[i];
    element.style.boxShadow = `4px -8px ${shadows[i]}`;
    lightOff(element);
}

const lightOff = (element) => {
    if(prevLight!=null){
        prevLight.style.backgroundColor = "#494650";
        prevLight.style.boxShadow = "4px -8px #38363d";
    }
    prevLight = element;
    count();
};

const count = () => {
    i = (i<3) ? i+1 : 0;
}

setInterval(changeLightColor, 2000);
changeLightColor();