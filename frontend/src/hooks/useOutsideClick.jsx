import { useEffect, useRef } from "react";

//Hook that adds an event listner to the document and calls whatever function is passed in as the call back when a user clicks outside of the normal component.
const useOutsideClick = (callback) => {
	const ref = useRef();

	useEffect(() => {
		const handleClick = (e) => {
			console.log(ref.current)
			if(ref.current && !ref.current.contains(e.target)){
				callback();
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [ref]);
	return ref;
};

export default useOutsideClick;
