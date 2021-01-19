import React from 'react';

import logo from '../../assets/logo.png';
import { Container, LogoContainer, PagesList, PageTitle } from './styles';

const MenuSide: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="company logo" />
      </LogoContainer>
      <PageTitle>
        <p>Empresa A - Sala 210</p>
        <p>João Alves</p>
      </PageTitle>
      <PagesList>
        <li id="selected">Home</li>
        <li>Agendamentos</li>
        <li>Cadastro</li>
        <li>Report</li>
        <li>Sair</li>
      </PagesList>
    </Container>
  );
};

export default MenuSide;
