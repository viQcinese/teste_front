import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#27e4e4, #17cccc, #138a93, #135a6a);
  max-width: 280px;
  min-width: 280px;
  flex: 1;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 16px 0;

  img {
    width: 90%;
  }
`;

export const PageTitle = styled.h1`
  color: #fafafa;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 10px;
`;

export const PagesList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;

  li {
    padding: 20px 0 24px 32px;
    color: #fafafa;
    font-size: 18px;
    cursor: pointer;

    &#selected {
      background: #143047;
      cursor: default;
    }
  }
`;
