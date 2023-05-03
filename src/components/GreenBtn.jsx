import React from 'react';

const GreenBtn = ({ className, title, onClick }) => {
	return (
		<>
			<button className={className} onClick={onClick}>
				{title}
			</button>
		</>
	);
};

export default GreenBtn;
