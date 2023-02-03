import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [ArtistsModule, UsersModule, AlbumsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
