import { Global, Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { CqrsModule } from '@nestjs/cqrs';

const Controllers = [BookController];
@Global()
@Module({
  imports: [CqrsModule],
  controllers: [...Controllers],
})
export class ControllersModule {}
