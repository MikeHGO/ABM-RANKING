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
import logo from './logo.png';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway, sans-serif',
			fontSize: '40px',
			wordWrap: 'break-word',
			letterSpacing: '0em',
			lineHeight: '54px',
			paddingLeft: '1rem',
		},
		subTitle: {
			fontSize: '15px',
			fontFamily: 'Raleway, sans-serif',
			lineHeight: '22px',
		},
		centerText: {
			textAlign: 'center',
		},
		navBar: {
			borderTop: '1px solid',
			maxWidth: '940px',
			width: '100%',
			paddingTop: '1rem',
			borderColor: theme.palette.common.black,
		},
		box: {
			padding: '2.55rem 0 0 0',
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
							{/* <img
								src="https://static.wixstatic.com/media/d16229_3caa52e2dfda4719a65a293d0edb2a05~mv2.png/v1/fill/w_159,h_159,al_c,usm_0.66_1.00_0.01/logo.png"
								alt="ABM LOGO"
							/> */}
							<img src={logo} alt="ABM LOGO" />
						</picture>
						<span className={styledClasses.centerText}>
							<Typography className={styledClasses.title}>
								ASSOCIAÇÃO BRASILEIRA DE MAHJONG
							</Typography>
							<span className={styledClasses.subTitle}>
								Promovendo o Mahjong no Brasil
							</span>
						</span>
					</a>
					{/* <Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						gridGap="1rem"
						className={styledClasses.navBar}
					>
						<Button
							size="large"
							focusRipple={false}
							onClick={() => handleClick('/ABM-RANKING/presencial')}
						>
							Ranking Presencial
						</Button>
						<Button
							size="large"
							focusRipple={false}
							onClick={() => handleClick('/ABM-RANKING/online')}
						>
							Ranking On-line
						</Button>
					</Box> */}
				</Box>
			</Container>
		</>
	);
}
