function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=2; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function affichagetab2(){
    var X=prompt("Combien de ligne ?")
    document.write("<table border=2px width=30%");
    for(let i=0; i<=X; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}

function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
    {document.write("Bienvenue : " + login);}
    else {alert("Accès refusé")}
}

function seconnecter2()
{window.location.href="identification.html"}

function login(){
    var login = document.getElementById("t1").value;
    var mdp= document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin")
    {window.location.href="yes.html"}
    else{window.location.href="non.html"}
}

function seconnecter3() {
    var i = 0;
    do {
        var id = prompt("Entrez votre nom d'utilisateur");
        var mdp = prompt("Entrez votre mot de passe");
        if (id == "admin" && mdp == "admin") {
            document.write("bienvenue " + id);
            break;
        } else {
            alert("Accès refusé");
        }
        i = i + 1;
    } while (i < 3);

    if (i == 3) {
        alert("Delai dépassé");
    }
}

function cdc(){
    var chaine = prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient " + chaine.length + " caractéres" + "<br>");
    document.write("La première lettre est " + chaine.substr(0,1) + "<br>");

}