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

export default function Products() {
  return (
    <>
      <div className="navProducts">Rahmat Ismail</div>

      {products.map((product) => (
        <div className="productsContainer">
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
