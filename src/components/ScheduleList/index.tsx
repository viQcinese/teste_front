import React, { useEffect, useState } from 'react';
import formatDate from '../../utils/formatDate';
import capitalizeString from '../../utils/capitalizeString';
import api from '../../services/api';

import { List, Item, NameAndType, Time, Avatar } from './styles';
import Card from '../Card';

interface ScheduledItem {
  id: number;
  name: string;
  avatar: string;
  type_user: 'VISITANTE' | 'ENTREGA';
  dh_access: string;
}

interface ApiDTO {
  scheduled: ScheduledItem[];
  timestamp: number;
  elasted: number;
  status_code: number;
}

const ScheduleList: React.FC = () => {
  const [data, setData] = useState<ScheduledItem[]>([] as ScheduledItem[]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('scheduled');
      const apiData: ApiDTO = response.data.data;
      setData(apiData.scheduled);
    }
    getData();
  }, []);

  return (
    <Card header={<span>Programados</span>}>
      <List>
        {data.map(item => (
          <Item key={item.id}>
            <Avatar src={item.avatar} alt={`Foto de ${item.name}`} />
            <NameAndType>
              <strong>{item.name}</strong>
              <span>{capitalizeString(item.type_user)}</span>
            </NameAndType>
            <Time>
              <span>Data e hora:</span>
              {formatDate(item.dh_access)}
            </Time>
          </Item>
        ))}
      </List>
    </Card>
  );
};

export default ScheduleList;
