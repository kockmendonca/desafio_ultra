// Função principal para calcular as notas e moedas necessárias para compor o valor fornecido
function sakeBoxElectronic(value) {
  // Array com as notas disponíveis (não inclui a nota de 1, pois tratamos separadamente como moeda)
  const bankNotes = [100, 50, 20, 10, 5, 2];

  // Array com a moeda de 1 real (a única moeda disponível)
  const coins = [1];

  // Array que armazenará os resultados das notas e moedas
  const result = [];

  // Loop para tratar cada nota, começando da maior para a menor
  for (let bankNote of bankNotes) {
    // Calcula quantas vezes a nota pode ser usada no valor restante
    let amount = Math.floor(value / bankNote);

    // Se a quantidade de notas for maior que 0, significa que podemos usar essas notas
    if (amount > 0) {
      // Adiciona a quantidade de notas ao resultado, ajustando o plural de "nota" conforme necessário
      result.push(`${amount} nota${amount > 1 ? "s" : ""} de ${bankNote}`);

      // Atualiza o valor, subtraindo o valor das notas utilizadas
      value %= bankNote;
    }
  }

  // Após o loop das notas, verificamos se ainda existe valor restante, o que será tratado como moedas de 1 real
  if (value > 0) {
    // Adiciona a quantidade de moedas de 1 real ao resultado
    result.push(`${value} moeda${value > 1 ? "s" : ""} de 1`);
  }

  // Retorna a resposta final, unindo todas as partes do resultado com quebras de linha
  return result.join("\n");
}

// Exemplo de uso da função:
// O valor 2346 será passado para a função para calcular as notas e moedas
const value = 2346;
console.log(sakeBoxElectronic(value)); // Imprime o resultado no console
