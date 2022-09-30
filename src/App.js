import React from 'react';
import {
    MethodDelete,
    MethodUpdate,
    MethodGet,
	MethodPost
} from './Methods';

function App() {

	return (
	<> 
	<h1>teste app</h1>
		<MethodPost/>
		<MethodGet/>
        <MethodUpdate/>
		<MethodDelete/>
	</>
	);
}

export default App;