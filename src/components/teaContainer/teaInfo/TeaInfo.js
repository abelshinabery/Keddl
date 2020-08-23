import React from 'react';
import ReactDOM from 'react-dom';

class TeaInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={ this.props.id } className={ this.props.className }>
				<h2 className="teaName">{ this.props.name } tea</h2>
				<img className="teaPicture" src={ this.props.pic }/>
				<div className="teaCaffeine">{ this.props.caffeine !== 'free' ? `Caffeine: ${ this.props.caffeine } mg` : `Caffeine Free` }</div>
				<div className="teaBlurb">{ this.props.blurb }</div>
			</div>
		);
	}
}

export default TeaInfo;