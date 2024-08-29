const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const users = [
   {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
   },
   {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
   },
   {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
   },
   {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
   },
   {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
   },
];


app.get("/users", async (req, res) => {
   res.status(200).json({ users: users });
});


app.get("/users/:id", async (req, res) => {
   const id = parseInt(req.params.id);
   let result = users.find(user => user.id === id);
   res.status(200).json({ user: result });
});



app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
