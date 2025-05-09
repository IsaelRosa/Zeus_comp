// Dados simulados para a tabela
const budgets = [
    { id: "00121235", project: "Criação de Landscaping", value: "1,400,000.00", cost: "1,380,000.00", client: "Clávis", status: "Em análise" },
    { id: "36211235", project: "Sistema de eventos", value: "4,000,000.00", cost: "3,500,000.00", client: "Carlota", status: "Reprovado" },
    { id: "00211235", project: "Chatbot eventos", value: "2,000,000.00", cost: "1,800,000.00", client: "Jão", status: "Em análise" },
    { id: "00214465", project: "Segunda versão do sistema de ingressos", value: "1,400,000.00", cost: "1,380,000.00", client: "Gesonel", status: "Aprovado" },
    { id: "00211236", project: "Sistema para leitura de arquivos", value: "1,400,000.00", cost: "1,380,000.00", client: "Alex", status: "Reprovado" },
    { id: "00211237", project: "Site da empresa júnior", value: "1,400,000.00", cost: "1,380,000.00", client: "Interno", status: "Aprovado" },
    { id: "00211238", project: "Sistema de fluxo de caixa", value: "1,400,000.00", cost: "1,380,000.00", client: "Gustavo", status: "Aprovado" },
  ];
  
  // Função para gerar as linhas da tabela
  function populateTable() {
    const tableBody = document.getElementById("budgetTableBody");
    budgets.forEach((budget, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${budget.id}</td>
        <td>${budget.project}</td>
        <td>${budget.value}</td>
        <td>${budget.cost}</td>
        <td>${budget.client}</td>
        <td class="status ${budget.status.toLowerCase()}">${budget.status}</td>
        <td>
          <button class="btn btn-view">Consultar</button>
          <button class="btn btn-edit">Editar</button>
          <button class="btn btn-delete" onclick="confirmDelete('${budget.id}')">Excluir</button>
        </td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Função para confirmar exclusão
  function confirmDelete(id) {
    const modal = document.getElementById("deleteModal");
    modal.style.display = "block";
    modal.setAttribute("data-id", id);
  }
  
  // Função para excluir orçamento
  function deleteBudget() {
    const modal = document.getElementById("deleteModal");
    const id = modal.getAttribute("data-id");
    alert(`Orçamento ${id} excluído com sucesso!`);
    modal.style.display = "none";
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById("deleteModal");
    modal.style.display = "none";
  }
  
  // Inicializar a tabela ao carregar a página
  document.addEventListener("DOMContentLoaded", populateTable);