// ======== MENU RESPONSIVO ==========

function openMenu(){
  // comando que seleciona a classe no html
  let listaMenu = document.querySelector(".nav-links");
  // classList.contains verifica se tem a classe js-open
  if (listaMenu.classList.contains("js-menu")) {
      // classList.remove remove uma classe
      listaMenu.classList.remove("js-menu");
      document.querySelector(".button-mobile img").src="assets/img/menu.png"
  } else {
      // classList.add adciona uma classe
      listaMenu.classList.add("js-menu");
      document.querySelector(".button-mobile img").src="assets/img/close-button.png"
  }
}

// ========= MENSAGEM DE COOCKIES E TERMOS DE USO=============

function aceitarTermos() {
  // Salva um valor no localStorage indicando que os termos foram aceitos
  localStorage.setItem('termosAceitos', 'true');
  // Esconde o balão de termos
  document.getElementById('balloon').style.display = 'none';
}

// Verifica se os termos já foram aceitos ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  var termosAceitos = localStorage.getItem('termosAceitos');
  if (termosAceitos === 'true') {
    // Termos já foram aceitos, esconde o balão
    document.getElementById('balloon').style.display = 'none';
  }
});

console.log('oiii');

const btns = document.getElementsByClassName('btn-aside');
const sections = document.getElementsByClassName('el-section');
const currentBtns = [...btns];
const currentSections = [...sections];


const handleClick = (e) => {
e.preventDefault();
const url = e.target.getAttribute('href');
window.history.pushState(null, '', url);
const id = e.target.getAttribute('id');
const showSection = currentSections.find((el) => el.id.includes(id));
const hiddenSection = currentSections.filter((el) => !el.id.includes(id));
showSection.style.display = 'flex'
hiddenSection.forEach((el) => el.style.display = 'none');
};

currentBtns.map((el) => el.addEventListener('click', handleClick));
currentSections.forEach((el) => {
if (el.id !== '0') {
  el.style.display = 'none';
}
});