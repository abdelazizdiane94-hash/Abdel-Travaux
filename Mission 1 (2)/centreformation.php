<?php
// 1. CONNEXION À LA BASE DE DONNÉES
$host = 'localhost';
$db   = 'centre_formation';
$user = 'root';
$pass = 'mysql'; // Vide par défaut sur Ampps Windows

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// 2. TRAITEMENT DU FORMULAIRE (AJOUT ÉTUDIANT)
$message = "";
if (isset($_POST['ajouter_etudiant'])) {
    $sql = "INSERT INTO etudiants (nom, prenom, date_naissance, email, telephone) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$_POST['nom'], $_POST['prenom'], $_POST['dn'], $_POST['email'], $_POST['tel']]);
    $message = "<p style='color:green;'>Étudiant ajouté avec succès !</p>";
}

// 3. RÉCUPÉRATION DE LA PAGE ACTUELLE
$page = isset($_GET['page']) ? $_GET['page'] : 'accueil';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Gestion Centre de Formation</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        nav { background: #333; padding: 10px; border-radius: 5px; }
        nav a { color: white; text-decoration: none; margin-right: 15px; padding: 5px 10px; }
        nav a:hover { background: #555; border-radius: 3px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f4f4f4; }
        .card { border: 1px solid #ccc; padding: 15px; margin-top: 20px; border-radius: 8px; background: #f9f9f9; }
        form input { margin-bottom: 10px; display: block; width: 300px; padding: 8px; }
    </style>
</head>
<body>

    <h1>Logiciel de Gestion - Centre de Formation</h1>

    <nav>
        <a href="?page=accueil">Accueil</a>
        <a href="?page=etudiants">Statistiques Étudiants</a>
        <a href="?page=formations">Statistiques Formations</a>
        <a href="?page=notes">Statistiques Notes</a>
        <a href="?page=formateurs">Statistiques Formateurs</a>
    </nav>

    <hr>

    <?php if ($page == 'accueil'): ?>
        <h2>Bienvenue</h2>
        <p>Utilisez le menu ci-dessus pour naviguer dans les statistiques du centre.</p>
        
        <div class="card">
            <h3>Ajouter un nouvel étudiant</h3>
            <?php echo $message; ?>
            <form method="POST">
                <input type="text" name="nom" placeholder="Nom" required>
                <input type="text" name="prenom" placeholder="Prénom" required>
                <input type="date" name="dn" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="text" name="tel" placeholder="Téléphone">
                <button type="submit" name="ajouter_etudiant">Enregistrer l'étudiant</button>
            </form>
        </div>

    <?php elseif ($page == 'etudiants'): ?>
        <h2>Statistiques Étudiants</h2>
        <?php
        $total = $pdo->query("SELECT COUNT(*) FROM etudiants")->fetchColumn();
        echo "<p><strong>Nombre total d'étudiants :</strong> $total</p>";
        ?>
        <h3>Étudiants par formation</h3>
        <table>
            <tr><th>Formation</th><th>Nombre d'étudiants</th></tr>
            <?php
            $res = $pdo->query("SELECT f.intitule, COUNT(i.id_etudiant) AS nb FROM inscriptions i JOIN formations f ON i.id_formation=f.id_formation GROUP BY f.intitule");
            while($row = $res->fetch()) echo "<tr><td>{$row['intitule']}</td><td>{$row['nb']}</td></tr>";
            ?>
        </table>

    <?php elseif ($page == 'formations'): ?>
        <h2>Statistiques Formations</h2>
        <?php
        $totalF = $pdo->query("SELECT COUNT(*) FROM formations")->fetchColumn();
        echo "<p><strong>Total formations :</strong> $totalF</p>";
        ?>
        <h3>Modules par formation</h3>
        <table>
            <tr><th>Formation</th><th>Nombre de modules</th></tr>
            <?php
            $res = $pdo->query("SELECT f.intitule, COUNT(m.id_module) AS nb FROM modules m JOIN formations f ON m.id_formation=f.id_formation GROUP BY f.intitule");
            while($row = $res->fetch()) echo "<tr><td>{$row['intitule']}</td><td>{$row['nb']}</td></tr>";
            ?>
        </table>

    <?php elseif ($page == 'notes'): ?>
        <h2>Statistiques Notes</h2>
        <?php
        $stats = $pdo->query("SELECT AVG(note) as moy, MAX(note) as max, MIN(note) as min FROM notes")->fetch();
        ?>
        <p>Moyenne générale : <strong><?php echo round($stats['moy'], 2); ?></strong></p>
        <p>Note Max : <strong><?php echo $stats['max']; ?></strong> | Note Min : <strong><?php echo $stats['min']; ?></strong></p>

    <?php elseif ($page == 'formateurs'): ?>
        <h2>Statistiques Formateurs</h2>
        <table>
            <tr><th>Nom</th><th>Prénom</th><th>Nombre de formations</th></tr>
            <?php
            $res = $pdo->query("SELECT f.nom, f.prenom, COUNT(fo.id_formation) AS nb FROM formateurs f LEFT JOIN formations fo ON f.id_formateur = fo.id_formateur GROUP BY f.id_formateur");
            while($row = $res->fetch()) echo "<tr><td>{$row['nom']}</td><td>{$row['prenom']}</td><td>{$row['nb']}</td></tr>";
            ?>
        </table>
        
        <h3>Statistique Bonus : Liste Étudiants & Formations</h3>
        <table>
            <tr><th>Étudiant</th><th>Formation inscrite</th></tr>
            <?php
            $res = $pdo->query("SELECT e.nom, e.prenom, f.intitule FROM etudiants e JOIN inscriptions i ON e.id_etudiant = i.id_etudiant JOIN formations f ON i.id_formation = f.id_formation");
            while($row = $res->fetch()) echo "<tr><td>{$row['nom']} {$row['prenom']}</td><td>{$row['intitule']}</td></tr>";
            ?>
        </table>
    <?php endif; ?>

</body>
</html>