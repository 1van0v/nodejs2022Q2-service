import { Controller, Get, Post, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Post('track/:id')
  favorTrack(@Param('id') id: string) {
    this.favoritesService.addTrackToFavorite(id);
  }

  @Post('album/:id')
  favorAlbum(@Param('id') id: string) {
    this.favoritesService.addAlbumToFavorite(id);
  }

  @Post('artist/:id')
  favorArtists(@Param('id') id: string) {
    this.favoritesService.addArtistToFavorite(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('track/:id')
  disfavorTrack(@Param('id') id: string) {
    this.favoritesService.removeTrackFromFavorite(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('album/:id')
  disfavorAlbum(@Param('id') id: string) {
    this.favoritesService.removeAlbumFromFavorite(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('artist/:id')
  disfavorArtists(@Param('id') id: string) {
    this.favoritesService.removeArtistFromFavorite(id);
  }
}
