import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
	return (
		<>
			<div className="page-div">
				<form>
					<h1>Personal Info</h1>
					<p className="header-p">
						Please provide your name, email address, and phone number.
					</p>
					<label>
						<p className="label-p">Name</p>
						<input type="text" placeholder="e.g. Stephen King" required />
					</label>
					<label>
						<p className="label-p">Email Address</p>
						<input
							type="email"
							placeholder="e.g. stephenking@lorem.com"
							required
						/>
					</label>
					<label>
						<p className="label-p">Phone Number</p>
						<input type="number" placeholder="e.g. +1 234 567 890" required />
					</label>
					<div className="link-btn-wrapper">
						<Link to="/second">
							<button>Next Step</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default FirstPage;
