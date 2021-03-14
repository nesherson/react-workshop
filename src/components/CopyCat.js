import React from 'react';
import { styles } from '../styles.js';
import PropTypes from 'prop-types';

const images = {
  copycat:
    'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat:
    'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;

    return (
      <div styles={styles.divStyles}>
        <h1 styles={{ marginBottom: '80px' }}>
          Copy Cat {!this.props.name ? 'Tom' : this.props.name}
        </h1>
        <input
          type='text'
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <img
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying ? this.props.input : ''}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  name: PropTypes.string,
  copying: PropTypes.bool,
  toggleTape: PropTypes.func,
  input: PropTypes.string,
  handleChange: PropTypes.func,
};
