const referencia = new Date(2026, 5, 22); // 22/06/2026
const hoje = new Date();

referencia.setHours(0, 0, 0, 0);
hoje.setHours(0, 0, 0, 0);

const msPorDia = 1000 * 60 * 60 * 24;
const diferencaDias = Math.abs(
    Math.round((hoje - referencia) / msPorDia)
);

const nome = document.getElementById("nome");
const imagem = document.getElementById("imagem");

if (diferencaDias % 2 === 0) {
    nome.textContent = "Mari Lindinha";
    imagem.src = "img/par.jpg";
    imagem.alt = "Maria";
} else {
    nome.textContent = "João";
    imagem.src = "img/impar.jpg";
    imagem.alt = "Alandouglas";
}