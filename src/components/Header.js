import {
	Box,
	Button,
	Container,
	createStyles,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '40px',
			wordWrap: 'break-word',
		},
		subTitle: {
			fontSize: '15px',
			fontFamily: 'Raleway,sans-serif',
		},
		centerText: {
			textAlign: 'center',
		},
		navBar: {
			borderTop: '1px solid',
			width: '100%',
			paddingTop: '1rem',
			borderColor: theme.palette.common.black,
		},
		box: {
			padding: '2.5rem 0',
		},
		links: {
			// apenas logo e titulo
			outline: 'none',
			color: 'inherit',
			textDecoration: 'none',
			// header completo
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			gridGap: '1rem',
		},
	})
);

export default function Header() {
	const styledClasses = useStyles();
	let history = useHistory();

	const handleClick = (path) => {
		history.push(path);
	};
	return (
		<>
			<Container>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					gridGap=".8rem"
					className={styledClasses.box}
				>
					<a
						href="https://www.mahjongbrasil.com.br/"
						className={styledClasses.links}
					>
						<picture>
							<img src="/logo.webp" alt="ABM LOGO" />
						</picture>
						<span className={styledClasses.centerText}>
							<Typography className={styledClasses.title}>
								ASSOCIAÇÃO BRASILEIRA DE MAHJONG
							</Typography>
							<span className={styledClasses.subTitle}>
								Divulgando o Mahjong no Brasil
							</span>
						</span>
					</a>
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
							onClick={() => handleClick('/presencial')}
						>
							Ranking Presencial
						</Button>
						<Button
							size="large"
							focusRipple={false}
							onClick={() => handleClick('/online')}
						>
							Ranking On-line
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
}
