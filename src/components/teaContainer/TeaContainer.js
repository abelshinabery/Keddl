import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TeaInfo from './teaInfo/TeaInfo';

class TeaContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teasInfo: [],
			teas: [],
			shouldHide: false
		}
	}

	componentDidMount() {

		axios
			.get(`/api/teas`)
			.then(res => {

				let teasInfo = res.data;
				let teas = [];

				for (let i=0; i<teasInfo.length; i++) {
					teas.push(
						<TeaInfo 
							key={ teasInfo[i]._id }
							id={ teasInfo[i].name }
							className="teaInfo"
							name={ teasInfo[i].name } 
							pic={ teasInfo[i].pic } 
							caffeine={ teasInfo[i].caffeine } 
							blurb={ teasInfo[i].blurb } />);
				}	



				this.setState({
					teasInfo: teasInfo,
					teas: teas,
					shouldHide: true
				});
			});
	}

	render() {
		return(
			<main id={ this.props.id }>
				<div className={ this.state.shouldHide ? 'hidden' : 'lds-ripple' }>
					<div></div>
					<div></div>
				</div>
				{ this.state.teas }
			</main>
			);
	}
}

export default TeaContainer;