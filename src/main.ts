import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Utility } from 'rpro-utility';
import { Kafka } from 'kafkajs';
import config from '../config/settings.default';
import eventHandler from './eventHandler';

const { Logger } = Utility;
const logger = Logger.Logger('server');
const env = process.env.NODE_ENV || 'development';

const EventSubscription = async () => {
  const groupId = 'STATION_GROUP';
  const client = new Kafka({
    brokers: config.kafka.brokers,
    clientId: groupId,
  });
  const consumer = client.consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topic: 'STATION_SERVICE', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      const valueStr = message.value?.toString('utf-8'); // แปลง Buffer เป็น string
      logger.info(`Event - ${prefix} ${message.key}#${valueStr}`);

      if (valueStr) {
        eventHandler(JSON.parse(valueStr));
      } else {
        logger.warn(`Received empty message from ${topic}`);
      }
    },
  });
  logger.info('Station service Started Successfully');
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3032;

  EventSubscription().catch((error) =>
    logger.error(`[station_service_consumer] ${error.message}`),
  );

  await app.listen(port, () => {
    logger.info(`🚀 GraphQL running at http://localhost:${port}/graphql`);
    logger.info(`Server running at http://127.0.0.1:${port}`);
    logger.info(`Environment is ${env}`);
  });
}
bootstrap();
