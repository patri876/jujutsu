function soma() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  const soma = num1 + num2;

  document.querySelector(".display").innerHTML += `<h2>Soma é = ${soma}</h2>`;
}
