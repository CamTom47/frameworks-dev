import React from "react";

interface ButtonPrimaryProps {
	label: string;
	action?: () => void;
	type: 'submit' | 'reset' | 'button';
	size: string;
	outline?: boolean;
	dark: boolean
}

const ButtonPrimary = ({ label, action, type = 'submit', size, outline, dark }: ButtonPrimaryProps): React.JSX.Element => {
	return (
		<button
			type={type}
			onClick={action}
			className="bg-primary font-semibold py-2 px-8 rounded-full text-black text-md shadow-md hover:bg-white hover:outline-primary hover:outline duration-100 lg:w-60">
			{label}
		</button>
	);
};

export default ButtonPrimary;
