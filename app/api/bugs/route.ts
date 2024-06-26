import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import prisma from "@/prisma/client";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { error } = validateBug(body);
  if (error)
    return NextResponse.json(error.details[0].message, { status: 400 });
  const { title, description } = body;
  const newBug = await prisma.bug.create({
    data: { title, description },
  });
  return NextResponse.json(newBug, { status: 201 });
};

interface Bug {
  title: string;
  description: string;
}

const validateBug = (bug: Bug) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    description: Joi.string().max(1000).required(),
  });
  return schema.validate(bug);
};
