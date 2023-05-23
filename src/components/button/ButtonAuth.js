import React from 'react';
import Text48 from '../text/Text48fw700';
import Text36 from '../text/Text36';

import './button.css';

const ButtonAuth = ({ text = '', authorization, isRestore = false }) => {
    return (
        <button className="cont-button-auth" onClick={() => authorization()}>
            {isRestore ? (
                <Text36 text={text} color="#00529E" />
            ) : (
                <Text48 text={text} color="#00529E" />
            )}
        </button>
    );
};

export default ButtonAuth;
