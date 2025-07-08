const apiURL = 'https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros';
const listaDiv = document.getElementById('listaParceiros');
const input = document.getElementById('pesquisaInput');
const btn = document.getElementById('btnPesquisar');
let parceiros = [];

async function carregarParceiros() {
  try {
    const response = await fetch(apiURL);
    parceiros = await response.json();
    renderizarParceiros(parceiros);
  } catch (erro) {
    console.error('Erro ao buscar parceiros:', erro);
  }
}

function renderizarParceiros(lista) {
  listaDiv.innerHTML = '';
  lista.forEach(parceiro => {
    const card = document.createElement('div');
    card.classList.add('card');

    let avatar = '';
    switch (parceiro.tipoParceiro) {
      case 'ECO': avatar = '🌿'; break;
      case 'COO': avatar = '♻️'; break;
      case 'PEV': avatar = '📦'; break;
      default: avatar = '🏢';
    }

    const dataFormatada = new Date(parceiro.createdAt).toLocaleDateString('pt-BR');

    card.innerHTML = `
      <div class="avatar">${avatar}</div>
      <div class="info">
        <h2>${parceiro.nomeParceiro}</h2>
        <p><strong>Bairro:</strong> ${parceiro.bairro}</p>
        <p><strong>Data de inclusão:</strong> ${dataFormatada}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      localStorage.setItem('parceiroSelecionadoId', parceiro.id);
      window.location.href = '../Detalhes_Parceiros/index.html';
    });

    listaDiv.appendChild(card);
  });
}

btn.addEventListener('click', () => {
  const termo = input.value.toLowerCase();
  const filtrado = parceiros.filter(p =>
    p.nomeParceiro.toLowerCase().includes(termo) ||
    p.bairro.toLowerCase().includes(termo)
  );
  renderizarParceiros(filtrado);
});

carregarParceiros();
