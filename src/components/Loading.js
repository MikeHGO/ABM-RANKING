import {
	Box,
	CircularProgress,
	createStyles,
	makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) =>
	createStyles({
		mainContainer: {
			marginTop: '5rem',
			position: 'relative',
		},
		// escuro: rgb(99,97,101), claro: rgb(204,199,199)
		loading: { position: 'absolute', color: 'rgb(99,97,101)' },
	})
);

export default function Loading() {
	const styledClasses = useStyles();

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				className={styledClasses.mainContainer}
			>
				<picture>
					<img src="/logo.webp" alt="ABM LOGO" />
				</picture>
				<CircularProgress
					thickness={4}
					size="15rem"
					// color="inherit"
					className={styledClasses.loading}
				/>
			</Box>
		</>
	);
}
