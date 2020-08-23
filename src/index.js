import React from 'react';
import ReactDOM from 'react-dom';

import './sass/main.sass';

import Header from './components/header/Header';
import TeaContainer from './components/teaContainer/TeaContainer';
import Footer from './components/footer/Footer'


const lineHeight = 30;

class App extends React.Component {

	constructor(props) {
        super(props);
   	}

	render() {
		return(
			<div id="app">
				<Header id="header" />
				<TeaContainer id="teaContainer" />
				<Footer id="footer" />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
