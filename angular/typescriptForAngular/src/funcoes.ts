function addNumber( x: number, y: number ): number { 
//                  recebe dois numbers   : só retorna number
    return x +y;
}
let soma: number = addNumber(4,7);

function addToHello(name: string): string { 
//                  recebe duas strings   : só retorna string
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string { // híbrido, number ou string
    return phone;
}

// async (funções assíncronas)
async function getDatabase(id: number): Promise<string> {
//                                    : só retornam Promises
    return "João";
}



// console.log(soma);
// console.log(addToHello("Guiov7"));
// console.log(callToPhone(11912345478))
console.log(getDatabase);