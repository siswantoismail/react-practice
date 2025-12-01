export default function Button(props) {
  const { children, onClick = () => {}, type = "button" } = props;
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
