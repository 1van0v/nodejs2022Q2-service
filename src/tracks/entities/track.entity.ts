import { BaseEntity } from '../../common/base.entity';
import { CreateTrackDto } from '../dto/create-track.dto';

export class Track extends BaseEntity {
  name: string;
  artistId: string | null = null;
  albumId: string | null = null;
  duration: number; // integer number

  constructor({ name, artistId, albumId, duration }: CreateTrackDto) {
    super();
    this.name = name;
    this.duration = duration;

    if (artistId) {
      this.artistId = artistId;
    }

    if (albumId) {
      this.albumId = albumId;
    }
  }
}
