import { Injectable } from '@nestjs/common';
import { Utility, Services } from 'rpro-utility';

import packageJson from '.././package.json';

// import axios from 'axios';
// import * as DataLoader from 'dataloader';
// import * as Elasticsearch from 'elasticsearch';
// import * as GeneratePassword from 'generate-password';
// import * as hexTo32 from 'hex-to-32';
// import IORedis from 'ioredis';
// const redis = new IORedis();
// import * as Jwt from 'jsonwebtoken';
// import * as Kafka from 'kafkajs';
// import _ from 'lodash';
// import * as Minio from 'minio';
// import moment from 'moment';
// import client from 'prom-client';
// import speakeasy from 'speakeasy';
// import { v4 as uuidv4 } from 'uuid';

// import * as winston from 'winston';
// import 'winston-daily-rotate-file';
// import { ecsFormat } from '@elastic/ecs-winston-format';

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

  async getTestLib() {
    // 1# axios
    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/todos',
    // );
    // const data = await response.data;
    // return data;
    /* -------------------- */
    // 2# dataloader
    // console.log(DataLoader);
    /* -------------------- */
    // 3# elasticsearch
    // console.log(Elasticsearch);
    /* -------------------- */
    // 4# generate-password
    // console.log(GeneratePassword);
    /* -------------------- */
    // 5# hex-to-32
    // const value = 0xdeada5;
    // const hex = value.toString(16);
    // const encoded = hexTo32.encode(hex);
    // console.log(encoded);
    // const decoded = hexTo32.decode(encoded);
    // console.log(decoded);
    /* -------------------- */
    // 6# ioredis
    // console.log(redis);
    /* -------------------- */
    // 7# jsonwebtoken
    // console.log(Jwt);
    /* -------------------- */
    // 8# kafkajs
    // console.log(Kafka);
    /* -------------------- */
    // 9# lodash
    // console.log(_);
    /* -------------------- */
    // 10# minio
    // console.log(Minio);
    /* -------------------- */
    // 11# moment
    // const test = moment().format('MMMM Do YYYY, h:mm:ss a'); // March 6th 2025, 4:28:04 pm
    // moment().format('dddd'); // Thursday
    // moment().format('MMM Do YY'); // Mar 6th 25
    // moment().format('YYYY [escaped] YYYY'); // 2025 escaped 2025
    // moment().format();
    /* -------------------- */
    // 12# prom-client
    // const collectDefaultMetrics = client.collectDefaultMetrics;
    // console.log(collectDefaultMetrics);
    // const Registry = client.Registry;
    // const register = new Registry();
    // console.log(register);
    /* -------------------- */
    // 13# speakeasy - Generate a secret key.
    // const secret = speakeasy.generateSecret({ length: 20 });
    // console.log(secret);
    /* -------------------- */
    // 14# uuid
    // console.log(uuidv4());
    /* -------------------- */
    // 15# winston
    // const logger = winston.createLogger({
    //   level: 'info',
    //   format: winston.format.json(),
    //   defaultMeta: { service: 'user-service' },
    //   transports: [
    //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //     new winston.transports.File({ filename: 'combined.log' }),
    //   ],
    // });
    // console.log(logger);
    /* -------------------- */
    // 16# winston-daily-rotate-file
    // const transport = new winston.transports.DailyRotateFile({
    //   filename: 'application-%DATE%.log',
    //   datePattern: 'YYYY-MM-DD-HH',
    //   zippedArchive: true,
    //   maxSize: '20m',
    //   maxFiles: '14d',
    // });
    // const logger = winston.createLogger({
    //   transports: [transport],
    // });
    // logger.info('Hello World!');
    // console.log(transport);
    /* -------------------- */
    // 17# winston-elasticsearch
    // const logger = winston.createLogger({
    //   format: ecsFormat(/* options */),
    //   transports: [new winston.transports.Console()],
    // });
    // console.log(logger);
  }
}
