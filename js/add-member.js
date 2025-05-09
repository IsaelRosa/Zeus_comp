// Função para confirmar o cancelamento
function confirmCancel() {
  if (confirm("Tem certeza de que deseja descartar as alterações?")) {
    window.location.href = "/auth-system/home.html"; // Caminho absoluto para home.html
  }
}

document.getElementById("addMemberForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Novo funcionário adicionado com sucesso!");
  window.location.href = "/auth-system/home.html"; // Caminho absoluto para home.html
});

