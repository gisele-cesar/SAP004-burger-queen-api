import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from '../api/server/src/routes/ProductRoutes'
import orderRoutes from '../api/server/src/routes/OrderRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Hello World!!'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app