const form = document.getElementById("form");
const spanResultado = document.getElementById("span-resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fazSoma();
});

function fazSoma() {
  const numero01 = Number(document.getElementById("numero01").value);
  const numero02 = Number(document.getElementById("numero02").value);
  
  spanResultado.innerHTML = "";
  let soma = numero01 + numero02;
  spanResultado.innerHTML = `Resultado: ${soma}`;
}
