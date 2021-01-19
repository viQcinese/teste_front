import styled from 'styled-components';

interface BackgroundProps {
  visible: boolean;
}

export const Background = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);

  visibility: ${props => (props.visible ? 'default' : 'hidden')};
`;

export const Modal = styled.div`
  background: #eee;
  padding: 32px;
  border-radius: 16px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 16px;
    font-weight: 500;
    color: #555;
  }

  button {
    outline: 0;
    border: 0;
    background: transparent;
  }
`;

export const Form = styled.form`
  margin-top: 24px;
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;

  grid-template:
    'header header header header' 1fr
    'room room room room' auto
    'date date dependents d' auto
    'status status permanence p' auto
    'reference reference reference reference' auto
    'cpf cpf telephone telephone' auto
    'vehicle vehicle model model' auto
    'color color license license' auto
    'deny deny approve approve' auto;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  grid-area: header;

  img {
    width: 96px;
    height: 96px;
    border-radius: 100%;
    margin-right: 24px;
  }
`;

export const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #555;

  strong {
    margin-bottom: 8px;
  }
`;
