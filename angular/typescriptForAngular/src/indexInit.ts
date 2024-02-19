type heroi = {
    name: string,
    vulgo: string,
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman"
});

console.log("Olá Mundo");
/* rodamos Typescript com o Node Package Execute (command npx) 
    'npx tsc ./src/pathOfOurFile.ts'

    executado o command, o mesmo 
    - Gera um file .js que possui a mesma implementação do nosso código .ts

        Além disso, é importante observar que ao rodarmos o npx tsc "pathOfOurFile"
    teremos uma 'duplicidade' identificada nos errors. Mas isso se dá apenas porque 
    serão indentificados o arquivo .ts e .js em um mesmo diretório.

    POR ISSO, PRECISAMOS CONFIGURAR NOSSA IDE (Integrated Development Environment) ADEQUADA COM 
    UTILIZAR TYPESCRIPT. Através do command:
    'npx tsc --init'

    - gerado o file tsconfig.json
    o tsconfig possui as configurações possíveis do ambiente de desenvolvimento typescript, tendo 
    que não é legal recebermos o erro de duplicidade a cada run (executando scripts typscript) vamos 
    alterar nosso tsconfig para resolver isso.

    POR PADRÃO o conteúdo do tsconfig será:
    {

        "compilerOptions": {
            "target": "es2016",           
            "module": "commonjs",       
            "esModuleInterop": true,          
            "forceConsistentCasingInFileNames": true,   
            "strict": true,             
            "skipLibCheck": true   
        }
        
    }
    
    MAS VAMOS ADICIONAR AO "compilerOptions" Pré-set: 
    // *module*
    "rootDir": "./src",  // aponta o root directory do nosso projeto
    // *emit*
    "outDir": "./build",   // aponta um output directory para nossas builds e cria o directory se não houver

    NESTA ALTURA, SE EXECUTARMOS 'npx tsc' 
    O typescript já roda e gera no directory apontado por "outDir" os files.js transpilados (transforma ts 
     p/ js e compila).
    Nesta linha de raciocínio, basta acessar "./src/build" e executarmos os files.js

    para melhorar nossa produção vamos
     FAZER UM SCRIPT DE EXECUÇÃO PARA INICIAR TODO O PROCESSO no file 'package.json'

    inside do "scripts":{} scope ADICIONANDO um novo script
      -  "scriptStart": "npx tsc && node pathDir/ourFile.js"
      - isto nos permite com 'npm run scriptStart' executar o processo
      - Observação: scriptStart pode ser qualquer outra nomenclatura

    --------------------------------------------------------------------------------------------
    agora que entendemos a base - VAMOS INSTALAR O TS-NODE-DEV via npm

    ` 
    npm install ts-node-dev -D 
    `

    O command vai realizar a instalação da feature TS-NODE-DEV para que 
    possamos trabalhar em um server adequado para nosso ambiente de produção.
    
    assim como antes, vamos configurar nosso package.json para execução de + um script:
    "scripts": {
        "start": "npx tsc && node build/index.js" 
        "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"
        ...
    }

*/