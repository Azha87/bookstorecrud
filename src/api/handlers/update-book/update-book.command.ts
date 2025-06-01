import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UpdateBookCommand {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  publishedDate: Date;

  @IsNotEmpty()
  @IsString()
  genre: string;

  id: number;
}
