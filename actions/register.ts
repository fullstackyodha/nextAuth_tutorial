"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (
	values: z.infer<typeof RegisterSchema>
) => {
	const validatedFields = RegisterSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid Credentials!" };
	}

	const { name, email, password } = validatedFields.data;

	// Hash the password
	const hashedpassword = await bcrypt.hash(password, 10);

	// CHECK IF USER ALREADY EXISTS
	const exisitingUser = await getUserByEmail(email);

	if (exisitingUser) {
		return { error: "Email already in use!" };
	}

	// CREATE NEW USER
	await db.user.create({
		data: { name, email, password: hashedpassword },
	});

	// SEND EMAIL VERIFICATION TOKEN

	return { success: "User Created Successfully." };
};
