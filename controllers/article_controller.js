const Article = require('../models/article');

const home = (req, res, next) => {
    Article.find()
        .then(articles => {
            res.render('articles', { articles: articles });
        })

}

const newarticle = (req, res, next) => {
    res.render('newarticle');
}
const editarticle = (req, res, next) => {
    const id = req.params.id;
    Article.findById(id)
        .then(article => {
            res.render('partials/editarticle', { article: article });
        })
}

const savearticle = (req, res, next) => {

    let { id, title, author, content } = req.body;
    console.log("Whata are the values?");
    console.log(id);
    console.log(title);
    console.log(author);
    console.log(content);

    if (id) {
        Article.findById(id)
            .then(article => {
                article["title"] = title;
                article["author"] = author;
                article["content"] = content;
                article.save();
                console.log("Saving article");
            })
            .catch(err => console.log(err));
    } else {
        let newarticle = new Article({
            title,
            author,
            content
        });
        newarticle.save();
    }
    res.redirect("/articles");
}

const deletearticle = (req, res, next) => {
    let id = req.params.id;
    Article.findByIdAndDelete(id)
        .then(status => {
            console.log(status);
            res.redirect("/articles");
        })
}
module.exports = { home, newarticle, savearticle, editarticle, deletearticle };
