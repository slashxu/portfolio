// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';

import UserProfile from '../../components/user_profile/user_profile'
import Educations from '../../components/education/education'

import education_avatar from '../../assets/educationGreen.png';
import education_avatar2 from '../../assets/educationYellow.png';
import course_avatar from '../../assets/courseBlack.png';

const Education = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Education</h5>
        
        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Educations title="Universidade Nove de Julho (UNINOVE)"
                    company="2014"
                    description="Pós-Graduação: Gerenciamento em Banco de Dados"
                    avatar={education_avatar}
        />
        <Educations title="Universidade Hebraica Renascença (UNIESP)"
                    company="2012"
                    description="Tecnólogo: Análise de Sistemas"
                    avatar={education_avatar2}                    
        />

        <h5 className="subtitle">Courses</h5>
        
        <Educations title="Fabrica de aplicativos"                     
                    company="2021"
                    description="React.js e React-Native"
                    avatar={course_avatar}                    
        />
        <Educations title="Rockstseat"                     
                    company="2020"
                    description="Node.js, React.js e React-Native"
                    avatar={course_avatar}                    
        />
        <Educations title="Rockstseat"                     
                    company="2019"
                    description="Node.js, React.js e React-Native"
                    avatar={course_avatar}                    
        />
        <Educations title="Alura"                     
                    company="2018"
                    description="Xamarin"
                    avatar={course_avatar}                    
        />
        <Educations title="Udemy"                     
                    company="2017"
                    description="Git e Github"
                    avatar={course_avatar}                    
        />
        <Educations title="Udemy"                     
                    company="2017"
                    description="Introdução a JavaScript"
                    avatar={course_avatar}                    
        />
        <Educations title="Udemy"                     
                    company="2017"
                    description="Curso Android Studio"
                    avatar={course_avatar}                    
        />
        <Educations title="Universidade de Guarulhos (Cursos de férias)"                     
                    company="2012"
                    description="HTML + CSS"
                    avatar={course_avatar}                    
        />
        <Educations title="CIEE"                     
                    company="2010"
                    description="Access"
                    avatar={course_avatar}                    
        />

    </Col>
  </Row>
);

export default Education;