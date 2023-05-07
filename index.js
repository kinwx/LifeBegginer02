function getValue(){
    var value = document.getElementById("name").value;
    document.getElementById("sub").innerHTML = "Bem-vindo, " + value + "!";
}

function removeValue(){
    document.getElementById("name").value = '';
    document.getElementById("sub").innerHTML = '';
}