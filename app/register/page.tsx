import GoogleButton from "@/components/GoogleButton";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

const Login = () => {
  return (
    <div className="px-4 h-screen flex items-center justify-center">
      <div className="p-4 rounded-3xl border shadow-xl md:w-[500px] w-full space-y-6">
        <h1 className="text-3xl md:text-5xl text-center">Sign Up</h1>
        <RegisterForm />
        <GoogleButton />
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary underline">
            Log In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
