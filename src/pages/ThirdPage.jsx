import React, { useState } from "react";
import { Link } from "react-router-dom";

const ThirdPage = (props) => {
	const [activeCards, setActiveCards] = useState([false, false, false]);
	const [value, setValue] = useState(0);
	const handleClick = (e) => {
		let newArray = [...activeCards];
		newArray[e.target.id - 1] = !newArray[e.target.id - 1];
		setActiveCards(newArray);
		props.handleAddOns(newArray);
	};
	return (
		<>
			<div className="page-div">
				<h1>Pick add-ons</h1>
				<p className="header-p">Add-ons help enhance your gaming experience</p>
				<div className="page-div-cards third-page">
					<div
						className={
							activeCards[0] === true ? "cards-card active" : "cards-card"
						}
						id="1"
						onClick={handleClick}>
						<div id="1" onClick={handleClick}>
							<input
								onChange={() => setValue(value + 1)}
								type="checkbox"
								id="1"
								onClick={handleClick}
								checked={activeCards[0]}
							/>
						</div>
						<div id="1" onClick={handleClick}>
							<h3 id="1" onClick={handleClick}>
								Online service
							</h3>
							<p id="1" onClick={handleClick}>
								Access to multiplayer Games
							</p>
						</div>
						<div id="1" onClick={handleClick}>
							<span id="1" onClick={handleClick}>
								{props.monthlyActive ? "+$1/mo" : "+$10/yr"}
							</span>
						</div>
					</div>
					<div
						className={activeCards[1] ? "cards-card active" : "cards-card"}
						id="2"
						onClick={handleClick}>
						<div id="2" onClick={handleClick}>
							<input
								onChange={() => setValue(value + 1)}
								type="checkbox"
								id="2"
								onClick={handleClick}
								checked={activeCards[1]}
							/>
						</div>
						<div id="2" onClick={handleClick}>
							<h3 id="2" onClick={handleClick}>
								Larger Storage
							</h3>
							<p id="2" onClick={handleClick}>
								Extra 1TB of cloud save
							</p>
						</div>
						<div id="2" onClick={handleClick}>
							<span id="2" onClick={handleClick}>
								{props.monthlyActive ? "+$2/mo" : "+$20/yr"}
							</span>
						</div>
					</div>
					<div
						className={activeCards[2] ? "cards-card active" : "cards-card"}
						id="3"
						onClick={handleClick}>
						<div id="3" onClick={handleClick}>
							<input
								onChange={() => setValue(value + 1)}
								type="checkbox"
								id="3"
								onClick={handleClick}
								checked={activeCards[2]}
							/>
						</div>
						<div id="3" onClick={handleClick}>
							<h3 id="3" onClick={handleClick}>
								Customizable Profile
							</h3>
							<p id="3" onClick={handleClick}>
								Custom theme on your profile
							</p>
						</div>
						<div id="3" onClick={handleClick}>
							<span id="3" onClick={handleClick}>
								{props.monthlyActive ? "+$2/mo" : "+$20/yr"}
							</span>
						</div>
					</div>
				</div>
				<div className="link-btn-wrapper second-page">
					<Link to="/second">
						<button>Go Back</button>
					</Link>
					<Link to="/fourth">
						<button onClick={props.handleSubmit}>Next Step</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ThirdPage;
