import {
    CORRECT_CHARACTERS_OBJ,
    CORRECT_CHARACTERS,
} from '../constants/correctCharacters';
import { EMAIL_REGEXP } from '../constants/emailReg';
import { ERROR } from '../constants/error';

export const loginValidation = (login) => {
    if (login === '' || !login.length) {
        return {
            isErr: true,
            title: ERROR.FILL_OUT_THE_FIELDS,
            description: ERROR.NOT_ALL_FIELDS_ARE_COMPLETE,
        };
    }
    if (
        CORRECT_CHARACTERS_OBJ.CORRECT_SPEC_SYMBOLS.includes(login[0]) ||
        CORRECT_CHARACTERS_OBJ.CORRECT_NUMBERS.includes(login[0])
    ) {
        return {
            isErr: true,
            title: ERROR.INVALID_USERNAME,
            description:
                ERROR.UNACCEPTABLE_SYMBOLS_AT_THE_BEGINNING_OF_A_STRING,
        };
    }
    for (let i = 0; i < login.length; i++) {
        if (!CORRECT_CHARACTERS.includes(login[i])) {
            return {
                isErr: true,
                title: ERROR.INVALID_USERNAME,
                description: ERROR.UNACCEPTABLE_SYMBOLS,
            };
        }
    }
    if (login.length < 4 || login.length > 21) {
        return {
            isErr: true,
            title: ERROR.INVALID_USERNAME,
            description: ERROR.USERNAME_LENGTH,
        };
    }
    return { isErr: false };
};
export const passwordValidation = (password) => {
    if (password === '' || !password.length) {
        return {
            isErr: true,
            title: ERROR.FILL_OUT_THE_FIELDS,
            description: ERROR.NOT_ALL_FIELDS_ARE_COMPLETE,
        };
    }
    if (
        CORRECT_CHARACTERS_OBJ.CORRECT_SPEC_SYMBOLS.includes(password[0]) ||
        CORRECT_CHARACTERS_OBJ.CORRECT_NUMBERS.includes(password[0])
    ) {
        return {
            isErr: true,
            title: ERROR.INVALID_PASSWORD,
            description:
                ERROR.UNACCEPTABLE_SYMBOLS_AT_THE_BEGINNING_OF_A_STRING,
        };
    }
    for (let i = 0; i < password.length; i++) {
        if (!CORRECT_CHARACTERS.includes(password[i])) {
            return {
                isErr: true,
                title: ERROR.INVALID_PASSWORD,
                description: ERROR.UNACCEPTABLE_SYMBOLS,
            };
        }
    }
    if (password.length < 8) {
        return {
            isErr: true,
            title: ERROR.INVALID_PASSWORD,
            description: ERROR.PASSWORD_LENGTH,
        };
    }
    return { isErr: false };
};

export const comparePasswords = (password, repeatPassword) => {
    if (!password.includes(repeatPassword)) {
        return {
            isErr: true,
            title: ERROR.PASSWORDS_DO_NOT_MATCH,
            description: ERROR.PASSWORD_MUST_BE_THE_SAME,
        };
    }
    return {
        isErr: false,
    };
};

export const emailValidation = (email) => {
    if (email === '' || !email.length) {
        return {
            isErr: true,
            title: ERROR.FILL_OUT_THE_FIELDS,
            description: ERROR.NOT_ALL_FIELDS_ARE_COMPLETE,
        };
    }
    if (!EMAIL_REGEXP.test(email)) {
        return {
            isErr: true,
            title: ERROR.INVALID_EMAIL,
            description: ERROR.INVALID_EMAIL_FORMAT,
        };
    }
    return {
        isErr: false,
    };
};
