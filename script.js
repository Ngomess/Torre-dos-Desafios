const bosses = [
  { nome: "Kitana", vida: 80, dano: 12 },
  { nome: "Reptile", vida: 100, dano: 14 },
  { nome: "Kung Lao", vida: 120, dano: 16 },
  { nome: "Kabal", vida: 140, dano: 18 },
  { nome: "Sub-Zero", vida: 160, dano: 20 },
  { nome: "Scorpion", vida: 180, dano: 22 },
  { nome: "Shinnok", vida: 200, dano: 24 },
  { nome: "Shao Kahn", vida: 250, dano: 30 }
];

function jogarFase(fase) {
  let jogadorVida = 100;
  const boss = bosses[fase - 1];
  let bossVida = boss.vida;

  alert(`FASE ${fase} - Inimigo: ${boss.nome}`);

  while (jogadorVida > 0 && bossVida > 0) {
    let escolha = prompt(
      `Você está lutando contra ${boss.nome}!\nSua vida: ${jogadorVida}\nVida do chefe: ${bossVida}\n\nEscolha:\n1 - Atacar\n2 - Defender\n3 - Sair`
    );

    if (escolha === "1") {
      bossVida -= 20;
      alert(`Você atacou ${boss.nome}! Vida restante dele: ${bossVida}`);
    } else if (escolha === "2") {
      alert("Você defendeu! Vai receber menos dano.");
    } else if (escolha === "3") {
      alert("Você esta saindo do jogo")
       return false;
    } else {
      alert("Escolha incorreta!");
      continue;
    }

    let danoBoss = boss.dano;
    if (escolha === "2") {
      danoBoss = Math.floor(danoBoss / 2);
    }

    jogadorVida -= danoBoss;
    alert(`${boss.nome} atacou você! Sua vida agora é: ${jogadorVida}`);
  }

  if (jogadorVida <= 0) {
    alert(`Você foi derrotado por ${boss.nome}. Game Over!`);
    return false;
  } else {
    alert(`Você venceu ${boss.nome}! Prepare-se para a próxima fase.`);
    return true;
  }
}

function iniciarJogo() {
  alert("Bem-vindo ao Mortal Kombat!");
  for (let fase = 1; fase <= bosses.length; fase++) {
    let venceu = jogarFase(fase);
    if (!venceu) {
      alert("Você perdeu. Tente novamente.");
      return;
    }
  }

  alert("Parabéns! Você derrotou todos os chefes de Mortal Kombat!");
}
iniciarJogo();