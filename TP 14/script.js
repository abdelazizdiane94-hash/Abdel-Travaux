function calculer()
{
    var qte1 = document.getElementById("qte1").value;
    var prix1 = document.getElementById("prix1").value;
    var somme1 = Number(qte1) * Number(prix1);
    document.getElementById("res1").value = somme1;

    var qte2 = document.getElementById("qte2").value;
    var prix2 = document.getElementById("prix2").value;
    var somme2 = Number(qte2) * Number(prix2);
    document.getElementById("res2").value = somme2;

    var qte3 = document.getElementById("qte3").value;
    var prix3 = document.getElementById("prix3").value;
    var somme3 = Number(qte3) * Number(prix3);
    document.getElementById("res3").value = somme3;

    var sommetotal = Number(somme1) + Number(somme2) + Number(somme3);
    document.getElementById("restotal").value = sommetotal;
}

function imprimer() {
  window.print();
}

function reinitialiser(){
    document.getElementById("art1").value = "";
    document.getElementById("qte1").value = "";
    document.getElementById("prix1").value = "";
    document.getElementById("res1").value = "";
    document.getElementById("art2").value = "";
    document.getElementById("qte2").value = "";
    document.getElementById("prix2").value = "";
    document.getElementById("res2").value = "";
    document.getElementById("art3").value = "";
    document.getElementById("qte3").value = "";
    document.getElementById("prix3").value = "";
    document.getElementById("res3").value = "";
    document.getElementById("restotal").value = "";
}