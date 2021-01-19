import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

interface ButtonComponentProps {
  buttonStyle: 'primary' | 'danger';
}

const typeColors = {
  danger: '#b70b0b',
  primary: '#0bb7b7',
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => typeColors[props.buttonStyle]};

  outline: none;
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fafafa;
`;
