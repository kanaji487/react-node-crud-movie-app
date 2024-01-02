import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@005197",
    database: "test"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello, this is backend.")
});

app.get("/movies", (req, res) => {
    const q = "SELECT * FROM test.movie";
    db.query(q, (error, data) => {
        if(error) return res.json(error)
        return res.json(data)
    })
});

app.post("/movies", (req, res) => {
    const q = "INSERT INTO movie (`name`,`desc`,`image`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.desc,
        req.body.image,
    ];

    db.query(q, [values], (error, data) => {
        if(error) return res.json(error)
        return res.json("movie have been created.");
    });
});

app.delete("/movies/:id", (req, res) => {
    const movieId = req.params.id;
    const q = "DELETE FROM movie WHERE id = ?";

    db.query(q, [movieId], (error, data) => {
        if(error) return res.json(error);
        return res.json("Movie have been deleted.")
    })
});

app.put("/movies/:id", (req, res) => {
    const movieId = req.params.id;
    const q = "UPDATE movie SET `name` = ?, `desc` = ?, `image` = ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.desc,
        req.body.image,
    ]

    db.query(q, [...values, movieId], (error, data) => {
        if(error) return res.json(error);
        return res.json("Movie have been updated.")
    })
});

app.listen(5000, () =>  {
    console.log("Welcome to backend")
})