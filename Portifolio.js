// Função para animação de scroll
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
const projetosVisiveis = 6;

function mostrarProjetos(index) {
    projetos.forEach((projeto, i) => {
        if (i >= index && i < index + projetosVisiveis) {
            projeto.style.display = 'block';
        } else {
            projeto.style.display = 'none';
        }
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
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

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

// Alternar tema (apenas com checkbox)
const checkbox = document.getElementById('modoEscuro');

// Aplica o tema salvo
if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark');
    checkbox.checked = true;
}

checkbox.addEventListener('change', function () {
    document.body.classList.toggle('dark');

    // Salva a preferência
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});
