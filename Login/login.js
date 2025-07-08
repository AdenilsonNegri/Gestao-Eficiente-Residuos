document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const botao = document.getElementById('btn');

  // Habilita o botão se ambos os campos estiverem preenchidos
  function verificarCampos() {
    if (emailInput.value.trim() !== '' && senhaInput.value.trim() !== '') {
      botao.disabled = false;
      botao.classList.remove('botao-desabilitado');
    } else {
      botao.disabled = true;
      botao.classList.add('botao-desabilitado');
    }
  }

  emailInput.addEventListener('input', verificarCampos);
  senhaInput.addEventListener('input', verificarCampos);

  // Ao clicar no botão "Entrar"
  botao.addEventListener('click', (e) => {
    e.preventDefault(); // impede envio do formulário

    const email = emailInput.value.trim();

    localStorage.setItem('usuarioEmail', email);
    window.location.href = '../Listagem_Parceiros/index.html';
  });
});
