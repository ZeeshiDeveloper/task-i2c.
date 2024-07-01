import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	Container,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
	IconButton,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import i2CLogo from "../images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

interface INavbarCallbacks {
	onAboutClick: () => void;
	onRegistrationClick: () => void;
	onCareerClick: () => void;
}

const Navigation: React.FC<INavbarCallbacks> = ({
	onAboutClick,
	onRegistrationClick,
	onCareerClick,
}) => {
	const theme = useTheme();

	const navLinks = [
		{ label: "About us", onClick: onAboutClick },
		{ label: "Registration", onClick: onRegistrationClick },
		{ label: "Career", onClick: onCareerClick },
	];
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const isMediumScreen1 = useMediaQuery(theme.breakpoints.between(1195, 1550));
	const isMediumScreen2 = useMediaQuery(theme.breakpoints.between(1550, 1660));

	let margin;

	if (isSmallScreen) {
		margin = "auto";
	} else if (isMediumScreen2) {
		margin = "0 220px";
	} else if (isMediumScreen1) {
		margin = "auto";
	} else if (isLargeScreen || isExtraLargeScreen) {
		margin = "0 235px 0 227px";
	} else {
		margin = "auto";
	}

	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => {
		setDrawerOpen(open);
	};

	//for small screen navigation bar (drawer) from mui
	const renderMobileMenu = (
		<Drawer
			anchor="right"
			open={drawerOpen}
			onClose={() => toggleDrawer(false)}
		>
			<List>
				{navLinks.map((link, index) => (
					<div key={index}>
						<ListItem
							button
							onClick={() => {
								link.onClick();
								toggleDrawer(false);
							}}
						>
							<ListItemText primary={link.label} />
						</ListItem>
						{index < navLinks.length - 1 && <Divider />}
					</div>
				))}
				<Divider />
				<Box sx={{ margin: "15px 30px" }}>
					<Button
						// color="inherit"
						variant="contained"
						sx={{ marginRight: "10px" }}
					>
						Contact us
					</Button>
				</Box>
			</List>
		</Drawer>
	);

	return (
		<AppBar
			position="sticky"
			style={{ top: 0, backgroundColor: "#eff7ff", zIndex: 1000 }}
		>
			<Container sx={{ margin: margin, minWidth: "-webkit-fill-available" }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
					>
						<img
							src={i2CLogo}
							alt="Logo"
							style={{ marginRight: "10px", height: "30px", width: "auto" }}
						/>
					</Typography>
					{/* Display menu icon for small screens */}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={() => toggleDrawer(true)}
						sx={{ display: { md: "none" }, color: "#000" }}
					>
						<MenuIcon />
					</IconButton>
					{/* Display regular navigation for medium and larger screens */}
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{navLinks.map((link, index) => (
							<Button
								key={index}
								color="inherit"
								onClick={link.onClick}
								sx={{
									color: "rgba(0,0,0,.5)",
									"&.MuiButton-root:hover": { color: "#000" },
								}}
							>
								{link.label}
							</Button>
						))}
						<Box sx={{ margin: "0 0 0 4rem" }}>
							<Button
								// color="inherit"
								variant="contained"
								sx={{ marginRight: "10px" }}
							>
								Contact us
							</Button>
						</Box>
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						{renderMobileMenu}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navigation;
