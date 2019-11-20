const express = require('express');
const authorRouter = express.Router();

var authors = [
    {
        name: "abhi",
        sex: "male",
        age: "25",
        image:"/img/b1.jpg"
    },
    {
        name: "ajay",
        sex: "male",
        age: "26",
        image:"/img/b2.jpg"
    },
    {
        name: "ajith",
        sex: "male",
        age: "29",
        image:"/img/b3.jpg"
    },

];


function router(nav)
{
    authorRouter.route('/')
    .get((req, res) => {
        res.render('authors.ejs',
            {
                nav, authors, title: "Authors"

            });
    })


// authorRouter.route('/addform')
//     .get((req, res) => {
//         var i = req.params.id;
//         res.render('addform.ejs',
//             {
//                 nav, title: "Add_Books"
//             });
//     })

    // booksRouter.route('/save')
    // .post((req, res) => {
    //     console.log(req.body);

    //    res.send('books Added');
  
    // });


authorRouter.route('/:id')
    .get((req, res) => {
        var i = req.params.id;
        res.render('author.ejs',
            {
                nav, title: "Author", author: authors[i]
            });
    })

return authorRouter;

}
module.exports=router;