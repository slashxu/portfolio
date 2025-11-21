// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

import UserProfile from '../../components/user_profile/user_profile'
import Experience from '../../components/experience/experience'

import company_avatar from '../../assets/companyBlue.png';
import company_avatar1 from '../../assets/companyRoxo.png';
import company_avatar2 from '../../assets/companyGreen.png';
import company_avatar3 from '../../assets/companyOrange.png';
import company_avatar4 from '../../assets/companyBlack.png';

const Experiences = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Experiences</h5>
        
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
         <Experience title="Analista de Sistemas e desenvolvimento - Mobile Híbrido"
                    company="Coopersystem 2022 a presente"
                    description="Atuando como desenvolvedor no App de Investimentos do banco do Brasil, criando integracao do módulo da Brasilperv feito em React-Native com App Nativo (Java/Kotin), fazendo consumo de Bundles.
                    Em 2024, comecei atuar como analista no projeto da Plataforma, usando Angular 17 e no app Mobile no módulo da Brasilprev."
                    avatar={company_avatar4}
        />
        <Experience title="Analista de desenvolvimento"
                    company="Cocal Energia Resposável 2020 a 2022"
                    description="Atuando como Fullstack, dando manutenção nos sistemas internos da empresa e criação de novos módulos, usando linguagem Java para front-end e framework SpringBoot para Backend.
                    Integrações com ODI (Oracle Data Integrator).
                    Manutenção em aplicativo mobile em Java.
                    Criação de queries para Sistema de Relatórios em PHP."
                    avatar={company_avatar2}
        />
        <Experience title="Developer"
                    company="Soulcore 2018 a 2020"
                    description="Atuando como freelancer no desenvolvimento (SIG) Sistema de Informações Geográficas usando as linguagens: HTML, CSS, Bootstrap, JavaScript, GitLab, PostgreSQL, PostGIS, GeoServer e Docker.
                    Publicação de mapas e styles usando GeoServer;
                    Geração de scripts geo-espaciais usando PostgresSQL e PostGIS;
                    Implantação em cliente usando Docker."
                    avatar={company_avatar}
        />
        <Experience title="Analista de Sistemas"
                    company="Millenio Serviços Técnicos 2014 a 2018"
                    description="Atuando com sistemas de recadastramento municipal nas plataformas Desktop e Mobile para os projetos das seguintes cidades: Rio de Janeiro - RJ, Cambuci - RJ, Mesquita - RJ, Guarulhos – SP, Pariquera – SP, São Bernardo do Campo – SP, Diadema – SP.
                    Atuação em projetos com os seguintes sistemas Desktop:
                        • INCAD – Sistema de coleta de dados para revisão cadastral utilizando as linguagens C Sharp e SQL Server  2008;
                        • SRCM – Sistema de Revisão Cadastral Municipal utilizando as linguagens C Sharp e SQL Server  2008;
                        • CadImob – Sistema de importação e exprtação de dados utilizando as linguagens C Sharp e SQL Server 2008;
                        • SNG – Sistema de notificações de Guarulhos, utilizando as linguagens C Sharp e SQL Server 2008;
                        • SNSBC – Sistema de notificações de São Bernardo do Campo, utilizando as linguagens PHP, HTML, CSS, PostgreSQL e Oracle 11G;
                        • Sistema Mobile: CadImob – Sistema de coletagem de informações de cadastro em campo, desenvolvido na plataforma Android para tablets, utilizando Xamarin (Mono para Android) nas linguagens C Sharp e SQL Server 2008. "
                    avatar={company_avatar3}                    
        />
        <Experience title="Developer"
                    company="Brasil Partners 2010 a 2014"
                    description="Responsável pela infra-estrutura, backups, active directory, segurança da informação, manutenção de micros, suporte a usuários e treinamento aplicado aos estagiários com relação a infra-estrutura, geração de relatórios, implantação de sistema Open Source de chamados Help Desk. 
                    Promovido a Analista de Sistemas Junior em 01/2013, atuando em projetos de cidades como: Manaus, Porto Velho, Jundiai e Cotia.
                    Testes de softwares, implantações em cliente, preparação de ambientes para desenvolvimento, criação de manuais de produtos fornecidos ao cliente.
                    Atuação em projetos com os seguintes sistemas Desktop: 
                        • Sistema de Rasterização de fotos e atualização em banco de dados, com  as linguagens C sharp e MySQL
                        • Sistema Progeo - Desktop Gis: carregamento de MXDs, layers, medições, mapa. 
                        • Projetos Web: SIG-Manaus atuando com as linguagens HTML, CSS, Javascript, ArcGis Development e Oracle 11G;
                        • WebSat - atualização cadastral com as linguagens, C sharp, HTML, CSS, JQuery e Oracle 11G;
                        • GLPI - Sistema  Help Desk de cadastros de chamados internos e externos com PHP, HTML,CSS e MySQL."
                    avatar={company_avatar1}                    
        />
        {/* <Experience title="React-Native Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={company_avatar4}                    
        /> */}
        
    </Col>
  </Row>
);

export default Experiences;