// Animação de scroll
document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (section.offsetTop < scrollPos) {
      section.classList.add('visible');
    }
  });
});

// Carrossel de projetos
let currentIndex = 0;
const projetos = document.querySelectorAll('.projeto');
const totalProjetos = projetos.length;
const projetosVisiveis = 4;

function mostrarProjetos(index) {
  projetos.forEach((projeto, i) => {
    projeto.style.display = (i >= index && i < index + projetosVisiveis) ? 'block' : 'none';
  });
}
mostrarProjetos(currentIndex);

document.getElementById('projeto-prev').addEventListener('click', () => {
  currentIndex = (currentIndex <= 0) ? totalProjetos - projetosVisiveis : currentIndex - 1;
  mostrarProjetos(currentIndex);
});
document.getElementById('projeto-next').addEventListener('click', () => {
  currentIndex = (currentIndex >= totalProjetos - projetosVisiveis) ? 0 : currentIndex + 1;
  mostrarProjetos(currentIndex);
});

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso!');
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

// Modais
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Alternar tema (dark mode)
const checkbox = document.getElementById('modoEscuro');
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark');
  checkbox.checked = true;
}
checkbox.addEventListener('change', function () {
  document.body.classList.toggle('dark');
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'escuro' : 'claro');
});
