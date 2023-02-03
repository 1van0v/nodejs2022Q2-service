import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  year: number;
  artistId: string | null; // refers to Artist
}
