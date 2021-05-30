alert("Aqui calcularas la fuerza de un objeto con forme la gravedad y su masa = (w)N");

function resetear(){
    document.getElementById('resetear').reset();
}

var calcularW = function (n1,n2){
    var masa = Number(document.getElementById("masa").value);
    var gravedad = Number(document.getElementById("gravedad").value);
    var w = masa * gravedad;
    return w;
}