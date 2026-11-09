//Exercício

function conversor(celsius) {
  const resultado = (celsius * 9) / 5 + 32;
  return resultado;
}

let celsius = Number(
  prompt("Digite a Temperatura para converter em Fahrenheit")
);
let fahrenheit = conversor(celsius);

document.body.innerHTML += `
<h1>${celsius}°C tem a temperatura de ${fahrenheit} °F</h1`;


 


