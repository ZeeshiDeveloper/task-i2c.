import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

import { useMediaQuery, useTheme } from "@mui/material";
import background from "../src/images/Background.png";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import Registration from "./components/Registration";

// Prime React Configeration add import files here
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex
import Footer from "./components/Footer";
function App() {
	const aboutRef = useRef(null);
	const registrationRef = useRef(null);
	const careerRef = useRef(null);

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const padding = isExtraSmallScreen
		? "1rem"
		: isSmallScreen
		? "5rem"
		: isMediumScreen
		? "3rem"
		: isLargeScreen
		? "4rem"
		: "1.5rem 200px";

	const scrollToSection = (ref: any) => {
		if (ref.current) {
			const elementTop =
				ref.current.getBoundingClientRect().top + window.scrollY;
			const offset = 64;

			window.scroll({
				top: elementTop - offset,
				behavior: "smooth",
			});
		}
	};

	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundColor: "#eff7ff",
			}}
		>
			<Navigation
				onAboutClick={() => scrollToSection(aboutRef)}
				onRegistrationClick={() => scrollToSection(registrationRef)}
				onCareerClick={() => scrollToSection(careerRef)}
			/>
			<div>
				<div ref={aboutRef} style={{ padding }}>
					<AboutUs />
				</div>
				<div ref={careerRef} style={{ padding }}>
					<Career />
				</div>
				<div ref={registrationRef} style={{ padding }}>
					<Registration />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
