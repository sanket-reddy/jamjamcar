import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { z } from "zod";

const userValidate = z.object({
  username: z.string().min(1, "username must be entered").max(100),
  email: z.string().min(1, "email must be entered").email(),
  password: z.string().min(8, "password must have minimun of 8 characters"),
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, username, password } = userValidate.parse(req.body);

  try {
    const existingemail = await db.user.findUnique({ where: { email: email } });
    if (existingemail) {
      res
        .status(201)
        .json({ message: "the email already exists", access: "no" });
    }
    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUsername) {
      res
        .status(201)
        .json({ message: "the username already exists", access: "no" });
    }
  } catch (error) {
    console.log("an error has occured : ", error);
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedpassword,
      },
    });
    res.status(201).json({
      message: "new user has been created successfully",
      access: "ok",
      user: newUser,
    });
  } catch (error) {
    console.log("an error has occured here", error);
    res.status(500).json({ error: error });
  }
}
