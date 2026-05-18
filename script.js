const joiners = [
  "Ana Paula",
  "Carlos Henrique",
  "Mariana Souza",
  "Joao Pedro",
  "Fernanda Lima",
  "Bruno Martins",
  "Camila Rocha",
  "Rafael Alves",
  "Juliana Costa",
  "Lucas Ferreira",
  "Patricia Gomes",
  "Thiago Ribeiro",
  "Aline Barbosa",
  "Marcelo Santos",
  "Bianca Oliveira",
  "Felipe Mendes",
  "Renata Nunes",
  "Gustavo Pereira",
  "Larissa Almeida",
  "Eduardo Castro",
  "theinoxx",
  "Alexandre",
  "Rainer J. O"
];

const popup = document.getElementById("joinPopup");
const nameElement = document.getElementById("joinName");
const avatarElement = document.getElementById("joinAvatar");
let joinerIndex = 0;

function showJoinPopup() {
  const currentName = joiners[joinerIndex];

  nameElement.textContent = currentName;
  avatarElement.textContent = currentName.charAt(0);
  popup.classList.add("is-visible");

  window.setTimeout(() => {
    popup.classList.remove("is-visible");
  }, 4300);

  joinerIndex = (joinerIndex + 1) % joiners.length;
}

window.setTimeout(showJoinPopup, 1400);
window.setInterval(showJoinPopup, 7600);
