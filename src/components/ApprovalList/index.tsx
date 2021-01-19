import React, { useCallback, useEffect, useState } from 'react';
import { FiClock, FiMapPin } from 'react-icons/fi';
import formatDate from '../../utils/formatDate';
import capitalizeString from '../../utils/capitalizeString';
import api from '../../services/api';

import Card from '../Card';
import {
  CardHeader,
  List,
  Item,
  NameAndType,
  Room,
  Time,
  Avatar,
  Button,
} from './styles';

interface AccessApprovalItem {
  id: number;
  name: string;
  room: number;
  avatar: string;
  type_user: 'VISITANTE' | 'ENTREGA';
  dh_access: string;
}

interface ApiDTO {
  access_approval: AccessApprovalItem[];
  timestamp: number;
  elasted: number;
  status_code: number;
}

interface ApprovalListProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAccessId: React.Dispatch<React.SetStateAction<number>>;
}

const ApprovalList: React.FC<ApprovalListProps> = ({
  setIsModal,
  setAccessId,
}) => {
  const [data, setData] = useState<AccessApprovalItem[]>(
    [] as AccessApprovalItem[],
  );

  useEffect(() => {
    async function getData() {
      const response = await api.get('access-approval');
      const apiData: ApiDTO = response.data.data;
      setData(apiData.access_approval);
    }
    getData();
  }, []);

  const handleApproveAccess = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setIsModal(true);
      setAccessId(parseInt(event.currentTarget.id));
    },
    [setIsModal, setAccessId],
  );

  const header = (
    <CardHeader>
      <span>Aprovação de acesso</span>
      <span>{`Pendentes: ${data.length}`}</span>
    </CardHeader>
  );

  return (
    <Card header={header}>
      <List>
        {data.map(item => (
          <Item key={item.id}>
            <Avatar src={item.avatar} alt={`Foto de ${item.name}`} />
            <NameAndType>
              <strong>{item.name}</strong>
              <span>{capitalizeString(item.type_user)}</span>
            </NameAndType>
            <Room>
              <FiMapPin size={20} />
              {`Sala ${item.room}`}
            </Room>
            <Time>
              <FiClock size={20} />
              {formatDate(item.dh_access)}
            </Time>
            <Button id={item.id.toString()} onClick={handleApproveAccess}>
              APROVAR
            </Button>
          </Item>
        ))}
      </List>
    </Card>
  );
};

export default ApprovalList;
