import React from "react";
import { Link } from "react-router-dom";
import ThankYouIcon from "../images/icon-thank-you.svg";

const ThankYou = (props) => {
	return (
		<>
			<div className="page-div thank-you-page">
				<img
					src={ThankYouIcon}
					className="page-div-thank-you-icon"
					alt="Checkmark Logo"
				/>
				<h1>Thank You</h1>
				<p className="header-p">
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you ever need support, please feel free to email us
					at support@loremgaming.com.
				</p>
				<Link to="/">
					<button onClick={props.handleClick}>Start Again</button>
				</Link>
			</div>
		</>
	);
};

export default ThankYou;
