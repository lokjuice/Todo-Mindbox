import React, { useRef } from 'react';
import classes from './TextInput.module.css'

interface IProps {
	onEnter: (value: string) => void;
}

const TextInput = ({ onEnter }: IProps) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<input
			type="text"
			className={classes.textInput}
			placeholder="какие планы?"
			ref={ref}
			onKeyDown={(e) => {
				if (e.key === "Enter" && ref?.current && ref.current.value.trim().length > 0) {
					onEnter(ref.current.value);
					ref.current.value = "";
				}
			}}
		/>
	);
}

export default TextInput;
