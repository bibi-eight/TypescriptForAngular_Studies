//pra traduzir o arquivo typescript -> npx tsc (caminho do arquivo typescript) -> ex: src/index.ts
//pra rodar -> node (caminho do arquivo ts traduzido (js)) -> src/index.js

type hero = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa : hero)
{
    console.log();
}

printaObjeto({
    name: "Clark Kent",
    vulgo: "Supermen",
});


