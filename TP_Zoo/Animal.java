package TP_ZOO;

public abstract class Animal implements Comparable<Animal> {
    private String nom;
    private int age;
    private double poids;

    public Animal(String nom, int age, double poids) {
        // Légère modif : on s'assure que le nom n'est pas vide et que l'âge est positif
        this.nom = (nom != null && !nom.isEmpty()) ? nom : "Inconnu";
        this.age = Math.max(0, age); 
        this.setPoids(poids); 
    }

    public String getNom() { return nom; }
    public int getAge() { return age; }
    public double getPoids() { return poids; }

    public void setPoids(double poids) {
        // Légère modif : syntaxe plus courte avec Math.max
        this.poids = Math.max(0, poids);
    }

    // Utilisation des standards Java : on définit d'abord toString()
    @Override
    public String toString() {
        return "Nom: " + nom + " | Age: " + age + " ans | Poids: " + String.format("%.1f", poids) + " kg";
    }

    public void afficher() {
        System.out.println(this.toString());
    }

    public void manger(double nourriture) {
        this.setPoids(this.poids + nourriture);
    }

    @Override
    public int compareTo(Animal autre) {
        return Double.compare(this.poids, autre.getPoids());
    }
}