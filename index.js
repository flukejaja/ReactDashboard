const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const db = client.db('stock')
const collection = db.collection('proDuct');
client.connect();


// const runCheck =  async() => {
// const checkdb =  await collection.find({}).toArray();
// console.log(checkdb)}

// runCheck();

const fastify = require('fastify');
// const bodyParser = require('body-parser');
const app = fastify()
app.register(require('@fastify/cors'))
const port = 5000
app.listen(port, () => {console.log('listening on port ' + port)});
// app.use(bodyParser);

app.get('/dashboard', async (req, res) => {
    const checkdb =  await collection.find({}).toArray();
    // console.log(checkdb)
    res.send((checkdb));
})
app.post('/Product', async (req, product)=>{
    console.log("findProduct")
    const db1 = await collection.findOne(req.body)
    console.log("FIND_ONE = "+JSON.stringify(db1))
    product.send(db1);
})
app.post('/InsertProduct', async (req, product)=>{
    const checkdb =  await collection.insertOne(req.body);
    console.log("INSERT_ONE"+JSON.stringify(checkdb))
})
app.post('/DeleteProduct', async (req, product)=>{
    const DeleteP = await collection.deleteOne(req.body);
    console.log("DeleteOne"+JSON.stringify(DeleteP))
})