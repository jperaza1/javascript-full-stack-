class BookService {

    constructor(){
        this.URI = 'http://localhost:300/api/books'
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = response.json();

        return books;
    }

    async postBook(book){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book,
            
        })
    }

    delelteBook(){

    }

}