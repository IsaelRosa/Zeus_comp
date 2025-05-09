function addEmployee() {
    alert('Adicionar funcionário - funcionalidade em desenvolvimento.');
  }
  
  function exportEmployees() {
    alert('Exportar lista de funcionários - funcionalidade em desenvolvimento.');
  }
  
  function editEmployee(id) {
    alert(`Editar funcionário com ID: ${id} - funcionalidade em desenvolvimento.`);
  }

  function logout() {
    alert('Você saiu do sistema.');
  }
  
  function deleteEmployee(id) {
    if (confirm(`Tem certeza que deseja excluir o funcionário com ID: ${id}?`)) {
      alert(`Funcionário com ID: ${id} excluído com sucesso.`);
      // Aqui você pode adicionar a lógica para excluir o funcionário do backend ou da tabela.
    }
  }

  function addEmployee() {
    alert("Função para adicionar um novo funcionário ainda não implementada.");
  }
  
  // Função para logout
  function logout() {
    alert("Você foi desconectado.");
  }

  function addEmployee() {
    window.location.href = 'members/add-member.html';
  }
  
