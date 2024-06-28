import { Box, Button, Grid } from "@mui/material";
import React from "react";
import i2CLogo from "../images/Logo.png"


interface IFooter {}
const Footer: React.FC<IFooter> = () => {

	const siteMapLinkList = [
		{ text: "FAQs"},
		{ text: "Privacy Policy"},
		{ text: "Other"}
	];

	return (
		<div className='lg:mx-8 xl:mx-8 md:xm-8 sm:mx-8 xs:mx-8' style={{margin:"0 3rem" , borderTop:"1px solid #CBCBCB"}}>
			<Grid container sx={{mt:"2rem",pb:"2rem"}}>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12} sx={{textAlign:"left"}}>
            <img
							src={i2CLogo}
							alt="Logo"
							style={{ marginRight: '10px', height: '30px', width: 'auto' }}
							/>
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
            <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent:"end" }}>
						{siteMapLinkList.map((item, index) => (
							<Button key={index} color="inherit" 
                            // onClick={item.onClick}
                            sx={{color:"rgba(0,0,0,.5)","&.MuiButton-root:hover":{color:"#000"}}}>
								{item.text}
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
            </Grid>
			</Grid>
		</div>
	);
};

export default Footer;
