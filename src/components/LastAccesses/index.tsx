import React, { useEffect, useState } from 'react';
import { FiClock, FiUsers } from 'react-icons/fi';
import { FaCar, FaEye } from 'react-icons/fa';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import formatDate from '../../utils/formatDate';
import capitalizeString from '../../utils/capitalizeString';
import prependZero from '../../utils/prependZero';
import api from '../../services/api';

import {
  List,
  Item,
  NameAndType,
  Dependents,
  Time,
  Avatar,
  EntranceExit,
  Button,
  CardHeader,
} from './styles';
import Card from '../Card';

interface Dependent {
  name: string;
  avatar: string;
}

interface LastAccessItem {
  id: number;
  name: string;
  approved_by: string;
  avatar: string;
  status: 'SAIDA' | 'ENTRADA' | 'ENTRADA_SAIDA' | 'ENTREGA';
  dh_access: string;
  dependents: Dependent[];
}

interface ApiDTO {
  last_access: LastAccessItem[];
  timestamp: number;
  elasted: number;
  status_code: number;
}

const Entrada = (
  <>
    <div>
      <ImArrowUp size={20} color="#0bb7b7" />
    </div>
    <span>Entrada</span>
  </>
);

const Saida = (
  <>
    <div>
      <ImArrowDown size={20} color="#b70b0b" />
    </div>
    <span>Saída</span>
  </>
);

const Entrega = (
  <>
    <div>
      <FaCar size={20} />
    </div>
    <span>Entrega</span>
  </>
);

const EntradaSaida = (
  <>
    <div>
      <ImArrowUp size={20} color="#0bb7b7" />
      <ImArrowDown size={20} color="#b70b0b" />
    </div>
    <span>Entrada-Saída</span>
  </>
);

const EntradaSaidaReferencia = {
  ENTRADA: Entrada,
  SAIDA: Saida,
  ENTRADA_SAIDA: EntradaSaida,
  ENTREGA: Entrega,
};

const LastAccesses: React.FC = () => {
  const [data, setData] = useState<LastAccessItem[]>([] as LastAccessItem[]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('last-access');
      const apiData: ApiDTO = response.data.data;
      setData(apiData.last_access);
    }
    getData();
  }, []);

  const header = (
    <CardHeader>
      <span>Últimos acessos</span>
      <div>
        <span>Ver tudo</span>
        <span>{`Total: ${data.length}`}</span>
      </div>
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
              <span>
                {`Aprovado por: ${capitalizeString(item.approved_by)}`}
              </span>
            </NameAndType>
            <Dependents>
              <FiUsers size={24} />
              {item.dependents.length > 0 ? (
                prependZero(item.dependents.length)
              ) : (
                <strong>__</strong>
              )}
            </Dependents>
            <EntranceExit>{EntradaSaidaReferencia[item.status]}</EntranceExit>
            <Time>
              <FiClock size={20} />
              {formatDate(item.dh_access)}
            </Time>
            <Button>
              <FaEye size={24} />
            </Button>
          </Item>
        ))}
      </List>
    </Card>
  );
};

export default LastAccesses;
