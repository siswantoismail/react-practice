import Label from "../Elements/Input/Label";
import Input from "../Elements/Input/Input";
export default function FormRegister() {
  return (
    <form action="">
      <Label htmlFor="username">Username</Label>
      <Input type="text" placeholder="Rahamat Ismail" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="example@gmail.com" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" placeholder="******" />
      <Label htmlFor="confirmpassword">Confirm Password</Label>
      <Input type="password" placeholder="******" />
      <button>Register</button>
    </form>
  );
}
