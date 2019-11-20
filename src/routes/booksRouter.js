const express = require('express');
const booksRouter = express.Router();



var books = [
    {
        title: "War and Peace",
        genre: "history",
        author: "ab",
        image:"/img/b1.jpg"
    },
    {
        title: "titanic",
        genre: "love",
        author: "ba",
        image:"/img/b2.jpg"
    },
    {
        title: "football",
        genre: "sports",
        author: "abc",
        image:"/img/b3.jpg"
    },

];

function router(nav)
{
    booksRouter.route('/')
    .get((req, res) => {
        res.render('books.ejs',
            {
                nav, books, title: "Books"

            });
    })
// app.get('/books',function(req,res){
//     res.render('books.ejs',
//     {
//         nav,books,title:"Books"

//     });
// })

booksRouter.route('/addform')
    .get((req, res) => {
        var i = req.params.id;
        res.render('addform.ejs',
            {
                nav, title: "Add_Books"
            });
    })

    booksRouter.route('/save')
    .post((req, res) => {
        console.log(req.body);

       res.send('books Added');
  
    });


booksRouter.route('/:id')
    .get((req, res) => {
        var i = req.params.id;
        res.render('book.ejs',
            {
                nav, title: "Book", book: books[i]
            });
    })

return booksRouter;

}
module.exports=router;