import React from 'react';

const Text36 = ({ text = '', color = '#765738' }) => {
    return (
        <p style={{ color: color }} className="jura fs36 fw400">
            {text}
        </p>
    );
};
export default Text36;
