import { Controller, Get, Post, Body, Delete, Put, HttpStatus, HttpCode, UseInterceptors } from '@nestjs/common';
import { NotFoundInterceptor } from 'src/common/not-found.interceptor';
import { Uuid } from '../common/uuid.decorator';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptor)
  findOne(@Uuid() id: string) {
    return this.artistsService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(NotFoundInterceptor)
  update(@Uuid() id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(id, updateArtistDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseInterceptors(NotFoundInterceptor)
  remove(@Uuid() id: string) {
    return this.artistsService.remove(id);
  }
}
