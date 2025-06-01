import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetBookQuery } from '../../handlers/get-book/get-book.query';
import { GetAllBooksQuery } from '../../handlers/get-all-books/get-all-books.query';
import { AddBookCommand } from '../../handlers/add-book/add-book.command';
import { UpdateBookCommand } from '../../handlers/update-book/update-book.command';
import { DeleteBookCommand } from '../../handlers/delete-book/delete-book.command';

@Controller('books')
export class BookController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  getAllBooks(@Query() query: GetAllBooksQuery) {
    return this.queryBus.execute(query);
  }

  @Get('/search')
  getBookbyName(@Query() query: GetBookQuery) {
    return this.queryBus.execute(query);
  }

  @Put()
  addBook(@Body() command: AddBookCommand) {
    return this.commandBus.execute(command);
  }

  @Patch('/:id')
  updateBook(@Body() command: UpdateBookCommand, @Param('id') id: number) {
    command.id = id;
    return this.commandBus.execute(command);
  }

  @Delete('/:id')
  deleteBook(@Body() command: DeleteBookCommand, @Param('id') id: number) {
    command.id = id;
    return this.commandBus.execute(command);
  }
}
