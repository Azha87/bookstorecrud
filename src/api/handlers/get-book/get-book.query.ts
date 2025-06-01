import { IsNotEmpty, IsString } from 'class-validator';

export class GetBookQuery {
  @IsString()
  @IsNotEmpty()
  name: string;
}
