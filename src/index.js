import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import App2 from './App2';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<QueryClientProvider client={queryClient}>
			<App2 />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
