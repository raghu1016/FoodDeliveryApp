import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food delivery API',
      description: "API endpoints for calculating total price documented on swagger",
      version: '1.0.0',
    },
    servers: [
    //   {
    //     url: "http://localhost:3000/",
    //     description: "Local server"
    //   },
      {
        url: "https://fooddeliveryapp-ucy8.onrender.com/",
        description: "Live server"
      },
    ]
  },
  // looks for configuration in specified directories
  apis: ['./api/routes/*.js'],
}
const swaggerSpec = swaggerJsdoc(options)
function swaggerDocs(app, port) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
export default swaggerDocs