// Função para animação de digitação
function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

// Função para ativar o menu de navegação
function ativacaoMenu() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

// Função para alternar as seções "Sobre Mim" e "Educação"
function sobreMim() {
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li');
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li');

    // Função genérica para alternar entre as seções e botões
    function slideShow(elementos, botoes) {
        elementos[0].classList.add('ativo');
        botoes[0].classList.add('ativo');

        botoes.forEach((item, index) => {
            item.addEventListener('click', () => {
                elementos.forEach((divisao) => {
                    divisao.classList.remove('ativo');
                });
                botoes.forEach((item) => {
                    item.classList.remove('ativo');
                });
                elementos[index].classList.add('ativo');
                item.classList.add('ativo');
            });
        });
    }

    slideShow(experiencia, botao); // Alternar as seções "Experiência"
    slideShow(education, botaoEducation); // Alternar as seções "Educação"
}

// Ativar a função "sobreMim"
sobreMim();

const buttonGeral = document.querySelectorAll('.project_navegacao li');
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');

// Função para mostrar projetos com base no botão clicado
function showLista(buttom) {
    listaALL.forEach((item) => {
        item.classList.remove('ativo');
    });

    if (buttom === 'all') {
        listaALL.forEach((item) => {
            item.classList.add('ativo');
        });
    } else {
        listaALL.forEach((item, index) => {
            if (item.classList.contains(buttom)) {
                item.classList.add('ativo');
            }
        });
    }
}

// Adicionar eventos de clique aos botões do portfólio
buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
        const currentButton = e.target.classList[0];
        showLista(currentButton);
    });
});
