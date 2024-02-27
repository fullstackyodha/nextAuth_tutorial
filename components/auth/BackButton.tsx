import router from "next/router";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
	label: string;
	href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
	return (
		<Button className="font-normal w-full" variant="link">
			<Link href={href}>{label}</Link>
		</Button>
	);
};

export default BackButton;
