import React from 'react';
import './card-style.css';
import img1 from "./tree.jpg";

const Card = ({ user, handleClick }) =>{
	return(
		<div className="card text-center">
			<div className="overflow">
				<img src={img1} alt='Image1' className="card-img-top"/>
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">{user.name}</h4>
				<p className="card-text text-secondary">
				http://{user.website}
				</p>
				<p className="card-text text-secondary">
				@{user.username}
				</p>
				<a className="btn btn-outline-primary" onClick={() => handleClick(user, true)}>More details</a>
			</div>
		</div>
	);
}

export default Card;
