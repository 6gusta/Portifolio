// Função para animação de scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPos) {
            section.classList.add('visible');
        }
    });
});

let currentIndex = 0;
const projetos = document.querySelectorAll('.projeto');
const totalProjetos = projetos.length;
const projetosVisiveis = 4; // Número de projetos para exibir ao mesmo tempo

function mostrarProjetos(index) {
    projetos.forEach((projeto, i) => {
        // Verifica se o projeto está dentro do intervalo dos 3 itens visíveis
        if (i >= index && i < index + projetosVisiveis) {
            projeto.style.display = 'block';
        } else {
            projeto.style.display = 'none';
        }
    });
}

// Mostra os três primeiros projetos na inicialização
mostrarProjetos(currentIndex);

document.getElementById('projeto-prev').addEventListener('click', () => {
    // Se o índice for menor que zero, começa a exibir do último grupo de projetos
    currentIndex = (currentIndex <= 0) ? totalProjetos - projetosVisiveis : currentIndex - 1;
    mostrarProjetos(currentIndex);
});

document.getElementById('projeto-next').addEventListener('click', () => {
    // Se o índice ultrapassar o último projeto, volta para o começo
    currentIndex = (currentIndex >= totalProjetos - projetosVisiveis) ? 0 : currentIndex + 1;
    mostrarProjetos(currentIndex);
});

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
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

// Alternar tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

 document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const idiomaToggleButton = document.getElementById('idioma-toggle');

    // Função para alternar entre os temas
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

   document.addEventListener('DOMContentLoaded', () => {
    const idiomaToggleButton = document.getElementById('idioma-toggle'); // Supondo que você tenha um botão com id "idioma-toggle"

    // Função para alternar entre os idiomas
    idiomaToggleButton.addEventListener('click', () => {
        const isPortuguese = document.documentElement.lang === 'pt-BR';
        const newLang = isPortuguese ? 'en' : 'pt-BR';
        document.documentElement.lang = newLang;

        // Trocar conteúdo do idioma
        toggleIdioma(isPortuguese);
    });

    // Função para alternar o conteúdo de idioma
    function toggleIdioma(isPortuguese) {
        if (isPortuguese) {
            document.getElementById('titulo').textContent = 'My Portfolio';
            // Continue com o restante do código...
        } else {
            document.getElementById('titulo').textContent = 'Meu Portfólio';
            // Continue com o restante do código...
        }
    }
});
