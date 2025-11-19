import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
export default function FormLogin() {
  return (
    <form action="">
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="example@gmail.com" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" placeholder="******" />
      <button>Login</button>
    </form>
  );
}
