import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function main({ portletNamespace, contextPath, portletElementId, configuration }) {
	ReactDOM.render(
		<h1>teste index</h1>,
		<App />,
		document.getElementById(portletElementId)
	);
}