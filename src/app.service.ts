import { Injectable } from '@nestjs/common';
import { Utility, Services } from 'rpro-utility';

import packageJson from '.././package.json';

const { VersionService } = Services;
const { KafkaHealthCheck, Redis } = Utility;
const redisClient = Redis.getInstance().getClient();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getVersion(): Promise<any> {
    async function getKafkaConnection() {
      try {
        if (typeof KafkaHealthCheck !== 'function') {
          throw new Error(
            'KafkaHealthCheck is not available in the sharing module',
          );
        }
        return (await KafkaHealthCheck()) ? 'connected' : 'disconnected';
      } catch (e) {
        console.log(e);
        return 'disconnected';
      }
    }

    const sharingModules = await VersionService.getVersion();
    const formattedServiceName = sharingModules.service.replace(/-/g, '_');
    const redisStatus = await redisClient.set('redisConnection', 'ok');
    const redisConnection = redisStatus === 'OK' ? 'connected' : 'disconnected';

    const response = {
      service: packageJson.name || 'unknown',
      version: `v${packageJson.version || 'unknown'}`,
      [formattedServiceName]: `${sharingModules.version}`,
      redis_connection: redisConnection,
      kafka_connection: await getKafkaConnection(),
    };

    return response;
  }
}
