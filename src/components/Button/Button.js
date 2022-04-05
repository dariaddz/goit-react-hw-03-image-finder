import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onLoadMore }) {
  return (
    <div className={s.Container}>
      <button className={s.Button} type="button" onClick={() => onLoadMore()}>
        Load more
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
