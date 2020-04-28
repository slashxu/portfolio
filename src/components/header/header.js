// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="blue lighten-3">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/experience">Experience</NavLink></li>
      <li><NavLink to="/education">Education</NavLink></li>
      {/* <li><NavLink to="contact">Contact</NavLink></li> */}
    </Navbar>
  </Row>
);

export default Header;