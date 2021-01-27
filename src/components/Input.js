import React from "react";

const Input = ({
	label,
	placeholder,
	type,
	name,
	value,
	onChange,
	className,
}) => {
	return (
		<>
			<label>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className={className}
			/>
		</>
	);
};

export default Input;
