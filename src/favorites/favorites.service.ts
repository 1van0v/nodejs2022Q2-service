import { Injectable } from '@nestjs/common';

import { AlbumsService } from '../albums/albums.service';
import { ArtistsService } from '../artists/artists.service';
import { TracksService } from '../tracks/tracks.service';

@Injectable()
export class FavoritesService {
  constructor(private tracksService: TracksService, private albumsService: AlbumsService, private artistsService: ArtistsService) {}

  findAll() {
    const artists = this.artistsService.getFavorite();
    const albums = this.albumsService.getFavorite();
    const tracks = this.tracksService.getFavorite();
    return { artists, albums, tracks };
  }

  removeTrackFromFavorite(id: string): void {
    this.tracksService.removeFromFavorite(id);
  }

  removeArtistFromFavorite(id: string): void {
    this.artistsService.removeFromFavorite(id);
  }

  removeAlbumFromFavorite(id: string): void {
    this.albumsService.removeFromFavorite(id);
  }

  addTrackToFavorite(id: string): void {
    this.tracksService.addToFavorite(id);
  }

  addArtistToFavorite(id: string): void {
    this.artistsService.addToFavorite(id);
  }

  addAlbumToFavorite(id: string): void {
    this.albumsService.addToFavorite(id);
  }
}
