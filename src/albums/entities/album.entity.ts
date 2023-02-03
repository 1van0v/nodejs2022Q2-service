import { BaseEntity } from '../../common/base.entity';
import { CreateAlbumDto } from '../dto/create-album.dto';

export class Album extends BaseEntity {
  name: string;
  year: number;
  artistId: string | null = null; // refers to Artist

  constructor({ name, year, artistId }: CreateAlbumDto) {
    super();
    this.name = name;
    this.year = year;

    if (artistId) {
      this.artistId = artistId;
    }
  }
}
