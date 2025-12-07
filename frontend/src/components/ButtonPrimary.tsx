import React from "react";

interface ButtonPrimaryProps {
	label: string;
	action?: () => void;
	type: string;
	size: string;
	outline?: boolean;
	dark: boolean
}

const ButtonPrimary = ({ label, action, type, size, outline, dark }: ButtonPrimaryProps): React.JSX.Element => {
	return (
		<button
			onClick={action}
			className="bg-primary font-semibold py-2 px-8 rounded-full text-black text-md shadow-md hover:bg-white hover:outline-primary hover:outline duration-100 lg:w-60">
			{label}
		</button>
	);
};

export default ButtonPrimary;
