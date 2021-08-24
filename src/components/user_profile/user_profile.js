// Importando o React
import React from 'react';
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../assets/foto.png';
import linkedin from '../../assets/linkedin.png';
import git from '../../assets/git.png';
import skype from '../../assets/skype.png';
import whatsapp from '../../assets/whatsapp.png';
import yahoo from '../../assets/yahoo.png';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Ségio José da Silva Júnior</h5>
        <p className="blue lighten-3 white-text">Developer</p>
      </Row>
      <Row className="center-align">
        <a href="javascript:window.open('https://www.linkedin.com/in/sergio-jose-da-silva-junior-1695a430/', '_blank')">
          <img src={linkedin} className="responsive-img" width="60" title="Linkedin" />
        </a>
        <a href="javascript:window.open('https://github.com/slashxu', '_blank')">
          <img src={git} className="responsive-img" width="60" title="Github" />
        </a>
        <a href="skype:echo123?add">
          <img src={skype} className="responsive-img" width="60" title="sergio.jose.da.silva.junior"/>
        </a>
        </Row>
      <Row className="center-align">
        <a href="javascript:window.open('https://api.whatsapp.com/send?phone=5511984091989&text=Gostaria%20de%20entrar%20em%20contato%20sobre%20um%20trabalho', '_blank')">
          <img src={whatsapp} className="responsive-img" width="60" title="11-984091989" />
        </a>        
        <a href="mailto:sergiojsjr@yahoo.com.br?" target="_top">
          <img src={yahoo} className="responsive-img" width="60" title="sergiojsjr@yahoo.com.br" />
        </a>
      </Row>
  </Card>
);

export default UserProfile;