import React from 'react';

const Text16 = ({ text = '', color = '#00529E' }) => {
    return (
        <p style={{ color: color }} className="jura fs16 fw500 taCenter">
            {text}
        </p>
    );
};
export default Text16;
