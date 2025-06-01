import { Global, Module } from '@nestjs/common';
import { BookRepository } from './book/book.repository';

const Repositories = [BookRepository];

@Global()
@Module({
  providers: [...Repositories],
  exports: [...Repositories],
})
export class RespositoriesModule {}
