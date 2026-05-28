const botao = document.getElementById("btnExplorar");

botao.addEventListener("click", () => {

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

});

/* EFEITO AO ROLAR */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach((card) => {

    const posicao = card.getBoundingClientRect().top;

    if(posicao < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

/* ESTADO INICIAL */

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});
botao.addEventListener("click", () => {

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

});