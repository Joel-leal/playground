const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const clickButton = document.getElementById('criar-tarefa');
const RemoverTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const removerItem = document.getElementById('remover-selecionado');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');

// REQUISITO 5
function addElementoTarefa() {
  if (textoTarefa.value !== '') {
    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = textoTarefa.value;
    listaTarefa.appendChild(novaTarefa);
    textoTarefa.value = '';
  }
}
clickButton.addEventListener('click', addElementoTarefa);

// REQUISITO 7
function selectedCinza(event) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
listaTarefa.addEventListener('click', selectedCinza);

// REQUISITO 9
function letraRiscada(event) {
  const addRisco = event.target.classList.contains('completed');
  if (addRisco) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefa.addEventListener('dblclick', letraRiscada);

// function limpaLista() {
//   for (let i = itenList.length - 1; i >= 0; i -= 1) {
//     listaTarefa.removeChild(itenList[i]);
//   }
// }

// REQUISITO 10
function limpaLista() {
  listaTarefa.innerText = '';
}
RemoverTudo.addEventListener('click', limpaLista);

// REQUISITO 11
function apagarTarefasFinalizadas() {
  const limparLista = document.querySelectorAll('.completed');
  for (let i = 0; i < limparLista.length; i += 1) {
    limparLista[i].remove();
  }
}

removerFinalizados.addEventListener('click', apagarTarefasFinalizadas);

// REQUISITO 12
function salvar() {
  const salvar = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('tarefas', salvar);
}

function iniciandoTarefas() {
  if (localStorage.getItem('tarefas') !== '') {
    listaTarefa.innerHTML = localStorage.getItem('tarefas');
  }
}
salvarTarefas.addEventListener('click', salvar);

window.onload = function () {
  iniciandoTarefas();
};

// REQUISITO 13
function itemUp() { ent.querySelector('.selected');
  if (itemSelected !== null && itemSelected.previousSibling !== null) {
    itemSelected.parentNode.insertBefore(itemSelected, itemSelected.previousSibling);
  }
}
// previousSibling = Retorna o nó que precede o nó especificado na lista de childNodes do nó pai, retorna null se o nó especificado é o primeiro desta lista.
up.addEventListener('click', itemUp);

function itemDown() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null && itemSelected.nextSibling !== null) {
    itemSelected.parentNode.insertBefore(itemSelected.nextSibling, itemSelected);
  }
}
down.addEventListener('click', itemDown);

// nestSibling = Retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai(childNodes), ou null se o nó especificado for o último nó da lista.

// REQUISITO 14

function cleanItem() {
  const previousTask = document.querySelector('.selected');
  previousTask.remove();
}
removerItem.addEventListener('click', cleanItem);
