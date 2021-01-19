import { format } from 'date-fns';

export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = format(date, 'kk:mm - dd/LL/yyyy');
  return formattedDate;
}
