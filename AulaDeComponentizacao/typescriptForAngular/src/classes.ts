/**
 * Classes
 */

/*  DATA MODIFIERS
    são os modificadores de acesso à props dos nossos objects, sendo:
    - public 
        (acesso à todas as nossa classes)
    - private 
        (exclusiva das classes herdeiras)
    - protected 
        (somente pertecente a própria classe, nem herdeiros nem externos)

    Atribuímos critério de acesso informando o DATA MODIFIER em frente à 
    dados ou métodos que definirmos
*/
// super class \/
class Character {
    protected name?: string; // '?' torna o dado opcional
    streght: number;
    skill: number;

    constructor( name: string, streght: number, skill: number ) {
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    attack(): void {
        return console.log(`Attack with ${this.streght} points`);
    }

    getName():string {
        return `${this.name}`;
    }
}

// subClass \/
class Magician extends Character {

    magicPoints: number;

    constructor( name: string, streght: number, skill: number, magicPoints: number ) {
        super(name, streght, skill);
        this.magicPoints = magicPoints;

    }
}

var p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Ryze", 9, 30, 100)
console.log(p1)
console.log(p2)
p1.skill = 12;
console.log(`After redefine for Character changing your skill points \nCharacter { name: ${p1.getName()}, streght: ${p1.streght}, skill: ${p1.skill} }`)

// const p1 = new Character(10,98);
// p1.attack()

