import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TracksService } from '../tracks/tracks.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private artistsRepository: Repository<Artist>,
    private tracksService: TracksService,
  ) {}

  findAll(): Promise<Artist[]> {
    return this.artistsRepository.find();
  }

  findOne(id: string): Promise<Artist> {
    return this.artistsRepository.findOneBy({ id });
  }

  async create(createArtistDto: CreateArtistDto) {
    const artist = await this.artistsRepository.save(createArtistDto);
    return artist;
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    this.artistsRepository.update(id, updateArtistDto);
    return this.artistsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.artistsRepository.delete(id);
    this.tracksService.updateWhere({ artistId: id }, { artistId: null });
  }
}
