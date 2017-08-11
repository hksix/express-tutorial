// npm install --save-dev nodemon
// npm init -y
// npm install express --save
// npm run dev

const express = require('express');
const app = express();

const db ={
    1001: {
        author: 'hamza',
        title: 'coding4lyfe',
        year: 2005
    },
    1002: {
        author: 'Cat',
        title: 'cat4lyfe',
        year: 2017
    }
};

app.get('/books/:bookId', (req,res)=>{
    let bookId = req.params.bookId;
    let bookInfo = db[bookId];

    if (!bookInfo) {
        let errorMsg = `Book ID ${bookId} not found`;
        bookInfo = {
            
            author: errorMsg,
            year: errorMsg,
            title: errorMsg
        }
    }

    let respText = `
    <h1>${bookInfo.title}</h1>
    <h2>${bookInfo.author}</h2>
    <h2>${bookInfo.year}</h2>
    `;
    res.end(respText);
});

app.get('/books/:bookId/:key', (req,res)=>{
    let bookId = req.params.bookId;
    let bookInfo = db[bookId];
    let key = req.params.key;

    if (!bookInfo) {
        let errorMsg = `Book ID ${bookId} not found`;
        bookInfo = {
            author: errorMsg,
            year: errorMsg,
            title:errorMsg
        }
    }

    let respText = `
    <h1>${bookInfo[key]}</h1>
    `;
    res.end(respText);
});

app.get('/',
(req,res,next)=>{
    console.log('first');
    req.message = 'hello';
    next();
    },
(req,res,next)=>{
    console.log('second');
    req.message += ' there';
    next();
    },
(req,res,next)=>{
console.log('third');
    res.end(req.message);
    }
);

app.listen(3456, ()=> {
    console.log('listening on 3456! YEAH!');
});

