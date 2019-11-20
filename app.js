const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyparser= require('body-parser')
var nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' },{ link: '/books/addform', title: 'Add-Book' }];
var booksRouter = require('./src/routes/booksRouter')(nav);
var authorRouter = require('./src/routes/authorRouter')(nav);

var app = new express();


app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "/public")));
app.set('views', './src/views');
app.set('views engine', 'ejs');

app.use('/books', booksRouter);
app.use('/authors', authorRouter);




app.get('/', function (req, res) {
    // res.send(" a")
    // res.sendFile(path.join(__dirname,"/src/views/index.html"));
    res.render('index.ejs',
        {
            nav,
            title: "Library"

        });
});

// app.get('/books/:id',function(req,res){
//     var i=req.params.id;
//     res.render('book.ejs',
//     {
//        nav,title:"Book",book:books[i]
//     });
// })
// app.get('/authors', function (req, res) {
//     res.render('authors.ejs',
//         {
//             nav, title: "Authors"

//         });
// })
app.listen(8081, function () {
    console.log("listen to port " + chalk.red('8081'));
});
