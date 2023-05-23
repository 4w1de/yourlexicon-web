import React from 'react';

const Text40 = ({ text = '', color = '#483F36' }) => {
    return (
        <p style={{ color: color }} className="jura fs40 fw700 taCenter">
            {text}
        </p>
    );
};
export default Text40;
