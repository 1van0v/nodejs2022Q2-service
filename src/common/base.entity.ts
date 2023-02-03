import { v4 as uuid } from 'uuid';

export class BaseEntity {
  id: string;

  constructor() {
    this.id = uuid();
  }
}
