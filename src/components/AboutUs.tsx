import React from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import image1 from "../images/Rectangle 61.png";
import image2 from "../images/Rectangle 61 (1).png";
import image3 from "../images/Rectangle 61 (2).png";
import vector from "../images/Vector 17.png";

import aboutUs from "../images/Group 84.png";

const aboutCardsList = [
	{
		image: image1,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
	{
		image: image2,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
	{
		image: image3,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
	{
		image: image1,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
	{
		image: image2,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
	{
		image: image3,
		name: "Andrew Schultz",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
	},
];

const AboutUs = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const isMediumScreen1 = useMediaQuery(theme.breakpoints.between(1195, 1550));
	const isMediumScreen2 = useMediaQuery(theme.breakpoints.between(1550, 1660));

	let padding;
	let fontSize;

	if (isSmallScreen) {
		padding = "auto";
		fontSize = "2rem";
	} else if (isMediumScreen2) {
		padding = "10px";
		fontSize = "2rem";
	} else if (isMediumScreen1) {
		padding = "2rem";
		fontSize = "2.5rem";
	} else if (isLargeScreen || isExtraLargeScreen) {
		padding = "8rem 8rem 1rem 8rem";
		fontSize = "3rem";
	} else {
		padding = "auto";
		fontSize = "3rem";
	}
	return (
		<div>
			<Grid
				container
				sx={{ paddingTop: "2.5rem!important", justifyContent: "center" }}
			>
				<Grid
					item
					lg={6}
					xl={6}
					md={6}
					sm={12}
					xs={12}
					sx={{ padding: padding }}
				>
					<Typography
						variant="h3"
						sx={{
							textAlign: "left",
							paddingBottom: "1.5rem",
							fontWeight: "bold",
							fontSize: fontSize,
						}}
					>
						Lorem ipsum <span style={{ color: "#1565c0" }}>dolor</span> sit amet
						yo 👋
					</Typography>
					<Box
						sx={{
							overflow: "auto",
							height: "23rem",
							"&::-webkit-scrollbar": {
								width: "0",
							},
						}}
					>
						{aboutCardsList.map((item) => {
							return (
								<Card
									sx={{
										display: "flex",
										padding: "1rem",
										justifyContent: "center",
										alignItems: "center",
										mb: "1rem",
									}}
								>
									<Avatar>
										<img src={item.image} alt="image" />
									</Avatar>
									<Box sx={{ paddingLeft: "1rem" }}>
										<Typography sx={{ fontSize: "small", fontWeight: "bold" }}>
											{item.name}
										</Typography>
										<Typography sx={{ fontSize: "small" }}>
											{item.description}
										</Typography>
									</Box>
								</Card>
							);
						})}
					</Box>
				</Grid>
				<Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
					<img
						src={aboutUs}
						alt="about us"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutUs;
