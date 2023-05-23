import React from 'react';

const HeaderText = ({ text = '', color = '#483F36' }) => {
    return (
        <p style={{ color: color }} className="jura fs80 fw700">
            {text}
        </p>
    );
};
export default HeaderText;
