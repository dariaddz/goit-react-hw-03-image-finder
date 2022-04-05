import React from 'react';
import s from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button className={s.Button} type="button">
        Это кнопка
      </button>
    );
  }
}

export default Button;
