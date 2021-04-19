import React from 'react';
import './Input.css';

const Input = ({ children, className, ...props }) => {
	return (
		<input className={className} {...props}>
			{children}
		</input>
	);
};

export default Input;
