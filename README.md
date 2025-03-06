# Desafios do Processo Seletivo Ultra LIMS

## Desafio 1 - Lógica de Programação
Este repositório contém cinco algoritmos implementados em JavaScript.

### 1 - Sequência de Fibonacci
Gera os primeiros ```n``` números da sequência de Fibonacci.

**Entrada**: Um número inteiro ```n```.

**Saída**: Um array contendo os ```n``` primeiros valores da sequência de Fibonacc

**Exemplo de Uso**

```console.log(fibonacci(6));```

---

### 2 - Busca Binária
Implementa o algoritmo de busca binária, que localiza um elemento em um array ordenado de forma eficiente.

**Entrada**: Um array ordenado e um valor alvo.

**Saída**: A posição do elemento no array (ou -1 se não encontrado).

**Exemplo de Uso**:
```
let list = [5, 12, 18, 23, 45, 70, 89];
let target = 23;
console.log(searchBinaria(list, target));
```

---

### 3 - Número Perfeito
Este script implementa um algoritmo para verificar se um dado número é perfeito. Um número perfeito é aquele cuja soma de seus divisores próprios é igual ao próprio número.

**Entrada**: Um número inteiro

**Saída**: ```true``` se o número for perfeito, ```false``` caso contrário.

**Exemplo de Uso**:
```
console.log(numberPerfect(28));
```

---

### 4 - Substring
Este script encontra a maior substring palindrômica dentro de uma string dada. Um palíndromo é uma sequência de caracteres que pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

**Entrada**: Uma string

**Saída**: A maior substring palindrômica encontrada dentro da string.

**Exemplo de Uso**:
```
console.log(longestPalindromicSubstring("dbbcdccc");
```

---

### 5 - Simulação de Saque em Caixa Eletrônico
Calcula a quantidade de notas e moedas necessárias para formar um determinado valor monetário.

**Entrada**: Um valor inteiro representando um montante em reais.

**Saída**: Uma lista de notas e moedas necessárias para compor o valor.

**Exemplo de Uso**:
```
console.log(sakeBoxElectronic(2346));
```

---

### Como Executar os Scripts
1. Certifique-se de ter o [Node.js](https://nodejs.org/pt) instalado.
2. Salve todos os arquivos.
3. Execute os scripts no terminal com o comando:
   ```node <nome_do_arquivo>.js```

---
## Desafio 2 - Sistema Web para Consulta e Armazenamento de Endereços
### Descrição
Este é um sistema web que permite buscar endereços a partir do CEP, utilizando a API ViaCEP. Os endereços consultados são armazenados para futuras consultas e podem ser organizados conforme a necessidade do usuário.
### Funcionalidades 
- Buscar endereços via API ViaCEP.
- Armazenar endereços localmente usando LocalStorage.
- Listar endereços armazenados.
- Permitir ordenação por Cidade, Bairro e Estado.
- Exibir mensagens de erro para CEPs inválidos.
### Tecnologias Utilizadas
- Front-end: HTML, CSS e JavaScript.
- Back-end: JavaScript puro (sem frameworks).
- Armazenamento: LocalStorage.
- API: ViaCEP.
---

### Como Executar o Sistema
1 - Baixe ou clone o repositório

2 - Acesse a pasta do projeto

3 - Abra o arquivo ```index.html```  no navegador.

---
### Autor
- Felipe Kock Mendonça - [GitHub](https://github.com/kockmendonca)
