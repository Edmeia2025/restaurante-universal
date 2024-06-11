const visor = document.getElementById("resultado");

function insert(num) {

    visor.innerHTML += num;

}

function clean(){

visor.innerHTML="";


}


function back(){
     let numerovisor=visor.textContent
    visor.innerHTML=numerovisor.substring(0,numerovisor.length-1)
}
function calcular(){
let numerovisor=visor.textContent
visor.innerText=eval(numerovisor);

}