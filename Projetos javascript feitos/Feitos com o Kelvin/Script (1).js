let totalAlunos = 30;
let somaMedias = 150;
let aprovados = 25;
let reprovados = 5;

while (true) {
  let nome = prompt("Digite o nome do aluno:");

  let nota1 = Number(prompt("Digite a 1 nota de " + nome + ":"));
  let nota2 = Number(prompt("Digite a 2 nota de " + nome + ":"));
  let nota3 = Number(prompt("Digite a 3 nota de " + nome + ":"));

  // Calcula a média
  let media = (nota1 + nota2 + nota3) / 3;

  // média do aluno
  alert("A média de " + nome + " é: " + media);

  // Verifica se foi aprovado ou reprovado
  if (media >= 7) {
    aler("certo" + nome + "  vc foi APROVADO! Boa sorte no próximo ano!");
    aprovados = aprovados + 1;
  } else {
    alert(" " + nome + " vc foi REPROVADO! Vai repetir de ano!");
    reprovados = reprovados + 1;
  }

  // Conta alunos e soma das médias
  totalAlunos = totalAlunos + 1;
  somaMedias = somaMedias + media;

  // Pergunta se quer continuar
  let continuar = prompt("Vai cadastrar um aluno? (sim/não)");

  if (continuar == "não" || continuar == "Nao" || continuar == "NAO") {
    break;
  }
  alert("é apenas sim ou não");
  continuar = prompt("tente novamente");
}

// resultado final
if (totalAlunos > 0) {
  let mediaGeral = somaMedias / totalAlunos;

  alert(
    "== RESULTADO FINAL ==\n" +
      "Total de alunos: " +
      totalAlunos +
      "\n" +
      "Aprovados: " +
      aprovados +
      "\n" +
      "Reprovados: " +
      reprovados +
      "\n" +
      "Média geral da turma: " +
      mediaGeral
  );
} else {
  alert(" 0 alunos foi cadastrado");
}
