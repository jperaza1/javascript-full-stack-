import './styles/app.css';
import UI from './ui';

const ui = new UI();

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('title', title);

        ui.addANewBook(formData);

        e.preventDefault();

    });  

document.addEventListener('DOMContentLoaded', () => {
    ui.renderBooks();
});

document.getElementById('books-cards').addEventListener('click', e =>{
    
    if(e.target.classList.contains('delete')){
        ui.deleteBook(e.target.getAttribute('_id'));
    }

    e.preventDefault();
});