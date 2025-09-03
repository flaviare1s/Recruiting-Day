// Questão 01 - Juros compostos
function calcularJurosCompostos(principal, taxaPercentual, unidade, periodos) {
  const taxa = taxaPercentual / 100;
  const valorFinal = principal * Math.pow(1 + taxa, periodos);
  const jurosTotais = valorFinal - principal;

  return {
    valorFinal: valorFinal.toFixed(2),
    jurosTotais: jurosTotais.toFixed(2),
    periodos,
    unidade
  };
}

// Questão 02 - Validação e ordenação
function validarEnderecoCarteira(endereco) {
  const regex = /^0x[a-fA-F0-9]{40}$/;
  return regex.test(endereco);
}

function ordenarTransacoesPorValor(transacoes) {
  return transacoes.sort((a, b) => b.valor - a.valor);
}

// Questão 03 - Verificação força senha
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
