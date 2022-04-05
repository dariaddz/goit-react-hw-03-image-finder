import React from 'react';
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
