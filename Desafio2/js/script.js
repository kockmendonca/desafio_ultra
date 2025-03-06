// Variáveis de controle para alternar entre crescente e decrescente
let ordemCidade = true; // true para crescente, false para decrescente
let ordemBairro = true;
let ordemEstado = true;

// Função para exibir os endereços na tela
function exibirEnderecos(enderecos) {
  const lista = document.getElementById("enderecos-lista");
  lista.innerHTML = ""; // Limpar a lista antes de atualizar

  enderecos.forEach((endereco) => {
    const li = document.createElement("li");
    li.textContent = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
    lista.appendChild(li);
  });
}

// Buscar o endereço via CEP e armazenar no LocalStorage
document.getElementById("buscar").addEventListener("click", async () => {
  const cep = document.getElementById("cep").value;
  if (cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP inválido!");
      return;
    }

    // Armazenar o endereço no LocalStorage
    const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
    enderecos.push(dados);
    localStorage.setItem("enderecos", JSON.stringify(enderecos));

    // Exibir os endereços armazenados
    exibirEnderecos(enderecos);
  } else {
    alert("Por favor, digite um CEP!");
  }
});

// Ordenação por Cidade
document.getElementById("ordenar-cidade").addEventListener("click", () => {
  const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
  enderecos.sort((a, b) => {
    return ordemCidade
      ? a.localidade.localeCompare(b.localidade) // Crescente
      : b.localidade.localeCompare(a.localidade); // Decrescente
  });
  ordemCidade = !ordemCidade; // Alternar a ordem
  document.getElementById("ordenar-cidade").textContent = ordemCidade
    ? "Ordenar por Cidade (Crescente)"
    : "Ordenar por Cidade (Decrescente)";

  localStorage.setItem("enderecos", JSON.stringify(enderecos));
  exibirEnderecos(enderecos);
});

// Ordenação por Bairro
document.getElementById("ordenar-bairro").addEventListener("click", () => {
  const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
  enderecos.sort((a, b) => {
    return ordemBairro
      ? a.bairro.localeCompare(b.bairro) // Crescente
      : b.bairro.localeCompare(a.bairro); // Decrescente
  });
  ordemBairro = !ordemBairro; // Alternar a ordem
  document.getElementById("ordenar-bairro").textContent = ordemBairro
    ? "Ordenar por Bairro (Crescente)"
    : "Ordenar por Bairro (Decrescente)";

  localStorage.setItem("enderecos", JSON.stringify(enderecos));
  exibirEnderecos(enderecos);
});

// Ordenação por Estado
document.getElementById("ordenar-estado").addEventListener("click", () => {
  const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
  enderecos.sort((a, b) => {
    return ordemEstado
      ? a.uf.localeCompare(b.uf) // Crescente
      : b.uf.localeCompare(a.uf); // Decrescente
  });
  ordemEstado = !ordemEstado; // Alternar a ordem
  document.getElementById("ordenar-estado").textContent = ordemEstado
    ? "Ordenar por Estado (Crescente)"
    : "Ordenar por Estado (Decrescente)";

  localStorage.setItem("enderecos", JSON.stringify(enderecos));
  exibirEnderecos(enderecos);
});

// Carregar os endereços armazenados no LocalStorage ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
  exibirEnderecos(enderecos);
});

function maskCEP(event) {
  let cep = event.target;
  cep.value = cep.value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Aplica a máscara XXXXX-XXX
  if (cep.value.length > 5) {
    cep.value = cep.value.slice(0, 5) + "-" + cep.value.slice(5, 8);
  }
}

document.getElementById("cep").addEventListener("input", maskCEP);
