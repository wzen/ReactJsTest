import React, { PropTypes } from 'react';

class Todo extends React.Component {
  render () {
    return(
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: this.props.completed ? 'line-height' : 'none' }}
      >
        {this.props.text}
      </li>
    );
  };
}

Todo.propType = {
  onClick: PropTypes.func.isRequired,
  complated: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;