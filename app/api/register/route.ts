import prisma from "@/prisma/client";
import Joi from "joi";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { error } = validateUser(body);
  if (error) return NextResponse.json(error.details[0].message);
  const { name, email, password } = body;
  const isExist = await prisma.user.findUnique({ where: { email } });
  if (isExist)
    return NextResponse.json({ error: "User already exist!" }, { status: 409 });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashPassword,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
};

interface User {
  name: string;
  email: string;
  password: string;
}

const validateUser = (user: User) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
    email: Joi.string().email().max(1000).required(),
    password: Joi.string().min(8).max(1000).required(),
  });
  return schema.validate(user);
};
