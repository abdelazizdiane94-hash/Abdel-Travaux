package TP_ZOO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Zoo {
    private String nomZoo;
    private List<Animal> lesAnimaux;

    public Zoo(String nomZoo) {
        this.nomZoo = nomZoo;
        this.lesAnimaux = new ArrayList<>();
    }

    public void ajouterAnimal(Animal a) {
        if (a != null && !lesAnimaux.contains(a)) {
            lesAnimaux.add(a);
        }
    }

    public void supprimerAnimal(Animal a) {
        lesAnimaux.remove(a);
    }

    public void afficherTous() {
        System.out.println("=== " + nomZoo + " ===");
        if (lesAnimaux.isEmpty()) {
            System.out.println("Le zoo est actuellement vide.");
        } else {
            for (Animal a : lesAnimaux) {
                a.afficher();
                System.out.println("---------------------------------");
            }
        }
    }

    public void trierParPoids() {
        Collections.sort(lesAnimaux);
    }
}