import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
	head: {
		fontSize: 18,
		border: 'none',
	},
	body: {
		fontSize: 18,
		border: 'none',
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		'&:nth-of-type(-n+8)': {
			backgroundColor: 'lightblue',
		},
	},
}))(TableRow);

export default function SimpleTable({ data }) {
	return (
		<TableContainer
			component={Paper}
			elevation={0}
			style={{ marginBottom: '0rem' }}
		>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="center">Posição</StyledTableCell>
						<StyledTableCell align="center">Jogador</StyledTableCell>
						{data[0].id === undefined ? null : (
							<StyledTableCell align="center">ID do Tenhou</StyledTableCell>
						)}
						<StyledTableCell align="center">Pontos</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<StyledTableRow key={row.jogador}>
							<StyledTableCell align="center" component="th" scope="row">
								{index + 1}
							</StyledTableCell>
							<StyledTableCell align="center">{row.jogador}</StyledTableCell>
							{data[0].id === undefined ? null : (
								<StyledTableCell align="center">{row.id}</StyledTableCell>
							)}
							<StyledTableCell align="center">{row.pontos}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
