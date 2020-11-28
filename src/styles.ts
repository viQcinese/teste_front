import { create } from 'domain';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
  }
`;

export const Container = styled.div``;
