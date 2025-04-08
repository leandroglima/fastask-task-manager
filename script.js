function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const categoria = document.getElementById("categoriaTarefa").value;
  const lista = document.getElementById("listaDeTarefas");

  const texto = input.value.trim();
  if (texto === "") return;

  // Criar item
  const item = document.createElement("li");
  item.textContent = `${texto} [${categoria.charAt(0).toUpperCase() + categoria.slice(1)}]`;

  lista.appendChild(item);
  input.value = "";

  // Atualiza o contador
  const contador = document.getElementById(`contador-${categoria}`);
  const atual = parseInt(contador.textContent.match(/\d+/)[0]);
  contador.textContent = `(${atual + 1})`;
}
