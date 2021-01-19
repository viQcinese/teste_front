import React, { useCallback, useEffect, useState } from 'react';
import { FaCar, FaSquare } from 'react-icons/fa';
import { FiClock, FiUsers, FiX } from 'react-icons/fi';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import { TiArrowShuffle } from 'react-icons/ti';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import prependZero from '../../utils/prependZero';
import Input from '../Input';
import Button from '../Button';

import {
  Background,
  Form,
  Modal,
  FormHeader,
  NameAndTitle,
  ModalHeader,
} from './styles';

const Entrada = <ImArrowUp size={20} color="#0bb7b7" />;

const Saida = <ImArrowDown size={20} color="#b70b0b" />;

const Entrega = <FaCar size={20} />;

const EntradaSaida = (
  <div style={{ position: 'relative', marginRight: 10 }}>
    <ImArrowUp
      size={16}
      color="#0bb7b7"
      style={{ margin: 0, position: 'absolute', left: 10 }}
    />
    <ImArrowDown size={16} color="#b70b0b" style={{ margin: 0 }} />
  </div>
);

const EntradaSaidaReferencia = {
  ENTRADA: Entrada,
  SAIDA: Saida,
  ENTRADA_SAIDA: EntradaSaida,
  ENTREGA: Entrega,
};

interface Dependent {
  name: string;
  avatar: string;
}

interface AccessApprovalDTO {
  name: string;
  room: number;
  avatar: string;
  reference: string;
  type_user: 'VISITANTE' | 'ENTREGA';
  status: 'ENTRADA' | 'ENTREGA' | 'SAIDA' | 'ENTRADA_SAIDA';
  dh_access: string;
  dependents: Dependent[];
}

interface ApiDTO {
  access_approval: AccessApprovalDTO;
  timestamp: number;
  elasted: number;
  status_code: number;
}

interface AccessApprovalProps {
  id: number;
  visible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccessApproval: React.FC<AccessApprovalProps> = ({
  visible,
  setIsVisible,
  id,
}) => {
  const [data, setData] = useState<AccessApprovalDTO>({} as AccessApprovalDTO);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`access-approval-detail/${id}`);
      const apiData: ApiDTO = response.data.data;
      setData(apiData.access_approval);
    }
    getData();
  }, [id]);

  const handleCloseModal = useCallback(
    (event: React.MouseEvent) => {
      const { target }: any = event;

      if (target.id === 'background' || event.currentTarget.id === 'close') {
        setIsVisible(cur => !cur);
      }
    },
    [setIsVisible],
  );

  const handleDenyAccess = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      // Todo
    },
    [],
  );

  const handleApproveAccess = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      // Todo
    },
    [],
  );

  return (
    <Background visible={visible} id="background" onClick={handleCloseModal}>
      <Modal>
        <ModalHeader>
          <span>Aprovação de acesso</span>
          <button id="close" onClick={handleCloseModal}>
            <FiX size={20} />
          </button>
        </ModalHeader>
        <Form>
          <FormHeader>
            <img src={data.avatar} alt={`Foto de ${data.name}`} />
            <NameAndTitle>
              <strong>{data.name}</strong>
              <span>{data.type_user}</span>
            </NameAndTitle>
          </FormHeader>
          <Input
            label="Destino"
            value={`QUALITY / SAGRIS SALA ${data.room}`}
            containerStyle={{ gridArea: 'room' }}
          />
          <Input
            label="Hora e data"
            value={data.dh_access && formatDate(data.dh_access)}
            containerStyle={{ gridArea: 'date', padding: '0 8px 0 0' }}
          />
          <Input
            label="Acompanhantes"
            value={data.dependents && prependZero(data.dependents.length)}
            icon={FiUsers}
            containerStyle={{
              gridArea: 'dependents',
              padding: '0 0 0 8px',
            }}
          />

          <Input
            label="Procedimento"
            value={data.status}
            iconArray={[EntradaSaidaReferencia[data.status]]}
            containerStyle={{ gridArea: 'status', padding: '0 8px 0 0' }}
          />
          <Input
            label="Permanência limite"
            value="08:00"
            icon={FiClock}
            containerStyle={{
              gridArea: 'permanence',
              padding: '0 0 0 8px',
            }}
          />
          <Input
            label="Referência"
            value={data.reference}
            iconArray={[<TiArrowShuffle size={32} color="#0bb7b7" />]}
            containerStyle={{ gridArea: 'reference' }}
            readOnly
            disabled
          />
          <Input
            label="CPF"
            value="000.000.000-00"
            containerStyle={{ gridArea: 'cpf', padding: '0 8px 0 0' }}
            readOnly
            disabled
          />
          <Input
            label="Telefone"
            value="011 9999-9999"
            containerStyle={{ gridArea: 'telephone', padding: '0 0 0 8px' }}
            readOnly
            disabled
          />
          <Input
            label="Veículo"
            value="Carro"
            containerStyle={{ gridArea: 'vehicle', padding: '0 8px 0 0' }}
            readOnly
            disabled
          />
          <Input
            label="Modelo"
            value="HB20"
            containerStyle={{ gridArea: 'model', padding: '0 0 0 8px' }}
            readOnly
            disabled
          />
          <Input
            label="Cor"
            value="Preto"
            containerStyle={{ gridArea: 'color', padding: '0 8px 0 0' }}
            iconArray={[<FaSquare size={20} color="#000" />]}
            readOnly
            disabled
          />
          <Input
            label="License"
            value="AAAA-0000"
            containerStyle={{ gridArea: 'license', padding: '0 0 0 8px' }}
            readOnly
            disabled
          />
          <Button
            onClick={handleDenyAccess}
            buttonStyle="danger"
            containerStyle={{
              gridArea: 'deny',
              marginTop: 16,
              padding: '0 8px 0 0',
            }}
          >
            NEGAR ACESSO
          </Button>
          <Button
            onClick={handleApproveAccess}
            buttonStyle="primary"
            containerStyle={{
              gridArea: 'approve',
              marginTop: 16,
              padding: '0 0 0 8px',
            }}
          >
            PERMITIR ACESSO
          </Button>
        </Form>
      </Modal>
    </Background>
  );
};

export default AccessApproval;
