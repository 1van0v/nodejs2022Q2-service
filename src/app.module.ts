import { Module } from '@nestjs/common';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [ArtistsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
