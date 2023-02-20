import { IsNumber, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  year: number;

  @IsOptional()
  @IsUUID()
  artistId: string | null; // refers to Artist
}
