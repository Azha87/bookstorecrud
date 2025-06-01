import { Global, Module } from '@nestjs/common';
import { GetBookHandler } from './get-book/get-book.handler';
import { GetAllBooksHandler } from './get-all-books/get-all-books.handler';
import { AddBookHandler } from './add-book/add-book.handler';
import { UpdateBookHandler } from './update-book/update-book.handler';
import { DeleteBookHandler } from './delete-book/delete-book.handler';
import { RespositoriesModule } from '../repositories/repositories.module';

const Handlers = [
  GetBookHandler,
  GetAllBooksHandler,
  AddBookHandler,
  UpdateBookHandler,
  DeleteBookHandler,
];

@Global()
@Module({
  imports: [RespositoriesModule, ...Handlers],
  exports: [...Handlers],
})
export class HandlerModule {}
