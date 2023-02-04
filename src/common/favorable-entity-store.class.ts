import { HttpException, HttpStatus } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { EntityStore } from './entity-store.class';

export class FavorableEntityStore<T extends BaseEntity> extends EntityStore<T> {
  private favorites: string[] = [];

  addToFavorite(id: string): void {
    try {
      const item = this.getItem(id);
      this.favorites.push(item.id);
    } catch (e) {
      const handledError =
        e.status === HttpStatus.NOT_FOUND ? new HttpException('Could not be favored', HttpStatus.UNPROCESSABLE_ENTITY) : e;

      throw handledError;
    }
  }

  removeFromFavorite(id: string): void {
    this.favorites = this.favorites.filter((i) => i !== id);
  }

  getFavorite(): T[] {
    return this.favorites.map((id) => this.getItem(id));
  }

  override remove(id: string): void {
    super.remove(id);

    if (this.favorites.includes(id)) {
      this.removeFromFavorite(id);
    }
  }
}
