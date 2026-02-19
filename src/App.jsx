import { useState, useEffect } from "react"
import "./App.css"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err))

  }, [])

  return (
    <div className="main-wrapper">
      <div className="bg-glare"></div>
      <div className="container">
        <h2 className="title">Premium Products</h2>

        <div className="table-wrapper glass-panel">
          <table className="premium-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Return Policy</th>
                <th>Shipping Info</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((prod) => prod.price >= 10)
                .map((prod) => (
                  <tr key={prod.id} className="table-row">
                    <td>
                      <div className="product-display">
                        <img
                          src={prod.thumbnail}
                          alt={prod.title}
                          className="large-thumb"
                          onClick={() => window.open(prod.thumbnail, "_blank")}
                        />
                        <span className="product-name-large">{prod.title}</span>
                      </div>
                    </td>
                    <td className="price-td">${prod.price}</td>
                    <td>
                      <div className="rating-badge-large">
                        <span className="stars">{"★".repeat(Math.round(prod.rating))}</span>
                        <span className="val">{prod.rating}</span>
                      </div>
                    </td>
                    <td className="info-td">{prod.returnPolicy}</td>
                    <td className="info-td">{prod.shippingInformation}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App