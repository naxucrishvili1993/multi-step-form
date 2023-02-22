import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArcadeImg from "../images/icon-arcade.svg";
import AdvancedImg from "../images/icon-advanced.svg";
import ProImg from "../images/icon-pro.svg";

const SecondPage = (props) => {
	const [activeCard, setActiveCard] = useState(0);

	const handleCardClick = (e) => {
		setActiveCard(e.target.id);
		props.handleActiveCard(e);
	};

	const handleClick = () => {
		props.handleClick();
	};

	return (
		<>
			<div className="page-div">
				<h1 className="page-div-heading-second-page">Select your plan</h1>
				<p className="header-p header-p-second-page">
					You have the option of monthly or yearly billing
				</p>
				<div className="page-div-cards page-div-second-page">
					<div
						className={activeCard === "1" ? "cards-card active" : "cards-card"}
						id="1"
						onClick={handleCardClick}>
						<div className="cards-card-photo" id="1">
							<img src={ArcadeImg} alt="Arcade Plan Logo" id="1" />
						</div>
						<div className="cards-card-stats" id="1">
							<h3 id="1">Arcade</h3>
							<p id="1">{props.monthlyActive ? "$9/mo" : "$90/yr"}</p>
							{!props.monthlyActive && <span id="1">2 months free</span>}
						</div>
					</div>
					<div
						className={activeCard === "2" ? "cards-card active" : "cards-card"}
						id="2"
						onClick={handleCardClick}>
						<div className="cards-card-photo" id="1">
							<img src={AdvancedImg} alt="Advanced Plan Logo" id="2" />
						</div>
						<div className="cards-card-stats" id="2">
							<h3 id="2">Advanced</h3>
							<p id="2">{props.monthlyActive ? "$12/mo" : "$120/yr"}</p>
							{!props.monthlyActive && <span id="2">2 months free</span>}
						</div>
					</div>
					<div
						className={activeCard === "3" ? "cards-card active" : "cards-card"}
						id="3"
						onClick={handleCardClick}>
						<div className="cards-card-photo" id="3">
							<img src={ProImg} alt="Arcade Plan Logo" id="3" />
						</div>
						<div className="cards-card-stats" id="3">
							<h3 id="3">Pro</h3>
							<p id="3">{props.monthlyActive ? "$15/mo" : "$150/yr"}</p>
							{!props.monthlyActive && <span id="3">2 months free</span>}
						</div>
					</div>
					<div className="radio-div">
						<p>Monthly</p>{" "}
						<div
							className={props.monthlyActive ? "toggle" : "toggle active"}
							onClick={handleClick}></div>{" "}
						<p>Yearly</p>
					</div>
				</div>
			</div>
			<div className="link-btn-wrapper second-page">
				<Link to="/">
					<button>Go Back</button>
				</Link>
				<Link to="/third">
					<button onClick={props.handleSubmit}>Next Step</button>
				</Link>
			</div>
		</>
	);
};

export default SecondPage;
