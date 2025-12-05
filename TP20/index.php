<?php
// Page d'accueil avec menu simple
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Accueil - Gestion des Livres</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .menu {
            background-color: #333;
            padding: 10px;
            text-align: center;
        }
        .menu a {
            color: white;
            padding: 12px 20px;
            text-decoration: none;
            display: inline-block;
        }
        .menu a:hover {
            background-color: #555;
        }
        .content {
            text-align: center;
            margin-top: 40px;
        }
    </style>
</head>
<body>

<div class="menu">
    <a href="index.php">Accueil</a>
    <a href="affiche_livres.php">Liste des Livres</a>
</div>

<div class="content">
    <h1>Bienvenue dans la Bibliothèque</h1>
    <p>Utilisez le menu pour naviguer.</p>
</div>

</body>
</html>