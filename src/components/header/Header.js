import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<header id={ this.props.id }>
					<h1 className="logo">Keddl</h1>
				</header>
			)
	}
}

export default Header;