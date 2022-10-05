import React from 'react';
import MethodDelete from './MethodDelete';
import MethodGet from './MethodGet';
import MethodUpdate from './MethodUpdate';

function App() {

	return (
	<> 
	<MethodGet />
	<hr/>
	<MethodUpdate />
	<hr/>
	<MethodDelete />
	</>
	);
}

export default App;