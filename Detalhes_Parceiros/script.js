const apiURL = 'https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros';
const container = document.getElementById('detalhesParceiro');
const id = localStorage.getItem('parceiroSelecionadoId');

if (!id) {
  container.innerHTML = '<p>❌ Nenhum parceiro selecionado.</p>';
} else {
  fetch(`${apiURL}/${id}`)
    .then(res => res.json())
    .then(parceiro => {
      let avatar = '';
      switch (parceiro.tipoParceiro) {
        case 'ECO': avatar = '🌿'; break;
        case 'COO': avatar = '♻️'; break;
        case 'PEV': avatar = '📦'; break;
        default: avatar = '🏢';
      }

      const dataFormatada = new Date(parceiro.createdAt).toLocaleDateString('pt-BR');

      container.innerHTML = `
        <div class="avatar">${avatar}</div>
        <div class="info">
          <p><strong>Data de Cadastro:</strong> ${dataFormatada}</p>
          <p><strong>Nome:</strong> ${parceiro.nomeParceiro}</p>
          <p><strong>Responsável:</strong> ${parceiro.responsavelParceiro}</p>
          <p><strong>Telefone:</strong> ${parceiro.telResponsavel}</p>
          <p><strong>E-mail:</strong> ${parceiro.emailResponsavel}</p>
          <p><strong>Endereço:</strong> ${parceiro.rua}, ${parceiro.numero} - ${parceiro.bairro}</p>
          <p><strong>Resíduos Aceitos:</strong></p>
          <div class="residuos">
            ${parceiro.papel ? '<span>Papel</span>' : ''}
            ${parceiro.plastico ? '<span>Plástico</span>' : ''}
            ${parceiro.vidro ? '<span>Vidro</span>' : ''}
            ${parceiro.metal ? '<span>Metal</span>' : ''}
            ${parceiro.oleoCozinha ? '<span>Óleo de Cozinha</span>' : ''}
            ${parceiro.pilhaBateria ? '<span>Pilha/Bateria</span>' : ''}
            ${parceiro.eletronico ? '<span>Eletrônicos</span>' : ''}
            ${parceiro.roupa ? '<span>Roupas</span>' : ''}
            ${parceiro.outros ? '<span>Outros</span>' : ''}
          </div>
        </div>
      `;
    })
    .catch(() => {
      container.innerHTML = '<p>❌ Erro ao carregar dados do parceiro.</p>';
    });
}
