<?php
$conn = mysqli_connect("localhost", "root", "mysql", "reservation_car");
if (!$conn) { die("Erreur : " . mysqli_connect_error()); }

$sql = "SELECT * FROM clients WHERE prenom LIKE 'J%'";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Clients J</title></head>
<body>

<h2 style="text-align:center;">Clients dont le prénom commence par J</h2>

<table border="1" cellpadding="10" align="center">
<tr>
    <th>ID</th><th>Nom</th><th>Prénom</th><th>Email</th><th>Téléphone</th><th>Date inscription</th>
</tr>

<?php
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        echo "<tr><td>".$row['id_client']."</td>
        <td>".$row['nom']."</td>
        <td>".$row['prenom']."</td>
        <td>".$row['email']."</td>
        <td>".$row['telephone']."</td>
        <td>".$row['date_inscription']."</td></tr>";
    }
} else {
    echo "<tr><td colspan='6'>Aucun résultat</td></tr>";
}
mysqli_close($conn);
?>
</table>
</body>
</html>
