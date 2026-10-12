package TP_ZOO;

public class Main {
    public static void main(String[] args) {
        Mammifere lion = new Mammifere("Simba", 5, 190.0, 15);
        Reptile croco = new Reptile("Croc", 10, 80.0, 40);
        Mammifere tigre = new Mammifere("Tigrou", 3, -50.0, 16); 

        Zoo monZoo = new Zoo("Safari Parc");
        monZoo.ajouterAnimal(lion);
        monZoo.ajouterAnimal(croco);
        monZoo.ajouterAnimal(tigre);
        
        System.out.println("--- AVANT LE REPAS ---");
        monZoo.afficherTous();
        
        lion.manger(5);
        croco.manger(10);

        System.out.println("\n--- APRES LE REPAS ET TRI PAR POIDS ---");
        monZoo.trierParPoids();
        monZoo.afficherTous();
    }
}