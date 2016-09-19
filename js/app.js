window.onload = function () {
	var boton  = document.getElementById("calcular");
    var cadena = "";
	boton.addEventListener("click", function() {
        /*
        textArea = document.getElementById("textA").value;
        var nodo = document.createTextNode(textArea);
        var crearP = document.createElement("p");
        crearP.appendChild(nodo);
         var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(crearP, list.childNodes[0]);
        */
        var textArea = document.getElementById("textA").value;
        var crearDiv = document.createElement("p");
        crearDiv.innerHTML = textArea;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(crearDiv,contenedor.childNodes[0]);
        document.getElementById("textA").value = "";
    });
}

