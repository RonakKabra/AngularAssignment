import { Pipe, PipeTransform } from '@angular/core';
import { BookService } from '../services/book.service';
import {Book} from '../models/book';

@Pipe({
  name: 'deptcount'
})
export class DeptcountPipe implements PipeTransform {

  transform(books: Book[], dept:string):number {
    return books.filter((b)=>b.dept==dept).length;
  }

}
