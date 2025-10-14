function calcul_moyenne() {
    var n1 = prompt("Donne la première note :");
    var n2 = prompt("Donne la deuxième note :");
    var n3 = prompt("Donne la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme / 3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
        
    }
    else if (moyenne < 12) {
        document.write("Admis – Passable" + "<br>");
    }
    else if (moyenne < 14) {
        document.write(" Admis – Bien" + "<br>");
    }
    
    else if (moyenne > 14) {
        document.write("Admis – Très bien" + "<br>");
    }

    document.write('<a id="menu" href="../index.html">Retour exercice</a>');
}

function temperature_celsius() {
    var temp = prompt("Donne la première température :");
    document.write("voici la température renseigné : " + temp + " °C" + "<br>");

    if (temp < 10) {
        document.write("Froid");
        
    }
    else if (temp < 25) {
        document.write("Normal");
    }
    else {
        document.write("Chaud");
    }

        document.write('<a id="menu" href="../index.html">Retour exercice</a>');
}


function comparaison_nombre() {
    var num1 = prompt("Donne la première somme :");
    var num2 = prompt("Donne la deuxième somme :");

    document.write("Voici les deux nombre rensiegnez : " + num1 + " et " + num2 + "<br>");
    
    if(Number(num1) < Number(num2)){
        document.write(num2 + " est plus grand que " + num1 + "<br>");
    }
    else{
        document.write(num1 + " est plus grand que " + num2 + "<br>");
    }

    document.write('<a id="menu" href="../index.html">Retour exercice</a>');
}