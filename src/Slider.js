import React, { Component, PropTypes } from 'react';
import Line from './Line';
import Circle from './Circle';


const propTypes = {
  circleBackgroundColor: PropTypes.string,
};

const Slider = (props) => {
  const { circleBackgroundColor } = props;
  const rootStyle = {
    position: 'relative',
    width: '100%',
    marginLeft:'10px'
  };
    return (
      <div style = {rootStyle}>
        <Line/>
        <Circle circleBackgroundColor = {circleBackgroundColor}/>
      </div>
    );
}

Slider.propTypes =  propTypes;
export default Slider;
