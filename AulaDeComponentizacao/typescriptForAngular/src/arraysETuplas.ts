/**
 * arrays
 */
// modos de declarar
let dados: string[] = ["Felipe", "Ana", "Adriana"]; // curto
let dados2: Array<string> = ["Felipe", "Ana", "Adriana"]; // extenso

let infos: (string | number)[] = ["UmNomeString", 322]; // aceitar + de um type

/**
 * tuplas
 */
// são conjuntos de dados com posicionamento pré-definido, cada coisa em seu devido lugar 
let boleto:[string, number, number] = ["agua conta", 199.90, 3234342]; // se faltar uma posição, aponta erro

/**
 * Array methods JS

    length() {
        retorna o tamanho de um array.
    }

    CHANGING ELEMENTS {
        ex: BY INDEX de array (índices array se iniciam do 0)
        sendo assim, podemos pegar a primeira posição, assim:

        let animals = ["Lyon", "Tiger", "Cat", "Pantera"];
        animals[0]; // escolhe o elemento "Lyon" 

        portanto,
        animals[0] = "Duck"
        edita o conteúdo da posição para "Duck" (Lyon tornou-se Duck)
    }

    delete() {
        deleta elementos, deixando um buraco (undefined) no array.
    } 

    concat() {
        recebe um array, concatena seus elementos com outro ou outros ( se mais de dois
        arrays separar por ',' ) e retorna um novo array.
    }

    copyWithin() {
        copia os elementos de um array para outra posição no array.
        DOIS MODOS:
        - arr.copyWithin(indexColagem, indexCopiado)
        - arr.copyWithin(indexColagem, indexCopiado, indexLimiteCopia)
    }

    flat() {
        cria um array apartir de um array com sub elementos que sejam arrays, concatena 
        todos os elementos em uma única camada de profundidade.
        ex: 
        const myArr = [[1,2],[3,4],[5,6]]
        const newArr = myArr.flat()
        output:     1,2,3,4,5,6
    }

    toString() { // o Javascript por default retorna string
        retorna o elemento transformado em uma string.
        ex: 
        Banana,Orange,Apple,Mango
    }

    join() {
        recebe um char separador e retorna o array tranformado em uma string,
        separado pelo char. 
        ex: join(" * ")
        Banana * Orange * Apple * Mango
    }

    at() {
        recebe um índice desejado e retorna o elemento da posição no array.
    }

    pop() {
        remove o elemento da última posição de um array e retorna o mesmo.
    } 
      
    push() {
        adiciona um novo elemento no fim de um array existente.
    }

    shift() {
        remove o primeiro elemento de um array e retorna somente o elemento.
    }

    unshift() {
        adiciona um novo elemento no primeiro índice de um array.
    }

    splice() {
        ADICIONA ELEMENTOS usando posição no índice: 
         - primeiro parâmetro define ONDE o elemento será adicionado
         - segundo patâmetro específica QUANTIDADE de elementos a serem removidos
         - os demais parâmetros são os elementos que vamos adicionar

        REMOVE ELEMENTOS escolhendo pela posição no índice:
        - primeiro parâmetro recebe a POSIÇÃO desejada
        - segundo parâmetro a QUANTIDADE de itens a serem removidos
        
        toSpliced() { // apartir do ES2023
            a diferença de toSpliced() para splice() é que este do ES2023 cria um novo array, 
            mantendo o array base sem alterações.
        }
    }

    slice() {
        CORTA ARRAY APARTIR DE ÍNDICE, retorna do elemento em diante.
        Pode ter 1 ou 2 parâmetros, se UM:
            arr.slice(1) // retorna a posicao 1 e vai até o fim do length
        se DOIS:
            arr.slice(1,3) // retorna da posicao 1 e vai até o elemento anterior ao 3 
    }


    reduce() {
        serve para SUBTRAIR TODOS OS ELEMENTOS TYPE NUMBER EM UM ARRAY.
        ex:
        const numbers = [175, 50, 25];
            
            function myFunc(total: number, num: number) {
                return total - num;
            } // 175 - 50 - 25 = 100

        console.log(numbers.reduce(myFunc));    // output: 100

        também serve para ARREDONDAR E APRESENTAR A SOMA ENTRE ELEMENTOS ARRAY.
        ex: 
        const number = [15.5, 2.3, 1.1, 4.7]; 

        function getSum(total: number, num: number) {
            return total + Math.round(num);
        } // 15.5 + 2.3 + 1.1 + 4.7 = 23.5
        
        console.log(number.reduce(getSum,0)); // Output: 24
        console.log(number.reduce(getSum,-1)); // Output: 23
        // o segundo parâmetro, é um number referência para o Math.Round()
    }     
}
*/
        