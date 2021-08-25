import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleTable from "./components/SimpleTable";
import {
	Container,
	createStyles,
	makeStyles,
	Paper,
	Typography,
	Box,
	Button,
	Link,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: "Raleway,sans-serif",
			fontSize: "40px",
			wordWrap: "break-word",
			textAlign: "center",
			margin: "1rem",
		},
		navBar: {
			borderTop: "1px solid",
			maxWidth: "940px",
			width: "100%",
			paddingTop: "1rem",
			margin: ".8rem auto 0 auto",
			borderColor: theme.palette.common.black,
		},
		link: {
			fontFamily: "Raleway,sans-serif",
			marginTop: ".5rem",
			display: "inline-block",
		},
	})
);

const App2 = () => {
	const styledClasses = useStyles();

	const [rankingType, setRankingType] = useState("ON-LINE");

	const { isLoading, error, data } = useQuery("ranks", () =>
		axios(
			"https://script.google.com/macros/s/AKfycbxGVlqrgjXTn9BX6uycxXMUHaIzXQozazF1451Awu3M_lOo4vpA-GMdhwR2qaZ-KKhj/exec"
		)
	);

	if (error)
		return (
			<Typography className={styledClasses.title}>
				Erro na requisição da tabela de ranques, por favor recarregue a página.
			</Typography>
		);

	return (
		<>
			<Header />

			<Container>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					gridGap="1rem"
					className={styledClasses.navBar}
				>
					<Button
						size="large"
						focusRipple={false}
						onClick={() => setRankingType("PRESENCIAL")}
					>
						Ranking Presencial
					</Button>
					<Button
						size="large"
						focusRipple={false}
						onClick={() => setRankingType("ON-LINE")}
					>
						Ranking On-line
					</Button>
				</Box>

				<Paper elevation={0}>
					<Typography className={styledClasses.title}>
						RANKING {rankingType}
					</Typography>

					{isLoading === true ? (
						<Loading />
					) : (
						<SimpleTable
							data={
								rankingType === "ON-LINE"
									? data.data.data.online
									: data.data.data.presencial
							}
							categoria={rankingType}
						/>
					)}
					{isLoading === true ? null : (
						<Link
							href={`https://docs.google.com/spreadsheets/d/${
								rankingType === "ON-LINE"
									? "14P8xmKm5sZvtr1MPeynWfLboG8J2KAjOeNTTGrs3E9w"
									: "1zP5aWI0ewm5WPq_j_4BOA0U57kyAjtWdyxK7tXPdqrE"
							}/`}
							className={styledClasses.link}
						>
							Link para a tabela completa
						</Link>
					)}
				</Paper>
			</Container>

			<Footer />
		</>
	);
};

export default App2;
