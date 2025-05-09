// Simulação de dados de membros (em produção, isso viria de uma API)
let members = [
  {
    id: 1,
    fullName: 'João Silva',
    birthDate: '1995-05-15',
    email: 'joao.silva@complir.com',
    position: 'Consultor',
    phone: '(11) 98765-4321',
    gender: 'Masculino',
    joinDate: '2022-03-10',
    skills: 'Gestão de projetos, Desenvolvimento web, Análise de requisitos',
    photo: '../images/profile1.jpg'
  },
  {
    id: 2,
    fullName: 'Maria Souza',
    birthDate: '1998-08-22',
    email: 'maria.souza@complir.com',
    position: 'Gerente',
    phone: '(11) 91234-5678',
    gender: 'Feminino',
    joinDate: '2021-11-05',
    skills: 'Gestão financeira, Negociação, Liderança',
    photo: '../images/profile2.jpg'
  }
];

// Carrega lista de membros
function loadMembers() {
  const tableBody = document.getElementById('membersTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';
  
  members.forEach(member => {
    const row = document.createElement('tr');
    
    // Formata data de ingresso
    const joinDate = new Date(member.joinDate);
    const formattedDate = joinDate.toLocaleDateString('pt-BR');
    
    row.innerHTML = `
      <td><img src="${member.photo}" alt="${member.fullName}"></td>
      <td>${member.fullName}</td>
      <td>${member.position}</td>
      <td>${member.email}</td>
      <td>${formattedDate}</td>
      <td>
        <a href="edit.html?id=${member.id}" class="action-btn edit-btn">Editar</a>
        <button class="action-btn delete-btn" data-id="${member.id}">Excluir</button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });

  // Adiciona eventos aos botões de exclusão
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      if (confirm('Tem certeza que deseja excluir este membro?')) {
        deleteMember(id);
      }
    });
  });
}

// Exclui um membro
function deleteMember(id) {
  members = members.filter(m => m.id !== parseInt(id));
  loadMembers();
  alert('Membro excluído com sucesso!');
}

// Pesquisa membros
function searchMembers() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const tableBody = document.getElementById('membersTableBody');
  
  if (!searchTerm) {
    loadMembers();
    return;
  }
  
  const filtered = members.filter(m => 
    m.fullName.toLowerCase().includes(searchTerm) ||
    m.position.toLowerCase().includes(searchTerm) ||
    m.email.toLowerCase().includes(searchTerm)
  );
  
  tableBody.innerHTML = '';
  filtered.forEach(member => {
    const row = document.createElement('tr');
    const joinDate = new Date(member.joinDate);
    const formattedDate = joinDate.toLocaleDateString('pt-BR');
    
    row.innerHTML = `
      <td><img src="${member.photo}" alt="${member.fullName}"></td>
      <td>${member.fullName}</td>
      <td>${member.position}</td>
      <td>${member.email}</td>
      <td>${formattedDate}</td>
      <td>
        <a href="edit.html?id=${member.id}" class="action-btn edit-btn">Editar</a>
        <button class="action-btn delete-btn" data-id="${member.id}">Excluir</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadMembers();
  
  // Configura busca
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', searchMembers);
  }
  
  // Permite buscar pressionando Enter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchMembers();
      }
    });
  }
});

// Verifica autenticação
function checkAuth() {
  const user = sessionStorage.getItem("currentUser");
  if (!user) {
    alert("Você precisa estar logado para acessar esta página.");
    window.location.href = "../index.html";
  }
}

// Carrega lista de membros
function loadMembers() {
  const members = [
    {
      sn: "01",
      name: "Sandra",
      phone: "(35) 98765-4321",
      birthDate: "01/01/1999",
      joinDate: "01/01/2024",
      email: "sandra@compjr.com",
      area: "Gerência",
      role: "Recursos Humanos",
    },
    {
      sn: "02",
      name: "Abdu",
      phone: "(35) 98765-4321",
      birthDate: "01/01/1999",
      joinDate: "01/01/2024",
      email: "abdu@compjr.com",
      area: "Projetos",
      role: "Operações",
    },
  ];

  const tableBody = document.getElementById("membersTableBody");
  tableBody.innerHTML = ""; 

  members.forEach((member) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${member.sn}</td>
      <td>${member.name}</td>
      <td>${member.phone}</td>
      <td>${member.birthDate}</td>
      <td>${member.joinDate}</td>
      <td>${member.email}</td>
      <td>${member.area}</td>
      <td>${member.role}</td>
      <td><a href="#" class="btn btn-link">Ver mais</a></td>
    `;
    tableBody.appendChild(row);
  });
}