import { HttpException, HttpStatus } from '@nestjs/common';
import * as uuid from 'uuid';

import { BaseEntity } from './base.entity';

export class EntityStore<Entity extends BaseEntity> {
  protected ids: string[] = [];
  protected items: Record<string, Entity> = {};

  add(entity: Entity): Entity {
    this.items[entity.id] = entity;
    this.ids.push(entity.id);
    return entity;
  }

  findAll(): Entity[] {
    return this.ids.map((id) => this.items[id]);
  }

  findOne(id: string): Entity | undefined {
    return this.getItem(id);
  }

  remove(id: string): void {
    const removed: Entity = this.getItem(id);
    this.ids = this.ids.filter((i) => i !== removed.id);
    delete this.items[id];
  }

  update(id: string, updates: Partial<Entity>): Entity | undefined {
    const item = this.getItem(id);

    return Object.assign(item, updates);
  }

  private getItem(id: string): Entity {
    if (!uuid.validate(id)) {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    }

    const item = this.items[id];

    if (!item) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return item;
  }
}
