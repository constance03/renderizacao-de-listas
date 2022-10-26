import { ListaTarefas } from "./components/ListaTarefas";
import { ListaTarefasConcluidas } from "./components/ListaTarefas/ListaTarefasConcluidas";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaTransparente, setListaTransparente] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const teclaEnter = (event) => {
    if (event.key === "Enter") {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  };

  const removeTarefa = (tarefa) => {
    const elementoExcluido = lista.filter((item) => item === tarefa);
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setListaTransparente([...listaTransparente, elementoExcluido]);
    setLista(listaFiltrada);
  };

  return (
    <div>
      <GlobalStyle />
      <ListaTarefas
        lista={lista}
        novaTarefa={novaTarefa}
        removeTarefa={removeTarefa}
        adicionaTarefa={adicionaTarefa}
        onChangeTarefa={onChangeTarefa}
        teclaEnter={teclaEnter}
      />
      <ListaTarefasConcluidas listaTransparente={listaTransparente} />
    </div>
  );
}

export default App;
