function fibonacci(n) {
  // Se 'n' for 0 ou negativo, retorna um array vazio
  if (n <= 0) return [];

  // Se 'n' for 1, retorna um array contendo apenas o primeiro número da sequência
  if (n === 1) return [0];

  // Inicializa a sequência com os dois primeiros números da sequência de Fibonacci
  let sequence = [0, 1];

  // Começa do índice 2 e calcula os próximos números até alcançar 'n'
  for (let i = 2; i < n; i++) {
    // O próximo número da sequência é a soma dos dois anteriores
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  // Retorna a sequência gerada
  return sequence;
}

// Exemplo de uso: gera os 6 primeiros números da sequência de Fibonacci
console.log(fibonacci(6)); // [ 0, 1, 1, 2, 3, 5 ]
