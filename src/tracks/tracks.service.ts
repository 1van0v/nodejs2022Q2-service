import { Injectable } from '@nestjs/common';

import { EntityStore } from '../common/entity-store.class';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';

@Injectable()
export class TracksService extends EntityStore<Track> {
  create(createTrackDto: CreateTrackDto) {
    return this.add(new Track(createTrackDto));
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.updateItem(id, updateTrackDto);
  }
}
