import React, { useState } from 'react';
import { useQueries } from 'react-query';
import Tabletop from 'tabletop';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import SimpleTable from './components/SimpleTable';
import {
	Container,
	createStyles,
	makeStyles,
	Paper,
	Typography,
	Box,
	Button,
	Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			fontFamily: 'Raleway,sans-serif',
			fontSize: '40px',
			wordWrap: 'break-word',
			textAlign: 'center',
			margin: '1rem',
		},
		navBar: {
			borderTop: '1px solid',
			maxWidth: '940px',
			width: '100%',
			paddingTop: '1rem',
			margin: '.8rem auto 0 auto',
			borderColor: theme.palette.common.black,
		},
		link: {
			fontFamily: 'Raleway,sans-serif',
			marginTop: '.5rem',
			display: 'inline-block',
		},
	})
);

const App2 = () => {
	const styledClasses = useStyles();

	const [rankingType, setRankingType] = useState('ON-LINE');

	const sortArrayByName = (myArray, name) => {
		// Ordenando por string
		myArray.sort((a, b) => {
			let aName = a[name].toLowerCase();
			let bName = b[name].toLowerCase();
			if (aName < bName) {
				return -1;
			}
			if (aName > bName) {
				return 1;
			}
			return 0;
		});
	};

	const completeSort = (myArray) => {
		// Pegando os jogadores com pontuacao positiva
		const positivePts = myArray.filter((item) => item.pontos > 0);
		// jogadores com pontuacao igual a zero
		const zeroPts = myArray.filter((item) => item.pontos === 0);
		// ordenando por 'jogador' *nome
		sortArrayByName(zeroPts, 'jogador');
		// retorna os arrays concatenados
		return positivePts.concat(zeroPts);
	};

	// Tabletop config -> https://github.com/jsoma/tabletop
	const tableQueryConf = (tableKey) => {
		return {
			key: tableKey, // url da tabela compartilhada ONLINE
			simpleSheet: false, // retorna todas as tabelas
			prettyColumnNames: false, // formata o nome das colunas
			wanted: ['Ranking'], // array com as tabelas desejadas
			parseNumbers: true,
			orderby: 'pontos',
			reverse: true,
		};
	};

	const [
		{ isLoading, error, data },
		{ isLoading: isLoadingOff, error: errorOff, data: dataOff },
	] = useQueries([
		{
			queryKey: 'onlineRank',
			queryFn: () =>
				Tabletop.init(
					tableQueryConf('14P8xmKm5sZvtr1MPeynWfLboG8J2KAjOeNTTGrs3E9w') //get config, pass table key
				).then((data) => {
					return completeSort(data.Ranking.elements); //format data
				}),
		},
		{
			queryKey: 'offlineRank',
			queryFn: () =>
				Tabletop.init(
					tableQueryConf('1zP5aWI0ewm5WPq_j_4BOA0U57kyAjtWdyxK7tXPdqrE')
				).then((data) => {
					return completeSort(data.Ranking.elements);
				}),
		},
	]);

	if (error || errorOff)
		return (
			<Typography className={styledClasses.title}>
				Erro na requisição da tabela de ranques, por favor recarregue a página.
			</Typography>
		);

	// if (isLoading || isLoadingOff) return <Loading />;

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
						onClick={() => setRankingType('PRESENCIAL')}
					>
						Ranking Presencial
					</Button>
					<Button
						size="large"
						focusRipple={false}
						onClick={() => setRankingType('ON-LINE')}
					>
						Ranking On-line
					</Button>
				</Box>

				<Paper elevation={0}>
					<Typography className={styledClasses.title}>
						RANKING {rankingType}
					</Typography>

					{isLoading || isLoadingOff === true ? (
						<Loading />
					) : (
						<SimpleTable data={rankingType === 'ON-LINE' ? data : dataOff} />
					)}
					{isLoading || isLoadingOff === true ? null : (
						<Link
							href={`https://docs.google.com/spreadsheets/d/${
								rankingType === 'ON-LINE'
									? '14P8xmKm5sZvtr1MPeynWfLboG8J2KAjOeNTTGrs3E9w'
									: '1zP5aWI0ewm5WPq_j_4BOA0U57kyAjtWdyxK7tXPdqrE'
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
