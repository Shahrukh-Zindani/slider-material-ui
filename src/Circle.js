import React, {Component, PropTypes} from 'react';
import transitions from 'material-ui/styles/transitions';

const propTypes = {
	circleBackgroundColor: PropTypes.string,
};

const defaultProps = {
	circleBackgroundColor: 'white',
};

class Circle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: this.props.circleBackgroundColor,
			width: '10px',
			height:'10px',
			circlePosition: 0,
			border:"solid 2px #BDBDBD"

		};
	}

	handleClick() {
		console.log('handle click')
		// this.setState({backgroundColor: 'blue'})
	}

  handleDrag() {
      console.log('drag')
      const originalPosition = this.state.circlePosition;
      const differenceInPosition = 0.5;
      const newPosition = originalPosition + differenceInPosition;

      this.setState({ circlePosition: newPosition, backgroundColor: "#00BCD4", border: "solid 2px #00BCD4"});
    };

	handleMouseDown() {
		this.setState({width: "14px", height:"14px"})
	}

	handleMouseUp() {
		this.setState({width: "10px", height:"10px"})
	}

	render() {
	  const {
	  	circleBackgroundColor,
		} = this.props;

		const circleStyle = {
			// transition: transitions.easeOut('2000ms', 'all'),
      backgroundColor: this.state.backgroundColor,
      borderRadius: '50%',
      height: this.state.height,
      width: this.state.width,
      position: 'absolute',
      marginTop:'-8px',
     	border: this.state.border,
      left:this.state.circlePosition
		};
		return (
			<div 
				style = {circleStyle}
				draggable = "true"
				onClick = {this.handleClick.bind(this)}
				onMouseDown = {this.handleMouseDown.bind(this)}
				onMouseUp = {this.handleMouseUp.bind(this)}
				onDrag = {this.handleDrag.bind(this)}
			/>	
		)
	}
}
Circle.propTypes = propTypes;
Circle.defaultProps = defaultProps;
export default Circle