import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBookQuery } from './get-book.query';
import { BookRepository } from 'src/api/repositories/book/book.repository';
import { BaseResponse } from 'src/api/responses/base.response';

@QueryHandler(GetBookQuery)
export class GetBookHandler implements IQueryHandler<GetBookQuery> {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(query: GetBookQuery): Promise<BaseResponse> {
    const { name } = query;
    const book = await this.bookRepository.findByName(name);

    return new BaseResponse(book);
  }
}
