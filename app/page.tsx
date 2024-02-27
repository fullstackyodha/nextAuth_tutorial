import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const fonts = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<main
			className="flex h-full flex-col items-center justify-center
                       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
                     from-sky-400 to to-blue-800">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						`text-5xl font-semibold drop-shadow-md`,
						fonts.className
					)}>
					🔐Auth
				</h1>

				<p className="text-lg  text-white">
					A Simple Authentication System
				</p>

				<div>
					<LoginButton>
						<Button variant="secondary" size="lg">
							Sign In
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
