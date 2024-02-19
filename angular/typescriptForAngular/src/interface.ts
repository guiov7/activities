// interfaces (type x interface)

type robot = { // tipar objetos
    readonly id: number | string;
    name: string;
};

interface robot2 { // tipar classes 
    readonly id: number | string;
    name: string;
    sayHello(): string; // INTERFACE METHODS
}

const bot1: robot = { 
    id: "1", 
    name:"Android" 
};

const bot2: robot2 = { 
    id: "018",
    name:"Android 18",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
};
// console.log(bot1.id = "017")       // Readonly impede edição 
console.log(bot1.name = "Android 17")  
console.log(bot1) // senão, permite editar
console.log(bot2)

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `hello, I'm ${this.name}.\n Nice to meet you human!`;
    }
}

const p =  new Pessoa(1, "gutsman");
// console.log(bot2.sayHello());
console.log(p);
console.log(p.sayHello());