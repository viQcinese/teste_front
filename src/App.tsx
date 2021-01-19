import React, { useState } from 'react';

import { Container, Content } from './styles';
import GlobalStyle from './global';
import MenuSide from './components/MenuSide';
import ApprovalList from './components/ApprovalList';
import LastAccesses from './components/LastAccesses';
import ScheduleList from './components/ScheduleList';
import AccessIndicator from './components/AccessIndicator';
import AccessApproval from './components/AccessApproval';

const App: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [accessId, setAccessId] = useState(1);

  return (
    <Container>
      <GlobalStyle />
      <AccessApproval
        visible={isModal}
        id={accessId}
        setIsVisible={setIsModal}
      />
      <MenuSide />
      <Content>
        <ApprovalList setIsModal={setIsModal} setAccessId={setAccessId} />
        <LastAccesses />
        <ScheduleList />
        <AccessIndicator />
      </Content>
    </Container>
  );
};

export default App;
