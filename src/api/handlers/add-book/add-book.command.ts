import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class AddBookCommand {
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
}
