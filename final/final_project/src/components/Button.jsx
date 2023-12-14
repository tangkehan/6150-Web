import React from 'react';
import './Button.css';

const Button = ({type, visual, text, className, onClick}) => {
    if (visual === 'link'){
        return (
            <a href="#" type={type} className = {className} onClick = {onClick}>
              {text}
            </a>
          );
    }

    else{
        return (
            <button type={type} className = {className} onClick = {onClick}>
                {text}
          </button>
        );
    }

}

export default Button;