import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = () => {
		//return three different views depending on req.session (no user, user, admin)
		//admin view
		return (
			<div className="Header">
				<div className="titlebox">
					<img src="https://image.flaticon.com/icons/svg/579/579028.svg" alt="taco"></img>
					<Link to="/">Taco Tracker</Link>
				</div>
				<div className="admincontrols">
					<Link to="/userpage">View Users</Link>
					<Link to="/addtacos">Eat Tacos</Link>
				</div>
				<div className="usercontrols">
					<h3>Username</h3>
					<h3>Day of the year</h3>
					<h3>Taco Count</h3>
				</div>
			</div>
		)
}

export default Header;
