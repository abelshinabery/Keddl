import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<footer id={ this.props.id }>
				<small>Copyright &copy; { new Date().getFullYear() } Abel Shinabery. All Rights Reserved </small>
			</footer>
		);
	}
}

export default Footer;