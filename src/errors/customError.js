import { EErrors } from './errorDictionary.js';

export class CustomError {
    static createError({ name = 'Error', cause, message, code = EErrors.DATABASE_ERROR }) {
        const error = new Error(message);
        error.name = name;
        error.code = code;
        error.cause = cause;
        throw error;
    }
}