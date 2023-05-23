import React from 'react';

const Text32 = ({ text = '', color = '#483F36' }) => {
    return (
        <p style={{ color: color }} className="jura fs32 fw700">
            {text}
        </p>
    );
};
export default Text32;
