import { Injectable } from '@nestjs/common';

import { TracksService } from '../tracks/tracks.service';
import { FavorableEntityStore } from '../common/favorable-entity-store.class';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService extends FavorableEntityStore<Artist> {
  constructor(private tracksService: TracksService) {
    super();
  }

  create(createArtistDto: CreateArtistDto) {
    return this.add(new Artist(createArtistDto));
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.updateItem(id, updateArtistDto);
  }

  override remove(id: string): void {
    super.remove(id);
    this.tracksService.updateWhere({ artistId: id }, { artistId: null });
  }
}
