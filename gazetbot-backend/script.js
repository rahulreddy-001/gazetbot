const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());


// MongoDB connection string
const MONGODB_URI = 'mongodb://127.0.0.1:27017/gazet-bot';  // replace 'yourDatabaseName' with your actual DB name

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// MongoDB error event
db.on('error', (err) => {
    console.error(`Connection error: ${err.message}`);
});

// MongoDB open event
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schemas and models

// Categories
const categorySchema = new mongoose.Schema({
    name: String,
    sub_categories: [String]
});
const Category = mongoose.model('Category', categorySchema);

// Products
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    images: [String],
    specifications: [String],
    youtubeLinks: [String],
    price: {
        amazon: {
            price: Number,
            discount: Number,
            rating: Number,
            url: String
        },
        // ... other merchants
    },
    tags: [String]
});
const Product = mongoose.model('Product', productSchema);

// Deals
const dealSchema = new mongoose.Schema({
    title: String,
    discount: Number,
    image: String,
    tags: [String]
});
const Deal = mongoose.model('Deal', dealSchema);

//END-POINT APIs

// Categories and Sub-Categories
app.get('/categories', async (req, res) => {

    try {
      const categories = await Category.find({});
  
      const formattedCategories = categories.map(cat => {
        return {
          name: cat.name,
          sub_categories: cat.sub_categories
        };
      });
  
      res.json({ categories: formattedCategories });
  
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching categories'); 
    }
  
  });

// Deals
app.get('/deals', async (req, res) => {

    try {
      // Find deals from database
      const deals = await Deal.find({});
  
      // Map deals to formatted response array
      const formattedDeals = deals.map(deal => {
        return {
          title: deal.title,
          discount: deal.discount,
          image: deal.image,
          tags: deal.tags
        }
      });
  
      // Return deals
      res.json({ deals: formattedDeals });
  
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching deals');
    }
  
  });

// Quick Search
app.get('/quick-search', async (req, res) => {

    const { query } = req.query;
  
    try {
  
      // Find products that match query 
      const products = await Product.find({
        name: { $regex: new RegExp(query, 'i') } 
      }).limit(10);
  
      // Map products to formatted response array
      const results = products.map(product => {
        return {
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price
        };
      });
  
      res.json(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching products');
    }
  
  });

// Top products
app.get('/top-products', (req, res) => {
    // Fetch top products from the database and return.
    res.json({ top: [] });
});

// Products by Category
app.get('/products/:category', (req, res) => {
    // Use req.params.category to fetch products of the specific category.
    res.json({ filters: [], products: [] });
});

// Products by Category & Sub-Category
app.get('/products/:category/:sub-category', (req, res) => {
    // Use req.params.category and req.params.sub-category to fetch products.
    res.json({ filters: [], products: [] });
});

// Add to wishlist
app.post('/wishlist', (req, res) => {
    // Use req.body.user and req.body.productid to add to wishlist.
    res.sendStatus(200);
});

// Get Wishlist
app.get('/wishlist', (req, res) => {
    // Use req.query.user to fetch user's wishlist.
    res.json({ products: [] });
});

// Get Product Details
app.get('/product/:productid', (req, res) => {
    // Use req.params.productid to fetch product details.
    res.json({ product: {}, recommended_products: [] });
});




// Banners
app.get('/banners', (req, res) => {
    // Fetch banners from the database.
    res.json({ urls: [] });
});

// Add Products
app.post('/products', (req, res) => {
    // Use req.body.products to add products to the database.
    res.sendStatus(200);
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

