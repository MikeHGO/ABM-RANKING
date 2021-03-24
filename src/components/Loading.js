import {
	Box,
	CircularProgress,
	createStyles,
	makeStyles,
} from '@material-ui/core';
import React from 'react';
import logo from './logo.png';

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
					{/* <img
						src="https://static.wixstatic.com/media/d16229_3caa52e2dfda4719a65a293d0edb2a05~mv2.png/v1/fill/w_159,h_159,al_c,usm_0.66_1.00_0.01/logo.png"
						alt="ABM LOGO"
					/> */}
					<img src={logo} alt="ABM LOGO" />
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
