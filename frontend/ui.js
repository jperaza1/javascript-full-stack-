import BookService from './services/bookService'
const bookService = new BookService();

import {format} from 'timeago.js'; 

class UI{

    async renderBooks(){
        const data = await bookService.getBooks();

        const bookContainer = document.getElementById('books-cards');
        bookContainer.innerHTML = '';
        
        data.forEach(book => {

            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `

                <div class="card m-2 text-center">
                    <img src="http://localhost:4000${book.imagePath}" alt="" class="card-img-top img-fluid" />
                    <div class="card-body px-2">
                        <h4 class="card-title">${book.title}</h4>
                        <p class="card-text">${book.author}</p>
                        <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                    </div>
                    <div class="card-footer">
                        ${format(book.create_at)}
                    </div>
                </div> 

            `;

            bookContainer.appendChild(div);

        });

        console.log(data);

    }


    async addANewBook(book){
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm(){
        document.getElementById('book-form').reset();
    }

    renderMessage(){

    }

    async deleteBook(bookId){
        await bookService.delelteBook(bookId);
        this.renderBooks();
    }

}

export default UI;