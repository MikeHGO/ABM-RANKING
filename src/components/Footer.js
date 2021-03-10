import {
	Box,
	Container,
	createStyles,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '22px',
			wordWrap: 'break-word',
			width: '470px',
		},
		box: {
			padding: '2.5rem 0',
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
							<img src="/mahjong_international.webp" alt="MIL LOGO" />
						</picture>
					</a>
					<Typography className={styledClasses.title}>
						A Associação Brasileira de Mahjong faz parte da Mahjong
						International League e da Associação Sul-americana de Mahjong.
					</Typography>
				</Box>
			</Container>
		</>
	);
}
