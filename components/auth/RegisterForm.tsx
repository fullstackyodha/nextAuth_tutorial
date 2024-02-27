"use client";

import React, { useState, useTransition } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CardWrapper from "./CardWrapper";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";

const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();

	const [error, setError] = useState<string | undefined>(
		""
	);

	const [success, setSuccess] = useState<
		string | undefined
	>("");

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: { name: "", email: "", password: "" },
	});

	const onSubmit = async (
		values: z.infer<typeof RegisterSchema>
	) => {
		// console.log(values);

		startTransition(() => {
			register(values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};

	return (
		<CardWrapper
			headerLabel="New User? Let's Register!"
			backButtonLabel="Already have an account?"
			backButtonHref="/auth/login"
			showSocial>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6">
					{/* NAME */}
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											type="text"
											disabled={isPending}
											placeholder="John Doe"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* EMAIL */}
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											disabled={isPending}
											placeholder="john.doe@gmail.com"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* PASSWORD */}
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											type="password"
											disabled={isPending}
											placeholder="*******"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormError message={error} />

					<FormSuccess message={success} />

					{/* REGISTER BUTTON */}
					<div>
						<Button className="w-full" type="submit">
							Register
						</Button>
					</div>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default RegisterForm;
