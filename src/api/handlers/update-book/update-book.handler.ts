import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/api/repositories/book/book.repository';
import { BaseResponse } from 'src/api/responses/base.response';
import { UpdateBookCommand } from './update-book.command';
import { Book } from 'src/api/entities/book.entity';

@CommandHandler(UpdateBookCommand)
export class UpdateBookHandler implements ICommandHandler<UpdateBookCommand> {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(command: UpdateBookCommand): Promise<BaseResponse> {
    const { id, title, author, publishedDate, genre } = command;

    const updatedBook = Book.create(title, author, publishedDate, genre);
    const res = await this.bookRepository.update(id, updatedBook);

    return new BaseResponse(res);
  }
}
