import { format } from 'date-fns';

const date = (year) => {
  if (year) {
    return format(new Date(year), 'yyyy');
  }
};

export default date;
