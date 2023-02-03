import { IsNumber, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  year: number;

  @IsUUID()
  artistId: string | null; // refers to Artist
}
