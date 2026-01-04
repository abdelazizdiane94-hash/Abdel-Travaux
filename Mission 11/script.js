window.addEventListener("DOMContentLoaded", () => {
    afficherDateFacture();
});

function afficherDateFacture() {
    const date = new Date();
    document.getElementById("dateFacture").textContent =
        date.toLocaleDateString("fr-FR");
}

function ajouterLigne() {
    const modeleLigne = document.getElementById("modeleLigne");
    const derniereLigne = document.getElementById("lastLigne");
    const nouvelleLigne = modeleLigne.cloneNode(true);

    nouvelleLigne.querySelector(".desc").value = "";
    nouvelleLigne.querySelector(".qte").value = 0;
    nouvelleLigne.querySelector(".prix").value = 0;
    nouvelleLigne.querySelector(".totalLigne").value = "0.00";

    const tbody = document
        .getElementById("table_colonnes")
        .querySelector("tbody");

    tbody.insertBefore(nouvelleLigne, derniereLigne);
}


function remplir() {
    const descriptions = [
        "Ordinateur portable",
        "Bureau professionnel",
        "Écran 17 pouces",
        "Clé USB 16 Go",
        "Souris sans fil",
        "Imprimante laser",
        "Caméra HD",
        "Écouteurs Bluetooth",
        "Disque dur externe"
    ];

    const champsPrix = document.getElementsByClassName("prix");
    const champsQte = document.getElementsByClassName("qte");
    const champsDesc = document.getElementsByClassName("desc");

    for (let i = 0; i < champsPrix.length; i++) {
        champsDesc[i].value =
            descriptions[Math.floor(Math.random() * descriptions.length)];
        champsQte[i].value = Math.floor(Math.random() * 10) + 1;
        champsPrix[i].value = Math.floor(Math.random() * 100) + 10;
    }

    calculate();
}


function calculate() {
    const champsPrix = document.getElementsByClassName("prix");
    const champsQte = document.getElementsByClassName("qte");
    const champsTotalLigne = document.getElementsByClassName("totalLigne");

    let sousTotal = 0;

    for (let i = 0; i < champsPrix.length; i++) {
        const quantite = parseFloat(champsQte[i].value) || 0;
        const prixUnitaire = parseFloat(champsPrix[i].value) || 0;

        const totalLigne = quantite * prixUnitaire;
        champsTotalLigne[i].value = totalLigne.toFixed(2);

        sousTotal += totalLigne;
    }

    document.getElementById("sousTotal").value = sousTotal.toFixed(2);

    appliquerTotaux(sousTotal);
}


function appliquerTotaux(sousTotal) {
    const remise = parseFloat(document.getElementById("remise").value) || 0;
    const tauxTVA = parseFloat(document.getElementById("tauxImposition").value) || 0;
    const frais = parseFloat(document.getElementById("fraisExpedition").value) || 0;

    const montantRemise = sousTotal * (remise / 100);
    const sousTotalApresRemise = sousTotal - montantRemise;

    document.getElementById("sousTotalRemise").value =
        sousTotalApresRemise.toFixed(2);

    const taxeTotale = sousTotalApresRemise * (tauxTVA / 100);
    document.getElementById("taxeTotale").value =
        taxeTotale.toFixed(2);

    const soldeFinal = sousTotalApresRemise + taxeTotale + frais;
    document.getElementById("solde").value =
        soldeFinal.toFixed(2);
}