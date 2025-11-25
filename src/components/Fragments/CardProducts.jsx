const CardProducts = (props) => {
  const { children } = props;
  return <div className="products">{children}</div>;
};

function Header({ image }) {
  return (
    <>
      <a href="">
        <img src={image} alt="" />
      </a>
    </>
  );
}

function Body(props) {
  const { children, name } = props;
  return (
    <>
      <a href="">
        <h3>{name}</h3>
      </a>
      <p>{children}</p>
    </>
  );
}

function Footer({ price }) {
  return (
    <>
      <div className="price">
        <span>{price}</span>
        <button>Buy Now</button>
      </div>
    </>
  );
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
