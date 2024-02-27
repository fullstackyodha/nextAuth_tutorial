"use client";

import React, { useState, useTransition } from "react";

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

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginSchema } from "@/schemas";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { login } from "@/actions/login";

const LoginForm = () => {
	// Allows components to avoid undesirable loading states
	//  by waiting for content to load before transitioning to the next screen
	const [isPending, startTransition] = useTransition();

	const [error, setError] = useState<string | undefined>(
		""
	);

	const [success, setSuccess] = useState<
		string | undefined
	>("");

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = async (
		values: z.infer<typeof LoginSchema>
	) => {
		setError("");
		setSuccess("");

		// console.log(values);
		startTransition(() => {
			login(values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};

	return (
		<CardWrapper
			headerLabel="Welcome Back!"
			backButtonLabel="Don't Have an account?"
			backButtonHref="/auth/register"
			showSocial>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6">
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
											disabled={isPending}
											type="email"
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
											disabled={isPending}
											type="password"
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

					{/* SUBMIT BUTTON */}
					<div>
						<Button
							className="w-full"
							type="submit"
							disabled={isPending}>
							Login
						</Button>
					</div>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
