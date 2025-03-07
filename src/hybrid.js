import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const testArrObj = [
  {
    id: uuidv4(),
    name: 'John Doe',
    age: 30,
  },
  {
    id: uuidv4(),
    name: 'Jane Doe',
    age: 25,
  },
];

export async function testFn() {
  const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  return now;
}
