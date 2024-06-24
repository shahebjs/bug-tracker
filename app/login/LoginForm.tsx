import { Button } from "@/components/ui/button";

const LoginForm = () => {
  return (
    <form className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 border rounded-md focus:outline-primary"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Password">Password</label>
        <input
          className="px-4 py-2 border rounded-md focus:outline-primary"
          type="password"
          placeholder="Password"
        />
      </div>
      <Button className="w-full">Log In</Button>
    </form>
  );
};

export default LoginForm;
