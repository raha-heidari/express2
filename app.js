 const express = require('express')
 require('dotenv').config()
 const cors = require('cors')

 const productRoutes = require('./project/routes/rout')
 const timeLogger = require('./project/middleware/timeLogger')

 const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(timeLogger);

app.use("/product", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});