import React, { Component } from "react";
import { connect } from "react-redux";
import { updateName, updateUsername, updateGuess, updatePassword } from "../../redux/reducer";
import "./Newuser.css";

class Newuser extends Component {
	render() {
		return <div className="body">
				<p>Name</p>
				<input type="text" name="name" onChange={e => this.props.updateName(e.target.value)} />
				<p>Username</p>
				<input type="text" name="username" onChange={e => this.props.updateUsername(e.target.value)} />
				<p>Guess</p>
				<input type="number" name="guess" onChange={e => this.props.updateGuess(e.target.value)} />
				<p>Password</p>
				<input type="password" name="password" onChange={e => this.props.updatePassword(e.target.value)} />
				<button>Register</button>
			</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.name,
		username: state.username,
		guess: state.guess,
		password: state.password
	}
}

export default connect(mapStateToProps, { updateName, updateUsername, updateGuess, updatePassword })(Newuser);
