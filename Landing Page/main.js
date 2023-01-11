
// function crieteBorder(id){
//     element = document.querySelector('#'+id);
//     element.style.border = "5px solid red";
// }

// serve para quando colocar o mause em cima do objeto realiza algo 
function highLightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight");
}

function checkKeyCode(){
    document.addEventListener('keydown',(event)=> {
        var nome = event.key;
        var code = event.code;

        alert(`Tecla apertada ${nome}\r\n key code: ${code}`);
    },false);
}

function addKeybordEventListen(){
    document.addEventListener('keydown',(event)=>{
        
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;

        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }
    })
}

const ingresso = [];

function selectCard(selector){
    var elem =  document.querySelector(selector);
    elem.classList.toggle("card-secected");
    if(ingresso.includes(selector)) ingresso.pop(selector);
    else ingresso.push(selector);
}

function mostrarCords(){
    if(ingresso.length>0) alert("Ingressos Selecionados: "+ ingresso);
}

// checkKeyCode();
addKeybordEventListen();