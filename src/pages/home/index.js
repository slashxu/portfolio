// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../../components/user_profile/user_profile'

import Rogai from '../../assets/rogai.png';
import Dbrix from '../../assets/dbrix.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p>"Desenvolvendo aplicações a mais de 9 anos, usando linguagens como: C#, Java, kotlin, React.js e React-Native."</p>
            <br/>
            <p><b>QUALIFICAÇÕES PESSOAIS</b></p>
            <p>Facilidade de trabalho em Equipe, organizado, empreendedor e em busca de novos desafios. 
                Conhecimentos em PHP, HTML, Jquery, C Sharp, Access, MySQL, PostgreSQL, Oracle 11G, SQL Server, GeoServer, Docker, Git, JavaScript, Bootstrap, Angular, Mobile (Java, React-native e Xamarim).</p>
          </div>
        </Card>
        <h5 className="subtitle">Published App</h5>        
        
        <Card>
        <div class="row valign-wrapper">
          <div class="col s2">
          <a href="javascript:window.open('https://play.google.com/store/apps/details?id=com.soliwork.vamosorar', '_blank')">
            <img src={Rogai} className="responsive-img" width="60" title="Ir para PlayStore" />
            </a>
          </div>
          <div class="col s10">
              <span class="black-text">
                Aplicativo para android chamado "<b>Rogai</b>", desenvolvido na linguagem Java Nativo usando Android Studio. Obs.: Esta fora do ar, em manutencao..
              </span>
            </div>          
          </div>
          <div class="row valign-wrapper">
            <div class="col s2">
              <a href="javascript:window.open('https://play.google.com/store/apps/details?id=com.soliwork.dbrix', '_blank')">
                <img src={Dbrix} className="responsive-img" width="60" title="Ir para PlayStore" />
              </a>
            </div>
            <div class="col s10">
              <span class="black-text">
                Aplicativo para android chamado "<b>Dbrix</b>", desenvolvido em React-Native. Obs.: Esta fora do ar, em manutencao..
              </span>
            </div>
          </div>
        </Card>
    </Col>

  </Row>
);

export default Home;