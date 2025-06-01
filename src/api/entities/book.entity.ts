export class Book {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
  genre: string;

  static create(
    title: string,
    author: string,
    publishedDate: Date,
    genre: string,
  ): Book {
    const book = new Book();
    book.title = title;
    book.author = author;
    book.publishedDate = publishedDate;
    book.genre = genre;
    return book;
  }
}
