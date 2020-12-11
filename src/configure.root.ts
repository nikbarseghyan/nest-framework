import { ConfigModule } from '@nest/config';

const env = process.env.NODE_ENV || 'development';

export const connectMongo = process.env.MONGODB_CONNECTIONS_PATH;
export const optionMongo = {
  useNewUrlParser: true,
  useUnifiebTopology: true,
};

export const configModule = ConfigModule.forRoot({
  envFilePath: `.env.${env}`,
  isGlobal: true,
});
