const form = document.getElementById("form");
const numero01 = document.getElementById("numero01");
const numero02 = document.getElementById("numero02");
const spanResultado = document.getElementById("span-resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valorNumero01 = Number(numero01.value);
  const valorNumero02 = Number(numero02.value);
  fazSoma(valorNumero01, valorNumero02);
});

function fazSoma(numero01, numero02) {
  let soma = numero01 + numero02;
  spanResultado.innerHTML = `Resultado: ${soma}`;
}
