// Exemplo de preenchimento dinâmico da tabela
document.addEventListener("DOMContentLoaded", function () {
  const budgetTableBody = document.getElementById("budgetTableBody");

  const budgets = [
    {
      sn: "01",
      number: "00112233",
      description: "Criação de landingpage beneficente",
      estimated: "1,400,000.00",
      costs: "1,380,000.00",
      client: "Clovis",
      status: "Em análise",
    },
    {
      sn: "02",
      number: "00112234",
      description: "Sistema de eventos",
      estimated: "400,000.00",
      costs: "500,000.00",
      client: "Carlota",
      status: "Reprovado",
    },
    {
      sn: "03",
      number: "00112235",
      description: "Chatbot eventos",
      estimated: "2,000,000.00",
      costs: "1,800,000.00",
      client: "João",
      status: "Em análise",
    },
  ];

  budgets.forEach((budget) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${budget.sn}</td>
      <td>${budget.number}</td>
      <td>${budget.description}</td>
      <td>${budget.estimated}</td>
      <td>${budget.costs}</td>
      <td>${budget.client}</td>
      <td>${budget.status}</td>
    `;
    budgetTableBody.appendChild(row);
  });
});