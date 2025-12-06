import React from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
	label: string;
	action?: () => void;
	url: string;
	type: string;
	size: string;
	outline: boolean;
	dark: boolean;
}

const ButtonLink = ({
	label,
	action,
	url,
	type,
	size = "medium",
	outline,
	dark,
}: ButtonLinkProps): React.JSX.Element => {
	return (
		<Link
			reloadDocument
			scrollrestoration='true'
			to={url}
			className="bg-primary font-semibold py-2 px-8 rounded-full text-black text-md shadow-md">
			{label}
		</Link>
	);
};

export default ButtonLink;
