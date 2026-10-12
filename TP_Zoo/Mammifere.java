package TP_ZOO;

public class Mammifere extends Animal {
    private int gestation;

    public Mammifere(String nom, int age, double poids, int gestation) {
        super(nom, age, poids);
        this.gestation = Math.max(0, gestation);
    }

    @Override
    public String toString() {
        return super.toString() + "\n   -> Spécificité: Temps de gestation de " + gestation + " semaines.";
    }

    @Override
    public void afficher() {
        System.out.println(this.toString());
    }
}