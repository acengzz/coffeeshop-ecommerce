import React from 'react'
import loader from '../ripple-loader.svg';

export const Loading = () => {
	return (
		<div className="loader">
			<img src={loader} alt="loading-animation" />
		</div>
	)
}
