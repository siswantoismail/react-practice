import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts";

const products = [
  {
    id: 1,
    name: "Keyboard",
    image: "/img/foto1.jpg",
    price: "Rp 1.000.000",
    description: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          voluptas voluptatum consectetur repellendus inventore laboriosam?`,
  },
];

const email = localStorage.getItem("email");

export default function Products() {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  return (
    <>
      <div className="navProducts">
        {email}

        <Button onClick={handleLogout}>Logout</Button>
      </div>

      {products.map((product) => (
        <div className="productsContainer" key={product.id}>
          <CardProducts.Header image={product.image} />
          <CardProducts.Body name={product.name}>
            {product.description}
          </CardProducts.Body>
          <CardProducts.Footer price={product.price} />
        </div>
      ))}
    </>
  );
}
