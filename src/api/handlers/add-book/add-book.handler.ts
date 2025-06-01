import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/api/repositories/book/book.repository';
import { BaseResponse } from 'src/api/responses/base.response';
import { AddBookCommand } from './add-book.command';
import { Book } from 'src/api/entities/book.entity';

@CommandHandler(AddBookCommand)
export class AddBookHandler implements ICommandHandler<AddBookCommand> {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(body: AddBookCommand): Promise<BaseResponse> {
    const { title, author, publishedDate, genre } = body;

    const book = Book.create(title, author, publishedDate, genre);

    const res = await this.bookRepository.create(book);

    return new BaseResponse(res);
  }
}
