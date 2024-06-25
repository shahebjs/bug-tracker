"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

const formSchema = Joi.object({
  name: Joi.string().min(1).max(255).required().label("Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(1000)
    .required()
    .label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
});

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const form = useForm<FormData>({
    resolver: joiResolver(formSchema),
  });

  function onSubmit(values: FormData) {
    axios
      .post("/api/register", values)
      .then(() => {
        signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: "/",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
