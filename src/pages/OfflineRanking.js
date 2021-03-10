import { Container, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import Loading from '../components/Loading';
import SimpleTable from '../components/SimpleTable';

function OfflineRanking() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	// Fetching data do google sheets no primeiro load
	useEffect(() => {
		const completeSort = (myArray) => {
			// Pegando os jogadores com pontuacao positiva
			const positivePts = myArray.filter((item) => item.pontos > 0);
			// jogadores com pontuacao igual a zero
			const zeroPts = myArray.filter((item) => item.pontos === 0);
			sortArrayByName(zeroPts, 'jogador');
			// retorna os arrays concatenados
			return positivePts.concat(zeroPts);
		};
		setIsLoading(true);
		// primeiramente publicar a tabela na web
		Tabletop.init({
			key: '1zP5aWI0ewm5WPq_j_4BOA0U57kyAjtWdyxK7tXPdqrE', // url da tabela compartilhada PRESENCIAL
			simpleSheet: false, // retorna todas as tabelas
			prettyColumnNames: false, // formata o nome das colunas
			wanted: ['Ranking'], // array com as tabelas desejadas
			parseNumbers: true,
			orderby: 'pontos',
			reverse: true,
		})
			.then((data) => {
				setData(completeSort(data.Ranking.elements));
				setIsLoading(false);
			})
			.catch((err) => console.warn(err));
	}, []);

	if (isLoading) {
		return <Loading />;
	} else {
		return (
			<>
				<Container>
					<Paper elevation={0}>
						<SimpleTable data={data} />
					</Paper>
				</Container>
			</>
		);
	}
}

export default OfflineRanking;
