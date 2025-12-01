import React from "react";
import { Link } from "react-router";
import "../styles/components/ButtonLink.scss";

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
			className={`primary-button ${size} ${outline === true ? "outline" : ""} ${
				dark === true ? "dark" : ""
			}`}>
			{label}
		</Link>
	);
};

export default ButtonLink;
