class BookService {

    constructor(){
        this.URI = 'http://localhost:4000/api/books'
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = await response.json();

        return books;
    }

    async postBook(book){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book 
        });

        const data = await res.json();
        console.log(data);
    }

    async delelteBook(bookId){
        const resp = await fetch(`${this.URI}/${bookId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });

        const data = await resp.json();
        console.log(data);
    }

}

module.exports = BookService;