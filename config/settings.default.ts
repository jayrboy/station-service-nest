export interface FileConfig {
  bucket: string;
  size: {
    width: number;
    height: number;
  };
}

export interface KafkaConfig {
  brokers: string[];
}

export interface AppConfig {
  file: {
    user: FileConfig;
    station: FileConfig;
    device: FileConfig;
    catalog: FileConfig;
    stationCatalog: FileConfig;
  };
  purchase: string;
  kafka: KafkaConfig;
}

const config: AppConfig = {
  file: {
    user: { bucket: 'profiles', size: { width: 400, height: 400 } },
    station: { bucket: 'stations', size: { width: 1200, height: 1200 } },
    device: { bucket: 'devices', size: { width: 1200, height: 1200 } },
    catalog: { bucket: 'catalogs', size: { width: 1200, height: 1200 } },
    stationCatalog: { bucket: 'catalogs', size: { width: 1200, height: 1200 } },
  },
  purchase: "apple:ginjv',kd",
  kafka: {
    brokers: (process.env.RPRO_BACKEND_KAFKA_BROKERS || 'localhost:9092').split(
      ',',
    ),
  },
};

export default config;
