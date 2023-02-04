import { Injectable } from '@nestjs/common';

import { FavorableEntityStore } from '../common/favorable-entity-store.class';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';

@Injectable()
export class TracksService extends FavorableEntityStore<Track> {
  create(createTrackDto: CreateTrackDto) {
    return this.add(new Track(createTrackDto));
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.updateItem(id, updateTrackDto);
  }
}
