import { Utility, Saga } from 'rpro-utility';
// import { InfoService } from '../station/station.service';

const { Logger } = Utility;
const { SagaMessage } = Saga;
const logger = Logger.Logger('station event');

export default async function findByCode(message: {
  stationCode: string;
  transaction: string;
}) {
  const groupId = 'STATION_FIND_BY_CODE';
  const event = groupId;
  const replyTopic = 'STATION_SERVICE_REPLY';
  console.log(replyTopic);

  try {
    // const station = await InfoService.findByCode(message.stationCode);
    const clsSagaMessage = new SagaMessage(groupId, message.transaction, event);
    console.log(clsSagaMessage);
    // await clsSagaMessage.sendingMessages(replyTopic, { station });
  } catch (error) {
    logger.error(error);
    throw error;
  }
}
