import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
const api_key = "A12345B12"
let able_to_edit = false;

let articles = [
    {
      id: 1,
      "title": "The Rise of Electric Cars",
      "author": "Jane Doe",
      "content": "Electric vehicles (EVs) are becoming increasingly popular due to advances in technology and growing environmental awareness...",
      "publishedDate": "2025-01-10"
    },
    {
      id: 2,
      "title": "Understanding Machine Learning",
      "author": "John Smith",
      "content": "Machine learning is a subset of artificial intelligence that focuses on building systems capable of learning and improving from data...",
      "publishedDate": "2025-02-05"
    },
    {
      id: 3,
      "title": "Healthy Eating in the Modern Age",
      "author": "Alice Roberts",
      "content": "A balanced diet is key to maintaining health and well-being. This article explores the fundamentals of nutrition and how to incorporate healthy habits...",
      "publishedDate": "2025-03-12"
    },
    {
      id: 4,
      "title": "The Future of Remote Work",
      "author": "Michael Green",
      "content": "Remote work has become more prevalent over the last few years. Learn about emerging trends, best practices, and how technology is shaping the virtual workspace...",
      "publishedDate": "2025-03-18"
    }
  ];  

let id = 5;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/admin", (req, res) => {
    const get_api = req.query.api;
    if (Object.keys(req.query).length === 0) {
    res.send("No api key insterted");    
    } else if (get_api == "A12345B12") {
        able_to_edit = true;
        res.render("index.ejs", {
            able_to_edit: able_to_edit,
            articles: articles
        }); 
    } else {
        res.send("false request");
    }
});

app.get("/home", (req, res) => {
  able_to_edit = false;
  res.render("index.ejs", {
    able_to_edit: able_to_edit,
    articles: articles
});  
})

app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const getArticle = articles.findIndex((article) => article.id == id);
  const chosenArticle = articles[getArticle];
  res.render("Post.ejs", {
    article: chosenArticle,
  })
})

app.get("/new", (req, res) => {
  res.render("newarticle.ejs")
});

app.post("/new", (req, res) => {
  const getTitle = req.body.article_title;
  const getAuthor = req.body.article_Author;
  const content = req.body.content;
  const newArticle = {
    id: id++,
    "title": getTitle,
    "author": getAuthor,
    "content": content,
    "publishedDate": new Date()
  }
  articles.push(newArticle);
  res.redirect("/admin?api=A12345B12");
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const getArticle = articles.findIndex((article) => article.id == id);
  const chosenArticle = articles[getArticle]

  res.render("updatearticle.ejs", {
    postID: chosenArticle.id,
    article_title: chosenArticle.title,
    article_author: chosenArticle.author,
    content: chosenArticle.content
  });
})

app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const getArticle = articles.findIndex((article) => article.id == id);
  const chosenArticle = articles[getArticle]

  const getTitle = req.body.article_title;
  const getAuthor = req.body.article_Author;
  const content = req.body.content;
  const updateArticle = {
    id: chosenArticle.id,
    "title": getTitle,
    "author": getAuthor,
    "content": content,
    "publishedDate": new Date()
  }

  articles[getArticle] = updateArticle;
  res.redirect("/admin?api=A12345B12");

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
