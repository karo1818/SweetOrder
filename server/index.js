import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/article.js';

// Prueba
import Article from "./models/Article.js";


const app = express();

app.use('/api', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://sa:passworddd@clustersweetorder.ktcvqx1.mongodb.net/';
const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const server = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

    // Realiza una consulta a la base de datos para obtener la lista de artículos
    try {
      const articles = await Article.find();
      console.log('Lista de artículos al iniciar el servidor:');
      console.log(articles);
    } catch (error) {
      console.error('Error al obtener la lista de artículos:', error.message);
    }
  })
  .catch((error) => console.log(error.message));