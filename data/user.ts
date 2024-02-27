import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
	try {
		const exisitingUser = await db.user.findUnique({
			where: { email },
		});

		return exisitingUser;
	} catch (error) {
		return null;
	}
};

export const getUserById = async (id: string) => {
	try {
		const exisitingUser = await db.user.findUnique({
			where: { id },
		});

		return exisitingUser;
	} catch (error) {
		return null;
	}
};
