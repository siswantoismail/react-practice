import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, type, placeholder, name } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </>
  );
});

export default InputForm;
