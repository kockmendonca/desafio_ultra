function numberPerfect(number) {
  let temp = 0; // Variável para armazenar a soma dos divisores do número

  // Loop que percorre de 1 até a metade do número (não precisa ir até o número inteiro)
  for (let i = 1; i <= number / 2; i++) {
    // Se 'i' for um divisor exato do número, soma ao 'temp'
    if (number % i === 0) {
      temp += i; // Adiciona o divisor à soma
    }
  }

  // Retorna verdadeiro se a soma dos divisores for igual ao número (ou seja, se for perfeito)
  return temp === number;
}

// Exemplo de uso: verifica se 28 é um número perfeito
console.log(numberPerfect(28)); 
