document.getElementById("formParceiro").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nomeParceiro: document.getElementById("nomeParceiro").value,
    tipoParceiro: document.getElementById("tipoParceiro").value,
    responsavelParceiro: document.getElementById("responsavelParceiro").value,
    telResponsavel: document.getElementById("telResponsavel").value,
    emailResponsavel: document.getElementById("emailResponsavel").value,
    rua: document.getElementById("rua").value,
    numero: Number(document.getElementById("numero").value),
    bairro: document.getElementById("bairro").value,
    papel: document.getElementById("papel").checked,
    plastico: document.getElementById("plastico").checked,
    vidro: document.getElementById("vidro").checked,
    metal: document.getElementById("metal").checked,
    oleoCozinha: document.getElementById("oleoCozinha").checked,
    pilhaBateria: document.getElementById("pilhaBateria").checked,
    eletronico: document.getElementById("eletronico").checked,
    roupa: document.getElementById("roupa").checked,
    outros: document.getElementById("outros").checked,
  };

  fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert("Dados enviados com sucesso!");
        document.getElementById("formParceiro").reset();
      } else {
        alert("Erro ao enviar os dados. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro de conexão. Verifique sua internet.");
    });
});

