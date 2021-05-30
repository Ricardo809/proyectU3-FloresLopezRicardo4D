alert("Aqui realizaras una funcion en espesifico cuando la variable (x) > tienda aser un numero (n)");

function resetear(){
    document.getElementById('resetear').reset();
}

var resolver = function (n1){
    var numeroX = Number(document.getElementById("numeroX").value);
    var respuesta = (9 * numeroX)+(numeroX * numeroX);
    return respuesta;
}