import { Injectable } from '@nestjs/common';
import { Book } from '../../entities/book.entity';

@Injectable()
export class BookRepository {
  constructor() {}

  books: Book[] = [];

  async findAll(): Promise<Book[]> {
    await this.simmulateDataBaseCall();
    return this.books;
  }

  async findByName(name: string): Promise<Book[] | undefined> {
    await this.simmulateDataBaseCall();
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(name.toLowerCase()),
    );
  }

  async create(book: Book): Promise<number> {
    const newId = this.books.length
      ? Math.max(...this.books.map((b) => b.id)) + 1
      : 1;
    book.id = newId; // Simulating auto-increment id
    await this.simmulateDataBaseCall();
    this.books.push(book);

    return newId;
  }
  async update(id: number, updatedBook: Book): Promise<void> {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      await this.simmulateDataBaseCall();
      updatedBook.id = id;
      this.books[index] = { ...this.books[index], ...updatedBook };
    }
  }
  async delete(id: number): Promise<void> {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      await this.simmulateDataBaseCall();
      this.books.splice(index, 1);
    }
  }

  async simmulateDataBaseCall(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}
