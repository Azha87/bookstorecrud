import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/api/repositories/book/book.repository';
import { BaseResponse } from 'src/api/responses/base.response';
import { DeleteBookCommand } from './delete-book.command';

@CommandHandler(DeleteBookCommand)
export class DeleteBookHandler implements ICommandHandler<DeleteBookCommand> {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(command: DeleteBookCommand): Promise<BaseResponse> {
    const { id } = command;
    await this.bookRepository.delete(id);

    return new BaseResponse();
  }
}
