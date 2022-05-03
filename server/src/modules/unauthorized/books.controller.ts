import { Controller, Get, Param } from '@nestjs/common';

import books , { Book } from "../../books";

@Controller('books')
export class BooksController {
  constructor() {}

  @Get()
  async index(): Promise<Book[]> {
    return books;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Book> {
    return books.find((product) => product.id === parseInt(id));
  }
}
