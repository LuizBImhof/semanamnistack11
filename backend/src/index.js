const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
/**
 * PARA QUANDO FOR PRODUÇÃO
 * app.use(cors({
 * origin: 'http://meuapp.com'
 * }))
 */


app.use(express.json());//Define que o corpo da requisição virá em JSON

app.use(routes);


app.listen(3333);


/**
 * Rota (caminho completo)/ Recurso (após a barra)
 */
/**
 * Metodos HTTP
 */

 /**
  * Tipos de Parametros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após "?"(filtros e paginação), separaados por &
  * Route params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (POST, PATCH)
  * 
  */

/**
 * Banco de dados :
 * SQL: MySQL, ORACLE, SQLite
 * NoSQL: MongoDB, CouchDC // cada um tem uma linguagem específca
 */

