import { BaseEntity } from '../../common/base.entity';

export class User extends BaseEntity {
  login: string;
  password: string;
  version = 1;
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}
