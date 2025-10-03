function additionner()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}

function soustraire()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}

function diviser()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}

function multiplier()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;
}

function parite() 
{
    var a = document.getElementById("t1").value;
    var b = Number(a) % 2;
    if (b >= 1){
        document.getElementById("pair").value = "Impair";
    }else{
        document.getElementById("pair").value = "Pair";
    }
}

function permuter()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    document.getElementById("resultat").value = b;
    document.getElementById("pair").value = a;
}

function resetInputs() {
  document.querySelectorAll("input").forEach(input => input.value = "");
}