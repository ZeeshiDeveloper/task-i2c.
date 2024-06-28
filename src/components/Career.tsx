import { Box, Grid, Typography } from "@mui/material";
import { Carousel } from "primereact/carousel";
import image1 from "../images/Padlock_perspective_matte.png";
import image2 from "../images/Group 73.png";
import image3 from "../images/Group 74.png";
import vector from "../images/Vector 17.png";
import "./career.css";

import carouselImage1 from "../images/Microsoft logo.png";
import carouselImage2 from "../images/Vector.png";
import carouselImage3 from "../images/g3.png";

const cardOptionsList = [
	{
		image: image1,
		name: "24/7 Support",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		image: image2,
		name: "1000+ of reviews",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		image: image3,
		name: "And more!",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];
const items = [
	{
		id: "1000",
		image: carouselImage1,
	},
	{
		id: "1001",
		image: carouselImage2,
	},
	{
		id: "1002",
		image: carouselImage3,
	},
	{
		id: "1003",
		image: carouselImage1,
	},
	{
		id: "1004",
		image: carouselImage2,
	},
	{
		id: "1005",
		image: carouselImage3,
	},
	{
		id: "1006",
		image: carouselImage1,
	},
	{
		id: "1007",
		image: carouselImage2,
	},
	{
		id: "1008",
		image: carouselImage3,
	},
];

const Career = () => {
	const carouselTemplate = (item: any) => {
		return <img src={item.image} alt="" />;
	};

	return (
		<Grid sx={{ pt: "2rem" }}>
			<Grid
				container
				sx={{
					display: "flex",
					padding: "2rem",
					justifyContent: "center",
					mb: "1rem",
					borderRadius: "10px",
					background: "#fff",
				}}
			>
				{cardOptionsList.map((item) => {
					return (
						<Grid
							item
							lg={4}
							xl={4}
							md={4}
							sm={12}
							xs={12}
							sx={{ display: "flex", justifyContent: "space-around" }}
						>
							<img src={item.image} alt="image" />
							<Box sx={{ paddingLeft: "1rem" }}>
								<Typography
									sx={{
										fontSize: "small",
										fontWeight: "bold",
										color: "#F89D21",
									}}
								>
									{item.name}
								</Typography>
								<Typography sx={{ fontSize: "small" }}>
									{item.description}
								</Typography>
							</Box>
						</Grid>
					);
				})}
			</Grid>

			<Box sx={{ pt: "2rem", textAlign: "center" }}>
				<Typography variant="h3" sx={{ fontWeight: "bold" }}>
					Trusted by
				</Typography>
				<img src={vector} alt="ventor" />
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Typography sx={{ width: "24rem" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
						tristique senectus dui pharetra sit.
					</Typography>
				</Box>
			</Box>
			<Grid sx={{ mt: "3rem" }}>
				<Carousel
					value={items}
					numVisible={3}
					numScroll={3}
					itemTemplate={carouselTemplate}
					className="carousel"
				/>
			</Grid>
		</Grid>
	);
};

export default Career;
