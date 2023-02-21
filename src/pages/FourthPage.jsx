import React from "react";
import { Link } from "react-router-dom";

const FourthPage = (props) => {
	return (
		<>
			<div className="page-div">
				<h1>Finishing up</h1>
				<p className="header-p">
					Double-check everything looks OK before confirming
				</p>
				{props.activeCard === "1" && (
					<div className="fourth-page-div">
						<p>Arcade</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "$9/mo" : "$90/yr"}
						</p>
					</div>
				)}
				{props.activeCard === "2" && (
					<div className="fourth-page-div">
						<p>Advanced</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "$12/mo" : "$120/yr"}
						</p>
					</div>
				)}
				{props.activeCard === "3" && (
					<div className="fourth-page-div">
						<p>Pro</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "$15/mo" : "$150/yr"}
						</p>
					</div>
				)}
				{props.firstAddOn && (
					<div className="fourth-page-div">
						<p>Online Service</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "+$1/mo" : "+$10/yr"}
						</p>
					</div>
				)}
				{props.secondAddOn && (
					<div className="fourth-page-div">
						<p>Larger Storage</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "+$2/mo" : "+$20/yr"}
						</p>
					</div>
				)}
				{props.thirdAddOn && (
					<div className="fourth-page-div">
						<p>Customizable Profile</p>
						<p className="fourth-page-div-price-p">
							{props.monthlyActive ? "+$2/mo" : "+$20/yr"}
						</p>
					</div>
				)}
				<div className="fourth-page-div">
					<p>Total {props.monthlyActive ? "(per month)" : "(per-year)"}</p>
					<p className="fourth-page-div-price-p total-price">
						+${props.price}/{props.monthlyActive ? "mo" : "yr"}
					</p>
				</div>
			</div>
			<div className="link-btn-wrapper second-page">
				<Link to="/third">
					<button>Go Back</button>
				</Link>
				<Link to="/thankyou">
					<button className="confirm-btn">Confirm</button>
				</Link>
			</div>
		</>
	);
};

export default FourthPage;
