"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
}

const LoginButton = ({
	children, // Actual Button
	mode = "redirect", // Default type
	asChild,
}: LoginButtonProps) => {
	const router = useRouter();

	if (mode === "modal") {
		console.log("TODO: MODAL");
	}

	const onClick = () => {
		router.push("/auth/login");
	};

	return (
		<span onClick={onClick} className="cursor-pointer">
			{children}
		</span>
	);
};

export default LoginButton;
