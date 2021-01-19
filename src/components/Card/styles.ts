import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border-radius: 12px 12px 0 0;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  background: #143047;
  color: #fafafa;
`;

export const Body = styled.div`
  flex: 1;
  background: #eee;
  border-radius: 0 0 12px 12px;
  overflow-y: scroll;
`;
