const prompt = require("prompt-sync")(); //módulo para facilitar leitura de input

const inputing = () => {
  //lendo entrada do usuário e aceitando apenas números maiores ou iguais a 20
  const input = prompt("Insira o valor de n (>=20): ");
  const numero = Number(input);

  if (numero < 20 || isNaN(numero)) {
    console.log("insira um número maior ou igual a 20");
    inputing();
  } else {
    //n = numero;
    return numero;
  }
};

const fullLine = (i, n) => {
  //cria as linhas preenchidas da ampulheta
  //a primeira e última expressão ternária os espacos entre a lateral de o "vidro" da ampulheta, sendo uma funcao crescente antes da metade do tamanho e decrescente depois
  // a expressão ternária do meio é responsável por preencher, com #, o corpo da ampulheta

  return `#${i <= n / 2 - 1 ? " ".repeat(i - 1) : " ".repeat(n - 2 - i)}${
    //inicio da segunda expressao
    i <= n / 2 - 1 ? "#".repeat(n - 2 * i) : "#".repeat((i - n / 2 + 1) * 2)
  }${i <= n / 2 - 1 ? " ".repeat(i - 1) : " ".repeat(n - 2 - i)}#`;
};

const emptyLine = (i, n) => {
  //as expressoes desta funcao se assemelham as da funcao anterior. Mas geram apenas linnhas vazias

  return `#${
    i <= n / 2 - 1 ? " ".repeat(i - 1) + "#" : " ".repeat(n - 2 - i) + "#" //esta expressao cria um espaco seguido de #, criando o "vidro" da ampulheta, me refiro como expressao de borda a seguir
  }${
    //inicio da segunda expressao
    i <= n / 2 - 1
      ? " ".repeat(n - 2 * i - 2)
      : " ".repeat((i - n / 2 + 1) * 2 - 2) //cada linha deve ser preenchida com 2 caracteres a menos, uma vez que esses agora sao gerados nas expressoes de borda
  }${i <= n / 2 - 1 ? "#" + " ".repeat(i - 1) : "#" + " ".repeat(n - 2 - i)}#`; //expressao de borda para o lado direito
};

const ampulhetaNoTempo = (total) => {
  //total = n

  const states = [];

  for (let j = 0; j < total - 3; j++) {
    if (j < total / 2) {
      states.push(true);
    } else {
      states.push(false);
    }
  }

  console.log("#".repeat(total));
  states.map((value, index) => {
    if (value) {
      console.log(fullLine(index + 1, total));
    } else {
      console.log(emptyLine(index + 1, total));
    }
  });
  console.log("#".repeat(total));

  console.log("\n");

  for (let t = 0; t < (total - 2) / 2 - 1; t++) {
    states[t] = false;
    states[total - 3 - t] = true;
    //console.log(t);

    console.log("Tempo: ", t, "\n");
    console.log("#".repeat(total));
    states.map((value, index) => {
      //console.log(index);
      if (value === true) {
        console.log(fullLine(index + 1, total));
      } else {
        console.log(emptyLine(index + 1, total));
      }
    });
    console.log("#".repeat(total));

    console.log("\n");
  }
};

//ampulhetaNoTempo(n);

module.exports = {
  inputing: inputing,
  fullLine: fullLine,
  emptyLine: emptyLine,
  ampulhetaNoTempo: ampulhetaNoTempo,
};
