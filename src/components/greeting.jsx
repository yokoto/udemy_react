import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return (<div>Hi {props.name}</div>);
}

// 型の指定
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
