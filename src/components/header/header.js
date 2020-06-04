// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="blue lighten-3">
      <li><NavLink to="/portfolio">Home</NavLink></li>
      <li><NavLink to="/experience">Experience</NavLink></li>
      <li><NavLink to="/education">Education</NavLink></li>
      <li><NavLink to="/skills">Skills</NavLink></li>
      <li><a href="javascript:window.open('https://resume.io/r/qCGGThAKU')">Resume</a></li>
    </Navbar>
  </Row>
);

export default Header;