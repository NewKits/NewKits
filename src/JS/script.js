function validar() {
    // Pega os valores dos campos
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // Se qualquer um dos campos estiver vazio, exibe um alerta e para a execução da função.
    

    // Se os campos estiverem preenchidos, faz a validação do login
    if (senha === "123456") {
        Swal.fire({
            title: 'Bem-vindo, ' + usuario + '!',
            text: 'Login realizado com sucesso.',
            icon: 'success',
            confirmButtonColor: '#4e4e4e',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                location.href = "/src/pages/about.html";
            }
        });

    } else if (!usuario || !senha) {
        Swal.fire({
            title: 'Erro',
            text: 'Por favor, preencha todos os campos.',
            icon: 'info',
            confirmButtonColor: '#4e4e4e',
            confirmButtonText: 'OK'
        })

    }
     else {
        // Se a validação falhar, exibe a mensagem de erro.
        Swal.fire({
            title: 'Erro',
            text: 'Usuário e senha inválidos.',
            icon: 'error',
            confirmButtonColor: '#4e4e4e',
            confirmButtonText: 'OK'
        });
    }

}

function comprar(){
    location.href = "comprar.html"
}

const bannerItems = [
    "../IMG/Banners/BannerPromoCamisetas.png", 
    "../IMG/Banners/BannerPromoCalcas.png",
    "../IMG/Banners/BannerPromoShorts.png"
];

let i = 0;
const tempo = 5000;
const elementoBanner = document.querySelector(".banner");

function slideshow (){
    if (!elementoBanner) {
        return;
    }
    elementoBanner.style.backgroundImage = `url(${bannerItems[i]})`;
    i++;
    if (i >= bannerItems.length) {
        i = 0;
    };
    setTimeout(slideshow, tempo);
}

if (elementoBanner) {
    slideshow();
}

const btnIcone = document.querySelector('.btn-icone');
const barraPerfil = document.querySelector('.barra-perfil');

if (btnIcone && barraPerfil) {
    btnIcone.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        barraPerfil.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!btnIcone.contains(event.target) && !barraPerfil.contains(event.target)) {
            barraPerfil.classList.remove('active');
        }
    });
}

// HAMBURGUER MENU
const hamburguer = document.querySelector('.hamburguer');
const cabecalhoMenu = document.querySelector('.cabecalho-menu');

function toggleMenu(){
    if (!hamburguer || !cabecalhoMenu) {
        return;
    }
    hamburguer.classList.toggle('active');
    cabecalhoMenu.classList.toggle('active');
}

if (hamburguer && cabecalhoMenu) {
    hamburguer.addEventListener('click', toggleMenu);
    cabecalhoMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('item-menu')) {
            toggleMenu();
        }
    });
}

// CARROSSEL DE IMAGENS
function iniciarCarrosseis() {
    const carrosseis = document.querySelectorAll('.carrossel');

    carrosseis.forEach((carrossel) => {
        const lista = carrossel.querySelector('.carrossel-lista');
        const itens = carrossel.querySelectorAll('.carrossel-item');
        const btnAnterior = carrossel.querySelector('.btn-anterior');
        const btnProximo = carrossel.querySelector('.btn-proximo');

        if (!lista || !itens.length || !btnAnterior || !btnProximo) 
            return;

        let indice = 0;
        let passo = 0;

        function calcularPasso() {
            const primeiro = itens[0];
            const estilo = window.getComputedStyle(primeiro);
            const margemX = parseFloat(estilo.marginLeft) + parseFloat(estilo.marginRight);
            passo = primeiro.getBoundingClientRect().width + margemX;
        }

        function maxIndice() {
            const itensPossiveis = Math.max(1, Math.floor(carrossel.clientWidth / passo));
            return Math.max(0, itens.length - itensPossiveis);
        }

        function atualizar() {
            lista.style.transform = 'translateX(-' + (indice * passo) + 'px)';
        }

        btnProximo.addEventListener('click', () => {
            indice = Math.min(indice + 1, maxIndice());
            atualizar();
        });

        btnAnterior.addEventListener('click', () => {
            indice = Math.max(indice - 1, 0);
            atualizar();
        });

        window.addEventListener('resize', () => {
            calcularPasso();
            indice = Math.min(indice, maxIndice());
            atualizar();
        });

        calcularPasso();
        atualizar();
    });
}

iniciarCarrosseis();