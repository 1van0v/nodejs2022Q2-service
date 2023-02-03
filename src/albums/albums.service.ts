import { Injectable } from '@nestjs/common';
import { EntityStore } from 'src/common/entity-store.class';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService extends EntityStore<Album> {
  create(createAlbumDto: CreateAlbumDto) {
    return this.add(new Album(createAlbumDto));
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.updateItem(id, updateAlbumDto);
  }
}
