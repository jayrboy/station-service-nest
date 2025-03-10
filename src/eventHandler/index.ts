import findByCode from './find_by_code';

export default function handleMessage(message: {
  type: string;
  stationCode?: string;
  transaction?: string;
}) {
  switch (message.type) {
    case 'STATION_FIND_BY_CODE':
      if (message.stationCode && message.transaction) {
        findByCode({
          stationCode: message.stationCode,
          transaction: message.transaction,
        });
      } else {
        console.error(
          'Missing required properties: stationCode or transaction',
        );
      }
      break;
    default:
      break;
  }
}
