import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  label {
    font-size: 16px;
    color: #666;
    font-weight: 500;
    white-space: nowrap;
  }
`;

interface InputContainerProps {
  disabled: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding: 0 0 0 24px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #0bb7b7;

  svg {
    color: #666;
    margin-right: 8px;
  }

  input {
    border: none;
    outline: none;
    flex: 1;
    height: 100%;
    color: #444;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
  }

  ${props =>
    props.disabled &&
    css`
      border: 1px solid #c3c3c3;
      background: #cfcfcf;

      input {
        background: #cfcfcf;
      }
    `}
`;
