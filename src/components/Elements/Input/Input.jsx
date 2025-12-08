import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </>
  );
});

export default Input;
