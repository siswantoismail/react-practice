import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Keyboard",
    image: "/img/foto1.jpg",
    price: 1000000,
    description: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          voluptas voluptatum consectetur repellendus inventore laboriosam?`,
  },
  {
    id: 2,
    name: "Keyboard Mecanicale",
    image: "/img/foto1.jpg",
    price: 700000,
    description: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          voluptas voluptatum consectetur repellendus inventore laboriosam?`,
  },
  {
    id: 3,
    name: "New Keyboard",
    image: "/img/foto1.jpg",
    price: 300000,
    description: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          voluptas voluptatum consectetur repellendus inventore laboriosam?`,
  },
];

const email = localStorage.getItem("email");

export default function Products() {
  const [card, setCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCard(JSON.parse(localStorage.getItem("card")) || []);
  }, []);

  useEffect(() => {
    if (card.length > 0) {
      const sum = card.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("card", JSON.stringify(card));
    }
  }, [card]);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  function handleAddToCard(id) {
    if (card.find((item) => item.id === id)) {
      setCard(
        card.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCard([...card, { id, qty: 1 }]);
    }
  }

  return (
    <>
      <div className="navProducts">
        {email}

        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="productCard">
        <div className="productContent">
          {products.map((product) => (
            <div className="productsContainer" key={product.id}>
              <CardProducts.Header image={product.image} />
              <CardProducts.Body name={product.name}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
                handleAddToCard={handleAddToCard}
              />
            </div>
          ))}
        </div>
        <div className="sidebar">
          <h1>Card</h1>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      {" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "cerrency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "cerrency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr className="totalPrice">
                <td>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "cerrency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
