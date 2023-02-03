import { Injectable } from '@nestjs/common';

import { TracksService } from '../tracks/tracks.service';
import { EntityStore } from '../common/entity-store.class';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService extends EntityStore<Album> {
  constructor(private tracksService: TracksService) {
    super();
  }

  create(createAlbumDto: CreateAlbumDto) {
    return this.add(new Album(createAlbumDto));
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.updateItem(id, updateAlbumDto);
  }

  override remove(id: string) {
    super.remove(id);
    this.tracksService.updateWhere({ albumId: id }, { albumId: null });
  }
}
