import {
	Container,
	createStyles,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway,sans-serif',
			// fontSize: '40px',
			wordWrap: 'break-word',
			marginTop: '4rem',
		},
	})
);
export default function Error() {
	const styledClasses = useStyles();
	return (
		<>
			<Container>
				<Paper elevation={0}>
					<Typography
						align="center"
						variant="h1"
						className={styledClasses.title}
					>
						PÁGINA NÃO ENCONTRADA
					</Typography>
				</Paper>
			</Container>
		</>
	);
}
