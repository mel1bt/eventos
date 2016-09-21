window.onload = function () {
	var boton  = document.getElementById("calcular");
    var textAr = document.getElementById("textA");
    var contenedor = document.getElementById("contenedor");
    var textContar = document.getElementById("contar");
    boton.disabled=true;   
	boton.addEventListener("click", function() {
        var textArea = textAr.value;
        var crearDiv = document.createElement("div");
        crearDiv.classList.add("comentario");
        crearDiv.innerHTML = textArea;
        contenedor.insertBefore(crearDiv,contenedor.childNodes[0]);
        document.getElementById("contar").innerHTML=140;
        boton.disabled=true;  
        textAr.value="";
        var hora = document.createTextNode(horaNow());
        var crearHr = document.createElement("p");
        crearHr.classList.add("horaActual");
        crearHr.appendChild(hora);
        crearDiv.insertBefore(crearHr,crearDiv.childNodes[1]);
    });
    textAr.addEventListener("keydown", function(){ 
        var contador = document.getElementById("contar");
        var numLim = 140;
        var numLong = textAr.value.length;
        contador.innerHTML = numLim - numLong; 
        var textArSolo = textAr.value.replace(/\s/g,"");//para reemplazar los espacios en blanco
        if( numLong == 0 || numLong >= numLim || textArSolo == 0){// condicional para desactivar el boton
            boton.disabled=true;
        }else{
            boton.disabled=false;
        } 
        if (numLong <= 120){ // condicional para los colores
            contador.style.color = "black";
        }else if (numLong <= 130){
            contador.style.color = "green";
        }else if (numLong >= 140){
            contador.style.color =  "red";
        }else{
            contador.style.color = "blue";
        }
    });  
    textAr.addEventListener("keyup", function(){
        var el = this;
        el.style.cssText = 'padding:0; height:' + el.scrollHeight + 'px';
     });
    function horaNow(){
        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        if (hr<10){
            hr = "0" +  hr;
        }
        if (min<10){
            min = "0" +  min;
        }
        return (hr + ":" + min);
    } 
}


 