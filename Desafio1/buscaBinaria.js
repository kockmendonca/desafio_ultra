function searchBinaria(list, target) {
  let start = 0; // Índice inicial do array
  let end = list.length - 1; // Índice final do array
  let result = -1; // Guarda a posição do elemento encontrado (ou -1 se não for encontrado)

  // Enquanto a parte pesquisada for válida (start não ultrapassou end)
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // Calcula o meio do intervalo

    if (list[mid] === target) {
      // Se encontrou o número desejado
      result = mid; // Armazena a posição do número encontrado
      end = mid - 1; // Continua procurando à esquerda (se houver mais ocorrências)
    } else if (list[mid] < target) {
      // Se o número do meio for menor que o alvo
      start = mid + 1; // Pesquisa na metade direita
    } else {
      // Se o número do meio for maior que o alvo
      end = mid - 1; // Pesquisa na metade esquerda
    }
  }

  return result; // Retorna a posição do número ou -1 se não encontrado
}

// Exemplo de uso
let list = [5, 12, 18, 23, 45, 70, 89]; 
let target = 23; 
console.log(searchBinaria(list, target)); 
