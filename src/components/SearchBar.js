import {
	Component,
	PropTypes
} from 'react';

const style = {
	container: {
		marginTop: 13,
		height: 38,
		width: 200,
		display: 'inline-block',
		boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
		backgroundColor: 'rgba(255,255,255,0.12)',
		padding: '0px 10px'
	},

	input: {
		outline: 'none',
		border: '1px solid transparent',
		width: '100%',
		backgroundColor: 'transparent',
		fontSize: 24,
		color: 'rgba(255,255,255,0.87)'
	}
};

export default class SearhBar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func
	}

	handleKeyPress = e => {
		const { onSubmit } = this.props;
		if (e.key === 'Enter') {
			if (onSubmit) {
				onSubmit(this.state.value);
			}
		}
	}

	onChange = (event) => {
		this.setState({value: event.target.value});
	}

	render() {
		return(
			<div style={style.container}>
				<input type="text" style={style.input} placeholder="搜尋漫畫..." onKeyPress={this.handleKeyPress} onChange={this.onChange}/>
			</div>
		);
	}
}

