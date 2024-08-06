const prompt = require("prompt-sync")();

const Residencias = [];

const modelo = () => {
  console.log("Preencha todos os dados para concluir com sucesso o cadastro.")
  const Bairro = prompt("Digite o nome do bairro: ");
  const Rua = prompt("Digite o nome da Rua : ");
  const Numero = +prompt("Digite o número da casa: ")
  const moradores = [];

  while (true) {
    const morador = prompt("Digite o nome de quem mora na casa , ou digite 'fim': ");

    if (morador == "fim") {
      break;
    }

    moradores.push(morador);
  }
  
  if (
    Bairro!= "" &&
    Rua != "" &&
    Numero != "" &&
    moradores.length != ""
    
  ) {
    return {
      Bairro,
      Rua,
      Numero,
      moradores,
    };
  }

  console.log("Dados inválidos!");
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    Residencias.push(novo);
    console.log("Residência criada com sucesso!");
  }
};

const listar = () => {
  if (Residencias.length == 0) {
    console.log("Nenhuma Residencia foi criada ainda!");
  }
  Residencias.forEach((el, i) => {
    console.log(`${i + 1}. 
            Bairro: ${el.Bairro},
            Rua: ${el.Rua },
            Numero: ${el.Numero},
            Moradores: ${el.moradores}`);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual o indice que deseja atualizar: ") - 1;

  const novo = modelo();

  if (novo && indice >= 0 && indice < Residencias.length) {
    Residencias[indice] = novo;
    console.log("Curso atualizado com sucesso!");
  } else {
    console.log("Indice inválido");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Qual indice deseja remover?") - 1;

  if (indice >= 0 && indice < Residencias.length) {
    Residencias.splice(indice, 1);
    console.log("Registro removido com sucesso!");
  } else {
    console.log("Indice inválido");
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};
