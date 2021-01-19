import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 16px 32px;
  max-height: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: min-content 1fr auto;
  align-items: center;
  padding: 8px 0;
  border-bottom: 2px solid #ddd;
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const NameAndType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;
  margin-right: 16px;

  strong {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Room = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-right: 32px;

  svg {
    margin-right: 4px;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-right: 32px;

  span {
    margin-bottom: 4px;
  }

  svg {
    margin-right: 4px;
  }
`;

export const Button = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0bb7b7;

  outline: none;
  border: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  color: #fafafa;
`;
