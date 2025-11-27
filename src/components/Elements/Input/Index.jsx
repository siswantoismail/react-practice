import Input from "./Input";
import Label from "./Label";

export default function InputForm(props) {
  const { label, type, placeholder, name } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </>
  );
}
