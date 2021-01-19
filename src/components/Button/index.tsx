import React, { ButtonHTMLAttributes } from 'react';
import { Container, ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: 'primary' | 'danger';
  containerStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  containerStyle,
  buttonStyle,
  children,
  ...rest
}) => {
  return (
    <Container style={containerStyle}>
      <ButtonComponent {...rest} buttonStyle={buttonStyle}>
        {children}
      </ButtonComponent>
    </Container>
  );
};

export default Button;
