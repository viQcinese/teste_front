import React from 'react';

import { Body, Container, Header } from './styles';

interface CardProps {
  header?: JSX.Element;
  bodyStyle?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ header, bodyStyle, children }) => {
  return (
    <Container>
      <Header>
        {header || (
          <>
            <span>Aprovação de acesso</span>
            <span>Pendentes: 10</span>
          </>
        )}
      </Header>
      <Body style={bodyStyle}>{children}</Body>
    </Container>
  );
};

export default Card;
