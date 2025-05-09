// Dados de usuários (em produção, isso viria de um backend)
const users = [
  {
    id: 1,
    email: "admin@complir.com",
    password: "Admin@123", // Senha do administrador
    name: "Administrador",
    role: "admin"
  },
  {
    id: 2,
    email: "usuario@complir.com",
    password: "User@123", // Senha do usuário comum
    name: "Usuário Comum",
    role: "user"
  }
];

// Função para fazer login
function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Salva o usuário na sessionStorage
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    
    // Redireciona para o dashboard apropriado
    if (user.role === 'admin') {
      window.location.href = 'dashboard-admin.html';
    } else {
      window.location.href = 'dashboard-user.html';
    }
    return true;
  }
  
  return false;
}

// Verifica se o usuário está logado
function checkAuth() {
  const user = JSON.parse(sessionStorage.getItem('currentUser'));
  
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  
  return user;
}

// Faz logout
function logout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}