import React from 'react';

const Text48 = ({ text = '', color = '#765738' }) => {
    return (
        <p
            style={{ color: color, lineHeight: '44px' }}
            className="jura fs48 fw500">
            {text}
        </p>
    );
};
export default Text48;
