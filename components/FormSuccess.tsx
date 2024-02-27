import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface FormSuccessProps {
	message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className="bg-emerald-500/15 p-3 text-emerald-500 text-sm flex items-center gap-x-2 rounded-md">
			<CheckCircledIcon className="h-4 w-4" />
			<p>{message}</p>
		</div>
	);
};

export default FormSuccess;
