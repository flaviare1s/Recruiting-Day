const prompt = require('prompt-sync')();


// Questão 01.
const principal = parseFloat(prompt("Quanto você quer investir? (ex: 1000) R$ "));
const taxaPercentual = parseFloat(prompt("Qual a taxa de juros? (ex: 8 para 8%) "));
const unidade = prompt("Essa taxa é por ano, mês ou dia? ").toLowerCase();
const periodos = parseInt(prompt(`Quantos ${unidade}s o dinheiro ficará investido? `), 10);

// Converte a taxa de percentual para decimal
const taxa = taxaPercentual / 100;

// Função para calcular os juros compostos
function calcularJurosCompostos(principal, taxa, periodos) {
  const valorFinal = principal * Math.pow(1 + taxa, periodos);
  const jurosTotais = valorFinal - principal;

  return {
    valorFinal: valorFinal.toFixed(2),
    jurosTotais: jurosTotais.toFixed(2)
  };
}

const resultado = calcularJurosCompostos(principal, taxa, periodos);

console.log(`Resultado após ${periodos} ${unidade}(s):`);
console.log(`Valor final: R$ ${resultado.valorFinal}`);
console.log(`Total em juros: R$ ${resultado.jurosTotais}`);

// Questão 02.
function validarEnderecoCarteira(endereco) {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(endereco);
}

function ordenarTransacoesPorValor(transacoes) {
  return transacoes.sort((a, b) => b.valor - a.valor);
}

const transacoes = [
  { from: "0xabc123abc123abc123abc123abc123abc123abcd", to: "0xdef456def456def456def456def456def456def0", valor: 2.5 },
  { from: "0x1231231231231231231231231231231231231231", to: "0x4564564564564564564564564564564564564564", valor: 10 },
  { from: "0xaaa111aaa111aaa111aaa111aaa111aaa111aaa1", to: "0xbbb222bbb222bbb222bbb222bbb222bbb222bbb2", valor: 1.2 },
];

console.log("Endereço válido?", validarEnderecoCarteira("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")); // true

console.log("Transações ordenadas por valor:");
console.log(ordenarTransacoesPorValor(transacoes));

// Questão 03.
function verificarForcaSenha(senha) {
  const tamanhoMinimo = 8;

  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temEspecial = /[!@#$%^&*()_\-+\[\]{}|;:'",.<>?/\\]/.test(senha);
  const temTamanho = senha.length >= tamanhoMinimo;

  let score = 0;
  if (temTamanho) score++;
  if (temMaiuscula) score++;
  if (temMinuscula) score++;
  if (temNumero) score++;
  if (temEspecial) score++;

  let forca;
  switch(score) {
    case 5:
      forca = "Muito Forte";
      break;
    case 4:
      forca = "Forte";
      break;
    case 3:
      forca = "Média";
      break;
    case 2:
      forca = "Fraca";
      break;
    default:
      forca = "Muito Fraca";
  }

  return {
    forca,
    detalhes: {
      tamanhoMinimo: temTamanho,
      maiuscula: temMaiuscula,
      minuscula: temMinuscula,
      numero: temNumero,
      especial: temEspecial
    }
  };
}
