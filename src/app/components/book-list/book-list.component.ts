import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  cseIcon:string;// this is for displaying icon relative to dept
  eceIcon:string;// this is for displaying icon relative to dept
  constructor(private bookService: BookService,
    private router:Router ) {
      this.cseIcon="/assets/CSE.png";// this is for displaying icon relative to dept
      this.eceIcon="/assets/ECE.png";// this is for displaying icon relative to dept
     }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      data => this.books = data
    );
  }
  showBook(eid){
    this.router.navigateByUrl("/view/"+eid);
  }

}
