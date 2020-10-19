import React from 'react'

export const Rating = ({ value, text }) => {
	return (
		<div className="rating">
			<span style={{ fontSize: "12px" }}>{text && text}</span>{" "}
			<span>
				<i className=
					{
						value >= 1
							? 'fas fa-star'
							: value >= 0.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
					}
					style={{ color: 'gold' }}
				></i>
			</span>
			<span>
				<i className=
					{
						value >= 2
							? 'fas fa-star'
							: value >= 1.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
					}
					style={{ color: 'gold' }}
				></i>
			</span>
			<span>
				<i className=
					{
						value >= 3
							? 'fas fa-star'
							: value >= 2.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
					}
					style={{ color: 'gold' }}
				></i>
			</span>
			<span>
				<i className=
					{
						value >= 4
							? 'fas fa-star'
							: value >= 3.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
					}
					style={{ color: 'gold' }}
				></i>
			</span>
			<span>
				<i className=
					{
						value >= 5
							? 'fas fa-star'
							: value >= 4.5
								? 'fas fa-star-half-alt'
								: 'far fa-star'
					}
					style={{ color: "gold" }}
				></i>
			</span>
		</div>
	)
}
