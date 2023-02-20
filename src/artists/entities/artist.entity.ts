import { BaseEntity } from '../../common/base.entity';
import { CreateArtistDto } from '../dto/create-artist.dto';

export class Artist extends BaseEntity {
  name: string;
  grammy: boolean;

  constructor({ name, grammy }: CreateArtistDto) {
    super();
    this.name = name;
    this.grammy = grammy;
  }
}
