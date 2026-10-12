package TP_ZOO;

public class Reptile extends Animal {
    private int oeufs;

    public Reptile(String nom, int age, double poids, int oeufs) {
        super(nom, age, poids);
        this.oeufs = Math.max(0, oeufs);
    }

    @Override
    public String toString() {
        return super.toString() + "\n   -> Spécificité: Pond environ " + oeufs + " oeufs.";
    }

    @Override
    public void afficher() {
        System.out.println(this.toString());
    }

    @Override
    public void manger(double nourriture) {
        this.setPoids(this.getPoids() + (nourriture * 0.30));
    }
}