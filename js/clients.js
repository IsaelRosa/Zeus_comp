// clients.js
let clients = [
  {
    id: 1,
    type: 'PJ',
    name: 'Empresa ABC Ltda',
    document: '12.345.678/0001-90',
    email: 'contato@empresaabc.com',
    phone: '(11) 9876-5432',
    address: 'Rua das Empresas, 1000 - São Paulo/SP',
    createdAt: '2023-01-15'
  }
];

function loadClients() {
  const tableBody = document.getElementById('clientsTableBody');
  tableBody.innerHTML = '';
  
  clients.forEach(client => {
    const row = document.createElement('tr');
    const createdAt = new Date(client.createdAt).toLocaleDateString('pt-BR');
    
    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.document}</td>
      <td>${client.email}</td>
      <td>${client.phone}</td>
      <td>${createdAt}</td>
      <td>
        <a href="edit.html?id=${client.id}" class="action-btn edit-btn">Editar</a>
        <button class="action-btn delete-btn" data-id="${client.id}">Excluir</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// reports.js
function generateFinancialReport() {
  // Dados simulados
  const financialData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    revenue: [12000, 19000, 15000, 18000, 22000, 25000],
    expenses: [8000, 10000, 12000, 9000, 11000, 13000],
    profit: [4000, 9000, 3000, 9000, 11000, 12000]
  };
  
  // Atualiza resumo
  document.getElementById('totalRevenue').textContent = 
    `R$ ${financialData.revenue.reduce((a,b) => a + b, 0).toLocaleString('pt-BR')}`;
  document.getElementById('totalExpenses').textContent = 
    `R$ ${financialData.expenses.reduce((a,b) => a + b, 0).toLocaleString('pt-BR')}`;
  document.getElementById('totalProfit').textContent = 
    `R$ ${financialData.profit.reduce((a,b) => a + b, 0).toLocaleString('pt-BR')}`;
  
  // Preenche tabela
  const tableBody = document.getElementById('reportTableBody');
  tableBody.innerHTML = '';
  
  financialData.labels.forEach((month, index) => {
    const row = document.createElement('tr');
    const profitClass = financialData.profit[index] >= 0 ? 'positive-profit' : 'negative-profit';
    
    row.innerHTML = `
      <td>${month}/2023</td>
      <td>${Math.floor(Math.random() * 10) + 5}</td>
      <td>R$ ${financialData.revenue[index].toLocaleString('pt-BR')}</td>
      <td>R$ ${financialData.expenses[index].toLocaleString('pt-BR')}</td>
      <td class="${profitClass}">R$ ${financialData.profit[index].toLocaleString('pt-BR')}</td>
    `;
    tableBody.appendChild(row);
  });
  
  // Cria gráfico
  const ctx = document.getElementById('financialChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: financialData.labels,
      datasets: [
        {
          label: 'Receita',
          data: financialData.revenue,
          backgroundColor: '#4CAF50'
        },
        {
          label: 'Despesas',
          data: financialData.expenses,
          backgroundColor: '#F44336'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}