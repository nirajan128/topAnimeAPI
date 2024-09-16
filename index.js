import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

//1.Get the rnvironment variables from .env file
dotenv.config();

//2.Set up express app
const app = express();
const PORT = process.env.PORT || 3000;

//4.set up pg database, and connect
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
await db.connect();

//5.Middleware
//parse JSON bodies
app.use(express.json());
// Add cors middleware
app.use(cors());
app.use(express.static("public"));

//7. reroute to index.ejs
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

//6.Define routes
//get all anime
app.get("/anime", async (req, res) => {
  try {
    const allData = await db.query("SELECT * FROM animeList");
    const allAnime = allData.rows;
    console.log(allAnime.length);
    res.json(allAnime);
  } catch (err) {
    console.error("Error searching anime", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get random anime
app.get("/anime/random", async (req, res) => {
  try {
    const allData = await db.query("SELECT * FROM animeList");
    const allAnime = allData.rows;
    let randomIndex = Math.floor(Math.random() * allAnime.length);
    const randomAnime = allAnime[randomIndex];
    res.json(randomAnime);
  } catch (err) {
    console.error("Error searching anime", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get search anime
app.get("/anime/search", async (req, res) => {
  try {
    const searchTerm = req.query.q;

    if (!searchTerm) {
      return res.status(400).json({ error: "Search term 'q' is required" });
    }

    // Construct the SQL query to search for anime titles containing the search term using LIKE
    const searchQuery = await db.query(
      `SELECT * FROM animeList WHERE title ILIKE $1`,
      [`%${searchTerm}%`]
    );
    const searchResult = searchQuery.rows;

    // Check if search results are empty
    if (searchResult.length === 0) {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.json(searchResult);
  } catch (error) {
    console.error("Error searching anime", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//3. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
