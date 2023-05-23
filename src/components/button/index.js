import React from 'react';
import Text48fw700 from '../text/Text48fw700';

import './button.css';

const Button = ({ engText = '', rusText = '', color = '#009E82' }) => {
    return (
        <div className="cont-button" style={{ '--border_color': color }}>
            <Text48fw700 text={engText} color={color} />
            <Text48fw700 text={rusText} color={color} />
        </div>
    );
};

export default Button;
