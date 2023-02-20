import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Artist } from './artists/entities/artist.entity';
import { CreateArtist1676927825460 } from '../db/migrations/1676927825460-create-artist';
import { User } from './users/entities/user.entity';
import { createUser1676937686925 } from '../db/migrations/1676937686925-create-user';

config();
const { DB_URL, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: DB_URL,
  port: +DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Artist, User],
  migrations: [CreateArtist1676927825460, createUser1676937686925],
};

export default new DataSource(dataSourceOptions);
