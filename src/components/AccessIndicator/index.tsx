import React, { useEffect, useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';
import api from '../../services/api';
import Card from '../Card';

interface AccessIndicatorItem {
  user_access: string;
  data_access: string;
  type_access: string;
}

interface AccessIndicatorDictionary {
  [key: string]: AccessIndicatorItem[];
}

interface ApiDTO {
  access_indicator: AccessIndicatorDictionary;
  timestamp: number;
  elasted: number;
  status_code: number;
}

interface Point {
  name: string;
  people: number;
  pv: number;
  amt: number;
}

const AccessIndicator: React.FC = () => {
  const [data, setData] = useState<Point[]>([]);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const formattedDate = format(date, 'dd/LL');
    return formattedDate;
  }

  useEffect(() => {
    async function setGraphData() {
      async function getData() {
        const response = await api.get('access-indicator');
        const apiData: ApiDTO = response.data.data;
        return apiData.access_indicator;
      }

      function buildGraphData(dictionary: AccessIndicatorDictionary) {
        const entries = Object.keys(dictionary);
        const sortedDates = entries.sort();
        const points = sortedDates.map(date => ({
          name: formatDate(date),
          people: dictionary[date].length,
          pv: 1,
          amt: 1,
        }));
        return points;
      }

      const apiData = await getData();
      const graphData = buildGraphData(apiData);
      setData(graphData);
    }

    setGraphData();
  }, []);

  return (
    <Card
      header={<span>Indicador de acessor</span>}
      bodyStyle={{ padding: '16px 0' }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={640}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            name="Data"
            dataKey="name"
            fontSize={12}
            fontWeight={500}
            tickCount={100}
            tickSize={6}
            tickLine={false}
            interval={0}
            stroke="#143047"
          />
          <YAxis
            name="Pessoas"
            fontSize={12}
            tickSize={12}
            tickLine={false}
            padding={{ bottom: 8 }}
            axisLine={false}
          />

          <Line
            type="monotone"
            dataKey="people"
            stroke="#143047"
            fill="#143047"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AccessIndicator;
