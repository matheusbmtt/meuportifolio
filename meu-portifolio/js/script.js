document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-tema');
    const body = document.body;
  
    // Alternar tema
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      // Alterar ícone do botão
      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
      } else {
        toggleBtn.textContent = '🌙';
      }
    });
  
    // Projetos estáticos (você pode trocar para fetch se quiser)
    const projetos = [
      {
        nome: "Projeto 1",
        descricao: "Descrição do projeto 1, feito com HTML, CSS e JS.",
        link: "https://github.com/seunome/projeto1"
      },
      {
        nome: "Projeto 2",
        descricao: "Descrição do projeto 2, um site responsivo moderno.",
        link: "https://github.com/seunome/projeto2"
      },
      {
        nome: "Projeto 3",
        descricao: "Projeto 3 com uso de API e interatividade.",
        link: "https://github.com/seunome/projeto3"
      }
    ];
  
    const containerProjetos = document.getElementById('lista-projetos');
  
    projetos.forEach(p => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
      `;
      containerProjetos.appendChild(card);
    });
  
    // Validação do formulário de contato
    const form = document.getElementById('form-contato');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();
  
      if (!nome) {
        alert('Por favor, preencha seu nome.');
        form.nome.focus();
        return;
      }
  
      if (!email || !validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        form.email.focus();
        return;
      }
  
      if (!mensagem) {
        alert('Por favor, escreva sua mensagem.');
        form.mensagem.focus();
        return;
      }
  
      alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
      form.reset();
    });
  
    function validateEmail(email) {
      // Regex simples para validar email
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
  