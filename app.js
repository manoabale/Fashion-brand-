function Header() {
  return (
    <header className="header">
      <div className="logo">Urban Threads</div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>New Arrivals</li>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <li>Sale</li>
          <li>Blog</li>
          <li className="cart"><i className="fas fa-shopping-cart"></i> Cart</li>
        </ul>
      </nav>
    </header>
  );
}

function Banner() {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <h1>FALL ESSENTIALS</h1>
        <p>Update Your Wardrobe. Shop the New Collection</p>
        <div className="banner-buttons">
          <button>SHOP MEN</button>
          <button>SHOP WOMEN</button>
        </div>
      </div>
    </section>
  );
}

function ProductGrid({ title }) {
  const products = [
    { name: "Classic Denim Jacket", price: "$79.99", img: "https://source.unsplash.com/400x400/?denim,jacket" },
    { name: "Knit Sweater", price: "$55.00", img: "https://source.unsplash.com/400x400/?knit,sweater" },
    { name: "Chelsea Boots", price: "$110.00", img: "https://source.unsplash.com/400x400/?chelsea,boots" },
    { name: "Leather Backpack", price: "$95.00", img: "https://source.unsplash.com/400x400/?leather,backpack" }
  ];
  return (
    <section className="product-grid">
      <h2>{title}</h2>
      <div className="grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <ul className="trust-badges">
          <li>🚚 Free Shipping (over $75)</li>
          <li>🔒 Secure Payment (SSL)</li>
          <li>↩️ 30-Day Returns</li>
          <li>📞 24/7 Support</li>
        </ul>
        <div className="newsletter">
          <h3>Newsletter Signup</h3>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="payments">
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-paypal"></i>
        </div>
        <p>© Urban Threads 2026</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductGrid title="New Arrivals" />
      <ProductGrid title="Best Sellers" />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElement(("root"));
