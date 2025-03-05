function expandAroundCenter(s, left, right) {
  // Enquanto os caracteres forem iguais e estivermos dentro dos limites da string, expandimos
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--; // Expande para a esquerda
    right++; // Expande para a direita
  }
  // Retorna a substring palindrômica encontrada
  return s.substring(left + 1, right);
}

function longestPalindromicSubstring(s) {
  if (!s) return ""; // Caso a string seja vazia, retorna ""

  let longest = ""; // Guarda o maior palíndromo encontrado

  for (let i = 0; i < s.length; i++) {
    // Verifica palíndromos de tamanho ímpar (ex: "aba")
    let palindromoImpar = expandAroundCenter(s, i, i);
    // Verifica palíndromos de tamanho par (ex: "abba")
    let palindromoPar = expandAroundCenter(s, i, i + 1);

    // Atualiza 'longest' se encontrar um palíndromo maior
    if (palindromoImpar.length > longest.length) {
      longest = palindromoImpar;
    }
    if (palindromoPar.length > longest.length) {
      longest = palindromoPar;
    }
  }

  return longest; // Retorna o maior palíndromo encontrado
}

// Exemplo de uso:
console.log(longestPalindromicSubstring("dbbcdccc"));
