/**
  Decorators
  são necessários quando precisamos passar uma ação ou injetar algo
  tendo uma condição por gatilho.
 */

/* //First time

// para utilizar decorator precisamos ativar o "experimentalDecorator": true em nosso tsconfig.json

    function ExibirNome(target: any) {
        console.log(target);
    }

    @ExibirNome // este decorator é ativado em cima da class, exibindo o nome da classe
    class Funcionario {}
    @ExibirNome
    class Quincas {}
*/
function apiVersion(version: string, name: string) {
    return(target: any) => {
        Object.assign(target.prototype, { __version: version, __name: name }); 
        //                                   estas props vão existir após a transpilação ts
    };
}

/* decorator a nível de CLASSE */
// @apiVersion("1.10","Guiov7") // isso é a INJEÇÃO DE PROPRIEDADES dinâmicamente
// class Api {}


/* Attribute Decorator */

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key]; // vamos fazer nossos getters and setters

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }else {
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };

}

class Api {
    @minLength(3)
    name: String;

    constructor(name: string) {
        this.name = name;

    }
}

const api = new Api("produtos");



/* 
const api = new Api();
console.log(api.__version);
console.log(api.__name);
*/ 