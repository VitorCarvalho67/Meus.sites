var b = document.getElementById("anotacoes");
var c = document.getElementById("anotado");

function a(){
    abrir.style.left = -500;
    abrir.style.opacity = 0;
    calculadora.style.left = 50 + "%";
    box.style.left= 20 + "px";
}

function anotar(){
    anotado.innerHTML = "<li>" + b.value + document.getElementById("anotado").innerHTML +  "<\li>";
    b.value = "";
}
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
}else{
    document.getElementById('resultado').innerHTML = "Nada..."
    }
}

   (() => {  
    class Box {  
     constructor() {  
      this.calculadora = document.querySelector(".calculadora");  
      this.handleMouseDown = this.handleMouseDown.bind(this);  
      this.handleMouseUp = this.handleMouseUp.bind(this);  
      this.handleMouseMove = this.handleMouseMove.bind(this);  
     }  
     handleMouseDown() {  
      this.calculadora.style.cursor = "move";  
      this.calculadora.addEventListener("mouseup", this.handleMouseUp);  
      document.body.addEventListener("mousemove", this.handleMouseMove);  
      document.body.addEventListener("mouseleave", this.handleMouseUp);  
     }  
     handleMouseUp() {  
      this.calculadora.style.cursor = "default";  
      document.body.removeEventListener("mousemove", this.handleMouseMove);  
      document.body.removeEventListener("mouseleave", this.handleMouseUp);  
     }  
     handleMouseMove(e) {  
      const boxRect = this.calculadora.getBoundingClientRect();  
      this.calculadora.style.top = `${boxRect.top + e.movementY}px`;  
      this.calculadora.style.left = `${boxRect.left + e.movementX}px`;  
     }  
     init() {  
      this.calculadora.addEventListener("mousedown", this.handleMouseDown);  
     }  
    }  
    const calculadora = new Box();  
    calculadora.init();  
   })();  
