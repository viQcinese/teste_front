import styled from 'styled-components';

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  div {
    margin-right: 10px;
    span:first-of-type {
      margin-right: 32px;
    }
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 16px 32px;

  max-height: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: min-content 1fr auto 120px auto min-content;
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
    font-size: 16px;
    margin-bottom: 4px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Dependents = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-right: 32px;

  svg {
    margin-right: 4px;
  }

  strong {
    padding-bottom: 10px;
  }
`;

export const EntranceExit = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-right: 32px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  svg {
    padding: 0;
    margin: 0;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  margin-right: 32px;

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
