// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Chip } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../../components/user_profile/user_profile';

import Skill from '../../components/skill/skill';

const Skills = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Skills</h5>
        <Card>
          <Chip>
            <Skill name="Java" /> 
          </Chip>
          <Chip>
            <Skill name="C-Sharp" /> 
          </Chip>
          <Chip>
            <Skill name="HTML" /> 
          </Chip>
          <Chip>
            <Skill name="CSS" /> 
          </Chip>
          <Chip>
            <Skill name="Bootstrap" /> 
          </Chip>
          <Chip>
            <Skill name="JQuery" /> 
          </Chip>
          <Chip>
            <Skill name="Angular" /> 
          </Chip>
          <Chip></Chip>
          <Chip>
            <Skill name="Android" /> 
          </Chip>
          <Chip>
            <Skill name="Node" /> 
          </Chip>
          <Chip>
            <Skill name="React" /> 
          </Chip>
          <Chip>
            <Skill name="React-Native" /> 
          </Chip>
          <Chip>
            <Skill name="Xamarin" /> 
          </Chip>
          <Chip>
            <Skill name="JavaScript" /> 
          </Chip>
          <Chip>
            <Skill name="PHP" /> 
          </Chip>
          <Chip>
            <Skill name="Firebase" /> 
          </Chip>
          <Chip>
            <Skill name="SQL Server" /> 
          </Chip>
          <Chip>
            <Skill name="MySQL" /> 
          </Chip>
          <Chip>
            <Skill name="PostgreSQL" /> 
          </Chip>
          <Chip>
            <Skill name="PostGIS" /> 
          </Chip>
          <Chip>
            <Skill name="Docker" /> 
          </Chip>
          <Chip>
            <Skill name="Git" /> 
          </Chip>
          <Chip>
            <Skill name="GeoServer" /> 
          </Chip>
          <Chip>
            <Skill name="ArcGIS" /> 
          </Chip>
          <Chip>
            <Skill name="Pacote Office" /> 
          </Chip>
        </Card>
    </Col>
  </Row>
);

export default Skills;