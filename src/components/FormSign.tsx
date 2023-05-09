import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";

const FormSign = () => {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username: user,
      password: pass,
    }).then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-3">
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        name="username"
        className="border rounded py-2 px-3"
      />
      <input
        type="text"
        onChange={(e) => setPass(e.target.value)}
        name="password"
        className="border rounded py-2 px-3 my-2"
      />
      <button type="submit" className="border rounded py-2 px-3">
        Sign in
      </button>
    </form>
  );
};

export default FormSign;
