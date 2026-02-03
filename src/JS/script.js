function validar() {
    // Pega os valores dos campos
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // Se qualquer um dos campos estiver vazio, exibe um alerta e para a execução da função.
    

    // Se os campos estiverem preenchidos, faz a validação do login
    if (usuario === "Admin") {
        alert("Bem-vindo!");
        // Redireciona para a página principal
        location.href = "./src/pages/home.html";

    } else if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");

    }
     else {
        // Se a validação falhar, exibe a mensagem de erro.
        alert("Usuário e senha inválidos.");
    }

}

function comprar(){
    location.href = "comprar.html"
}

// SlideShow
// const banner = [ 
//     {imagem: "./src/assets/IMG/streetwear"}, 
//     {imagem: "./src/assets/IMG/BannerCamisetas"}, 
//     {imagem: "./src/assets/img/BannerShorts"}
// ];

const bannerItems = [
    "./src/IMG/BannerPromoCamisetas.png", 
    "./src/IMG/BannerPromoCalcas.png",
    "./src/IMG/BannerPromoShorts.png"
];

let i = 0;
const tempo = 5000;
const elementoBanner = document.querySelector(".banner");

function slideshow (){
    elementoBanner.style.backgroundImage = `url(${bannerItems[i]})`;
    i++;
    if (i >= bannerItems.length) {
        i = 0;
    };
    setTimeout(slideshow, tempo);
}

slideshow();