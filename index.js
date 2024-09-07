require('dotenv').config();
const sequelize = require('./lib/sequelize');
const userModel = require('./models/user');
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

sequelize.sync().then(() => {
   console.log("Database connected and sysnced.");
}).catch((error) => {
   console.error("Unable to connect to database ", error);
});


app.get("/users", async (req, res) => {
   try {
      const users = await userModel.findAll();
      res.status(200).json({ users: users });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch users" });
   }
});


app.get("/users/:id", async (req, res) => {
   const id = parseInt(req.params.id);
   try {
      const user = await userModel.findByPk(id);
      if (user) {
         res.status(200).json({ user: user });
      } else {
         res.status(404).json({ message: "User not found." });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch users" });
   }

});


app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
