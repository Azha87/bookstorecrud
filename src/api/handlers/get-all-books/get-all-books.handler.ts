import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/api/repositories/book/book.repository';
import { GetAllBooksQuery } from './get-all-books.query';
import { BaseResponse } from 'src/api/responses/base.response';

@QueryHandler(GetAllBooksQuery)
export class GetAllBooksHandler implements IQueryHandler<GetAllBooksQuery> {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(): Promise<BaseResponse> {
    const book = await this.bookRepository.findAll();

    return new BaseResponse(book);
  }
}
