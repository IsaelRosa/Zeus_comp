// Verifica autenticação e carrega dados do usuário
const user = checkAuth();
document.getElementById('userName').textContent = user.name;

// Simulação de dados
document.getElementById('totalBudgets').textContent = '12';
document.getElementById('totalClients').textContent = '8';
document.getElementById('totalUsers').textContent = '5';

document.addEventListener("DOMContentLoaded", function () {
    console.log("Dashboard carregado com sucesso!");
  });