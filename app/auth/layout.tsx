import React from "react";

const AuthLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div
			className="h-full w-full flex items-center justify-center
                       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to to-blue-800">
			{children}
		</div>
	);
};

export default AuthLayout;
