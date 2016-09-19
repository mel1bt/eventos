
window.onload = function () {
	var boton  = document.getElementById("calcular");
    var cadena = "";
    
    boton.disabled=true;   
	boton.addEventListener("click", function() {
        /*
        textArea = document.getElementById("textA").value;
        var nodo = document.createTextNode(textArea);
        var crearP = document.createElement("p");
        crearP.appendChild(nodo);
         var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(crearP, list.childNodes[0]);
        
        document.getElementById("two").classList.add("borde-azul");
        */
        var textArea = document.getElementById("textA").value;
        var crearDiv = document.createElement("p");
        crearDiv.innerHTML = textArea;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(crearDiv,contenedor.childNodes[0]);
        document.getElementById("textA").value = "";  
        boton.disabled=true;  
    });
    
    var textAr =document.getElementById("textA");
    textAr.addEventListener("keydown", function(){ 
        boton.disabled=false; 
        var numLim = 140;
        var numLong = document.getElementById("textA").value.length;
        document.getElementById("contar").innerHTML = numLim - numLong; 
        if (numLong >= numLim){
            document.getElementById("contar").classList.add("colorLim");
            boton.disabled=true;
        }   
    });                             
}

 