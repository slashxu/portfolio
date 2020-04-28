// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Chip } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const Skill = (props) => (
  
  <Chip>
      { props.name }
  </Chip>
);

export default Skill;