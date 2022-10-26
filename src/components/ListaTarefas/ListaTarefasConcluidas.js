import { useState } from "react";
import {
  ListaContainer,
  ListaTarefasContainer,
  ItemRiscado,
  LinhaHorizontal,
  PEstilizado
} from "./styled";

export function ListaTarefasConcluidas(props) {
  return (
    <ListaTarefasContainer>
      <ListaContainer>
        <ul>
          {props.listaTransparente.map((novaTarefa, index) => {
            return (
              <ItemRiscado key={index}>
                <p>{novaTarefa}</p>
              </ItemRiscado>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
    </ListaTarefasContainer>
  );
}
