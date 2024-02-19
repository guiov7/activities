/**
 * Variáveis
*/
//    utilizamos DECLARAÇÃO DE TIPOS para truncar dados (exigir padrão).

// TIPOS PRIMITIVOS: boolean , string, number {int, float}
let ligado: boolean = false;
let nome: string = "Guiov7";
let idade: number = 25;
let altura: number = 1.9;

// TIPOS ESPECIAIS: null, undefined
let nulo: null = null;
let indefinido: undefined =  undefined;

// TIPOS ABRANGENTES: any{true,false}, void {vazio}
let retornoVoid: void = void
function executaQuery():void {
    /* código que executa algo sem retornar conteúdo em si, 
        mas é um processo interno do sistema.
    */
} 

let retornAny: any = false // qualquer coisa sem conhecimento prévio

// TIPO Object {props}
// Ex de Objeto Imprevisível (não recomendado)
let produto: object = {
    name: "Guiov7",
    cidade: "Nárnia",
    idade: "25"
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};
let meuProduto:ProdutoLoja = {
    nome: "Caneta Azul",
    preco: 7.99,
    unidades: 50
};
console.log(meuProduto);

// Ex de Objeto T-Shaped (boa prática) - com previsibilidade