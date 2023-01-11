const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const lancamento = "1  jun 2023"


function contDown(){
    const dataLan = new Date(lancamento)
    const hoje =  new Date()

    const segTotal = (dataLan - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 /24); 
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMin = Math.floor(segTotal / 60) % 60;
    const finalSeg = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formadoTempo(finalHoras)
    min.innerHTML = formadoTempo(finalMin)
    seg.innerHTML = formadoTempo(finalSeg)
}

function formadoTempo(tempo){
    return tempo <10 ? `0${tempo}`: tempo;
}

contDown();
setInterval(contDown,1000)