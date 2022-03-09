var numberConvert = 0;
var oneMeterEIF = 3.280;
var oneLitreEIG = 0.264;
var oneKilogramEIP = 2.204;

let meter=0, feet=0, litre=0, gallon=0, kilogram=0, pound=0;
display();

function conversion(){
    numberConvert = document.getElementById("inputNumber").value;
    feet = oneMeterEIF * numberConvert;
    meter = numberConvert/oneMeterEIF;  
    gallon = oneLitreEIG * numberConvert;
    litre = numberConvert/oneLitreEIG;
    pound = oneKilogramEIP * numberConvert;
    kilogram = numberConvert/oneKilogramEIP; 
    display();

} 

function display(){

    document.getElementById("dispMeter").innerText = numberConvert;
    document.getElementById("dispCovMeter").innerText = parseFloat(feet).toFixed(3);

    document.getElementById("dispFeet").innerText = numberConvert;
    document.getElementById("dispCovFeet").innerText = parseFloat(meter).toFixed(3);

    document.getElementById("dispLitre").innerText = numberConvert;
    document.getElementById("dispCovLitre").innerText = parseFloat(gallon).toFixed(3);

    document.getElementById("dispGallon").innerText = numberConvert;
    document.getElementById("dispCovGallon").innerText = parseFloat(litre).toFixed(3);

    document.getElementById("dispKilo").innerText = numberConvert;
    document.getElementById("dispCovkilo").innerText = parseFloat(pound).toFixed(3);

    document.getElementById("dispPound").innerText = numberConvert;
    document.getElementById("dispCovPound").innerText = parseFloat(kilogram).toFixed(3);

}