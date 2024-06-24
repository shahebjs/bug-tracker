import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="px-4 h-screen flex items-center justify-center">
      <div className="p-4 rounded-3xl border shadow-xl md:w-[500px] w-full space-y-6">
        <h1 className="text-3xl md:text-5xl text-center">Login</h1>
        <LoginForm />
        <Button variant="outline" className="w-full">
          <FcGoogle className="mr-3 text-xl" /> Continue with Google
        </Button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary underline"
          >
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
