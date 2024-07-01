import {
	Backdrop,
	Box,
	CircularProgress,
	Grid,
	Typography,
	useTheme,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";
import "./registration.css";

import * as yup from "yup";

import registrationImage from "../images/Group 81.png";
interface FormData {
	name: string;
	company: string;
	email: string;
}
//using yup validation
const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
});
const Registration: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData | any>({
		resolver: yupResolver(schema),
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const toast = useRef<any>(null);
	const theme = useTheme();

	useEffect(() => {
		const storedData = localStorage.getItem("formData");
		if (storedData) {
			setIsSubmitted(true);
		}
	}, []);

	const onSubmit = async (data: FormData) => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			//form data store in local storage
			localStorage.setItem("formData", JSON.stringify(data));
			toast.current.show({
				severity: "success",
				summary: "Success",
				detail: "Registration Successfully!",
			});
			setIsSubmitted(true);
		}, 1000);
		console.log("data", data);
	};
	const onRegisterButtonClickedHandler = () => {
		localStorage.setItem("formData", "");
		setIsSubmitted(false);
	};
	return (
		<>
			<Backdrop
				sx={{ zIndex: theme.zIndex.drawer + 1 }}
				open={isLoading}
				data-testid={""}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<div>
				<Grid
					container
					sx={{ paddingTop: "1.5rem!important", justifyContent: "center" }}
				>
					<Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
						<img
							src={registrationImage}
							alt="about us"
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</Grid>
					<Grid
						item
						lg={6}
						xl={6}
						md={6}
						sm={12}
						xs={12}
						sx={{ display: "flex", alignItems: "center" }}
					>
						{isSubmitted ? (
							<Box>
								<Typography variant="h6" color="primary">
									You have already submitted the form.
								</Typography>

								<Button
									label="Register"
									onClick={onRegisterButtonClickedHandler}
									size="small"
								/>
							</Box>
						) : (
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="p-field">
									<label htmlFor="email">Your Email*</label>
									<InputText
										id="email"
										type="email"
										{...register("email")}
										className={errors.email ? "p-invalid" : ""}
										style={{ fontSize: "12px" }}
										placeholder="Enter email"
									/>
									{errors.email && (
										<Message
											severity="error"
											text={String(errors.email.message)}
										/>
									)}
								</div>
								<div className="p-field">
									<label htmlFor="phone">Your Phone</label>
									<InputText
										id="company"
										type="text"
										{...register("company")}
										className={errors.company ? "p-invalid" : ""}
										style={{ fontSize: "12px" }}
										placeholder="Enter company"
									/>
								</div>
								<div className="p-field">
									<label htmlFor="fullname">Name*</label>
									<InputText
										id="name"
										type="text"
										{...register("name")}
										className={errors.name ? "p-invalid" : ""}
										style={{ fontSize: "12px" }}
										placeholder="Enter name"
									/>
									{errors.name && (
										<Message
											severity="error"
											text={String(errors.name.message)}
										/>
									)}
								</div>
								<Button
									type="submit"
									label="Submit"
									className="p-button-raised"
									style={{ marginBottom: "1.5rem" }}
									size="small"
								/>
							</form>
						)}
						<Toast ref={toast} />
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Registration;
