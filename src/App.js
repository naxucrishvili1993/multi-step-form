/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import ThankYou from "./pages/ThankYou";
import { useEffect, useRef, useState } from "react";

const App = () => {
	const [monthlyActive, setMonthlyActive] = useState(true);
	const [activeCard, setActiveCard] = useState(0);
	const [addOns, setAddOns] = useState([]);
	const priceRef = useRef(0);
	const [price, setPrice] = useState(priceRef.current);

	const handleActiveCard = (e) => {
		setActiveCard(e.target.id);
	};
	const handleAddOns = (e) => {
		setAddOns(e);
	};
	const calcCardPrice = () => {
		activeCard === "1" &&
			(monthlyActive ? (priceRef.current = 9) : (priceRef.current = 90));
		activeCard === "2" &&
			(monthlyActive ? (priceRef.current = 12) : (priceRef.current = 120));
		activeCard === "3" &&
			(monthlyActive ? (priceRef.current = 15) : (priceRef.current = 150));
	};
	const calculateAddOnsPrice = () => {
		calcCardPrice();
		addOns[0] &&
			(monthlyActive ? (priceRef.current += 1) : (priceRef.current += 10));
		addOns[1] &&
			(monthlyActive ? (priceRef.current += 2) : (priceRef.current += 20));
		addOns[2] &&
			(monthlyActive ? (priceRef.current += 2) : (priceRef.current += 20));
	};
	// გამოითვლება ფასი აქტიური გეგმისა და წლიური/თვიური გადახდის არჩევისას (Calculated price when selecting active plan and annual/monthly payment)
	useEffect(calcCardPrice, [activeCard, monthlyActive]);
	// ყოველ ჯერზე, როდესაც "დანამატები" შეიცვლება, გამოითვლება განახლებული ფასი (Each time the "add-ons" are changed, an updated price will be calculated)
	useEffect(() => {
		calcCardPrice();
		calculateAddOnsPrice();
	}, [addOns, calculateAddOnsPrice]);

	return (
		<>
			<nav>
				<ul className="mobile-navbar">
					<li>
						<NavLink to="/">
							<button disabled>1</button>
						</NavLink>
					</li>
					<li>
						<NavLink to="/second">
							<button disabled>2</button>
						</NavLink>
					</li>
					<li>
						<NavLink to="/third">
							<button disabled>3</button>
						</NavLink>
					</li>
					<li>
						<NavLink to="/fourth">
							<button disabled>4</button>
						</NavLink>
					</li>
				</ul>
				<ul className="desktop-navbar">
					<li>
						<NavLink to="/">
							<div>
								<button disabled>1</button>
							</div>
							<div>
								<p>STEP 1</p>
								<p>YOUR INFO</p>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/second">
							<div>
								<button disabled>2</button>
							</div>
							<div>
								<p>STEP 1</p>
								<p>SELECT PLAN</p>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/third">
							<div>
								<button disabled>3</button>
							</div>
							<div>
								<p>STEP 1</p>
								<p>ADD-ONS</p>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink to="/fourth">
							<div>
								<button disabled>4</button>
							</div>
							<div>
								<p>STEP 1</p>
								<p>SUMMARY</p>
							</div>
						</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<FirstPage />} />
				<Route
					path="/second"
					element={
						<SecondPage
							handleClick={() => setMonthlyActive(!monthlyActive)}
							monthlyActive={monthlyActive}
							handleActiveCard={handleActiveCard}
							handleSubmit={() => setPrice(priceRef.current)}
						/>
					}
				/>
				<Route
					path="/third"
					element={
						<ThirdPage
							monthlyActive={monthlyActive}
							handleAddOns={handleAddOns}
							handleSubmit={() => setPrice(priceRef.current)}
						/>
					}
				/>
				<Route
					path="/fourth"
					element={
						<FourthPage
							monthlyActive={monthlyActive}
							activeCard={activeCard}
							firstAddOn={addOns[0]}
							secondAddOn={addOns[1]}
							thirdAddOn={addOns[2]}
							price={price}
						/>
					}
				/>
				<Route
					path="/thankyou"
					element={
						<ThankYou
							handleClick={() => {
								setActiveCard(0);
								setAddOns([]);
								priceRef.current = 0;
								setPrice(priceRef.current);
							}}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default App;
