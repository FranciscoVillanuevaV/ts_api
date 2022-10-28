/**
 * https://medium.com/bb-tutorials-and-thoughts/how-to-write-simple-nodejs-rest-api-with-core-http-module-dcedd2c1256
 * https://www.topcoder.com/thrive/articles/how-to-build-rest-apis-with-typescript-with-no-frameworks-and-only-using
 * https://attacomsian.com/blog/node-make-http-requests
 */

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('it is alive')
})

app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', (req, res) => {
    res.sendStatus(200)
})

app.listen(3230, () => console.log("listenning port 3230"))