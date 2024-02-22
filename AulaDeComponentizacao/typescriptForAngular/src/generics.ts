/**
 * Generics
 */
                //  <T> vai tornar dinâmico, mas com a possbilidade de modelar types
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}
/*
    truncamos o data type Array que desejamos alimentar
                function<data[]> ( [prop1],[prop2], ...)
*/
const numArray = concatArray<number[]> ([1,5],[3]);
const strArray = concatArray<string[]> (["Guiov7","Goku"],["Vegeta"]);

/* 
numArray.push("saitama"); // quebra da conveção
numArray.push(25);

de primeiro momento havia uma quebra de convenção, por aceitar any types
agora somente aceita conforme definimos na função acima.
*/

console.log(numArray);
console.log(strArray);