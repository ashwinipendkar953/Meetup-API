const express = require("express");
const { initializeDatabase } = require("./db/db.conn");
const eventRoutes = require("./routes/eventRoutes");

const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  Credentials: true,
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

initializeDatabase();

app.use("/api", eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
