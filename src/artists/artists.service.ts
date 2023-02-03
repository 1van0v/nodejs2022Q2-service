import { Injectable } from '@nestjs/common';

import { EntityStore } from '../common/entity-store.class';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService extends EntityStore<Artist> {
  create(createArtistDto: CreateArtistDto) {
    return this.add(new Artist(createArtistDto));
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.updateItem(id, updateArtistDto);
  }
}
