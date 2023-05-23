import React from 'react';
import { TextField } from '@mui/material';

import './inputText.css';

const InputText = ({
    label = 'Input',
    type = 'text',
    value = '',
    setValue,
    isRequired = true,
}) => {
    return (
        <div className="cont-input">
            <TextField
                fullWidth
                label={label}
                type={type}
                variant="standard"
                required={isRequired}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </div>
    );
};

export default InputText;
