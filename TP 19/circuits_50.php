<?php
$conn = mysqli_connect("localhost","root","mysql","reservation_car");

$sql="SELECT * FROM circuits WHERE prix > 50";
$result=mysqli_query($conn,$sql);
?>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Circuits > 50€</title></head>
<body>

<h2 style="text-align:center;">Circuits dont le prix dépasse 50€</h2>

<table border="1" cellpadding="10" align="center">
<tr>
    <th>ID Circuit</th><th>Nom</th><th>Destination</th><th>Prix (€)</th>
</tr>
<?php
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        echo "<tr>
            <td>".$row['id_circuit']."</td>
            <td>".$row['nom']."</td>
            <td>".$row['destination']."</td>
            <td>".$row['prix']."</td>
        </tr>";
    }
} else{
    echo "<tr><td colspan='4'>Aucun circuit trouvé.</td></tr>";
}
?>
</table>
</body>
</html>
