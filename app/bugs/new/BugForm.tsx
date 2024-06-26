"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
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
import { useRouter } from "next/navigation";

const formSchema = Joi.object({
  title: Joi.string().min(1).max(255).required().label("Title"),
  description: Joi.string().max(1000).required().label("Description"),
});

interface FormData {
  title: string;
  description: string;
}

const BugForm = () => {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: joiResolver(formSchema),
  });

  function onSubmit(values: FormData) {
    axios
      .post("/api/bugs", values)
      .then(() => router.push("/bugs"))
      .catch((err) => console.log(err));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default BugForm;
