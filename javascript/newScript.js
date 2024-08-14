let i=0;
let prevLight = null;

class light {
    constructor(ID, color, shadowColor) {
        this.ID = ID;
        this.color = color;
        this.shadowColor = shadowColor;
    }
    lightOn() {
        let element = document.getElementById(this.ID);
        element.style.backgroundColor = this.color;
        element.style.boxShadow = `4px -8px ${this.shadowColor}`;
    }
    lightOff() {
        let element = document.getElementById(this.ID);
        element.style.backgroundColor = "#494650";
        element.style.boxShadow = "4px -8px #38363d";
    }
}

const topLight = new light("circle1","red","#BE0000");
const midLight = new light("circle2","yellow","#BEBE00");
const downLight = new light("circle3","lime","#00BE00");
const lightList = [topLight, midLight, downLight, midLight];

const changeLightsColor = () => {
    lightList[i].lightOn();
    if(prevLight!=null){
        prevLight.lightOff();
    }
    prevLight = lightList[i];
    i = (i<3) ? i+1 : 0;
}

//START/STOP
let start = true;

const changeButton = () => {
    let buttonElement = document.getElementById("starterButton");
    buttonElement.innerHTML = (buttonElement.innerHTML == "INICIAR") ? "APAGAR" : "INICIAR";
    start = (start) ? false : true;
}

const starter = () => {
    if(start){
        loop = setInterval(changeLightsColor, 2000);
        changeLightsColor();
    } else {
        prevLight.lightOff();
        clearInterval(loop);
        i=0;
        prevLight = null;
    }   
    changeButton();
}