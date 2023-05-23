import React from 'react';

const Text48 = ({ text = '', color = '#765738' }) => {
    return (
        <p style={{ color: color }} className="jura fs48 fw700 taCenter">
            {text}
        </p>
    );
};
export default Text48;
