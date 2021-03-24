import React from 'react';
import {
	Box,
	Container,
	createStyles,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faInstagram,
	faFacebookF,
	faDiscord,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logo from './mahjong_international.png';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '22px',
			wordWrap: 'break-word',
			width: '470px',
		},
		subtitle: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '22px',
			wordWrap: 'break-word',
		},
		copyrightText: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '14px',
			wordWrap: 'break-word',
		},
		listItem: {
			margin: '.7rem',
			fontSize: '2rem',
		},
		box: {
			padding: '2.5rem 0',
		},
		box2: {
			paddingBottom: '2.5rem',
		},
		links: {
			// apenas logo e titulo
			outline: 'none',
			color: 'inherit',
			textDecoration: 'none',
		},
	})
);

export default function Footer() {
	const styledClasses = useStyles();
	return (
		<>
			<Container>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					// flexDirection="column"
					gridGap="2rem"
					flexWrap="wrap"
					className={styledClasses.box}
				>
					<a href="http://mahjong-mil.org/" className={styledClasses.links}>
						<picture>
							{/* <img
								src="https://static.wixstatic.com/media/d16229_98629c1bb4d146aa819fcedf57458f23~mv2.png/v1/fill/w_375,h_196,al_c,lg_1/mahjong_international.png"
								alt="MIL LOGO"
							/> */}
							<img src={logo} alt="MIL LOGO" />
						</picture>
					</a>
					<Typography className={styledClasses.title}>
						A Associação Brasileira de Mahjong faz parte da Mahjong
						International League e da Associação Sul-americana de Mahjong.
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					gridGap="2rem"
					flexWrap="wrap"
					className={styledClasses.box2}
				>
					<a
						href="https://www.mahjongbrasil.com.br/"
						className={styledClasses.links}
					>
						<Typography className={styledClasses.subtitle}>
							Associação Brasileira de Mahjong
						</Typography>
					</a>
					<div>
						<span className={styledClasses.listItem}>
							<a
								href="http://youtube.com/mahjongbrasil"
								className={styledClasses.links}
							>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</span>
						<span className={styledClasses.listItem}>
							<a
								href="http://instagram.com/mahjongbrasil"
								className={styledClasses.links}
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</span>
						<span className={styledClasses.listItem}>
							<a
								href="http://facebook.com/mahjongbrasil"
								className={styledClasses.links}
							>
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
						</span>
						<span className={styledClasses.listItem}>
							<a
								href="https://twitter.com/mahjong_brasil"
								className={styledClasses.links}
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</span>
						<span className={styledClasses.listItem}>
							<a
								href="https://discord.gg/invite/0pgTugsQdd5GVz37"
								className={styledClasses.links}
							>
								<FontAwesomeIcon icon={faDiscord} />
							</a>
						</span>
					</div>
					<Typography className={styledClasses.copyrightText}>
						© 2021 Associação Brasileira de Mahjong
					</Typography>
				</Box>
			</Container>
		</>
	);
}
