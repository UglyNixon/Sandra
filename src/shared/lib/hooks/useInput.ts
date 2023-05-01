import React, { useEffect, useRef, useState } from 'react';

export interface IValidations extends Object{
    isEmpty?:boolean,
    isEmail?:boolean,
    minLength?:number,
    maxLength?:number
}
type Errors = Record<string, boolean >
const validationMessages = (
    errors:Errors,
    min?:number,
    max?:number,
) :string => {
    const {
        isEmptyError, minLengthError, isEmailError, MaxLengthError,
    } = errors;
    if (isEmptyError) return 'Поле обязательно к заполнению';
    if (isEmailError) return 'Некорректный Email';
    if (min && minLengthError) return `Минимальное количество символов ${min}`;
    if (max && MaxLengthError) return `Максимальное количество символов ${max}`;
    if (!isEmailError && !isEmptyError) return '';
    return '';
};
export const useValidation = (value:string, validations:IValidations) => {
    const [isEmptyError, setEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [isEmailError, setEmailError] = useState(false);
    const [MaxLengthError, setMaxLengthError] = useState(true);
    const min = useRef<number>(0);
    const max = useRef<number>(0);
    // eslint-disable-next-line
    const REG = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    useEffect((a = value) => {
        const keys = Object.keys(validations);
        if (keys.includes('minLength')
            || keys.includes('isEmpty')
            || keys.includes('maxLength')
            || keys.includes('isEmail')) {
            Object.keys(validations).forEach((validation) => {
                switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError(true);
                    } else {
                        setMinLengthError(false);
                    }
                    min.current = validations[validation];
                    break;
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLengthError(true);
                    } else {
                        setMaxLengthError(false);
                    }
                    max.current = validations[validation];
                    break;
                case 'isEmpty':
                    // value ? setEmptyError(false) : setEmptyError(true);
                    // ESLint: Expected an assignment or function call and instead saw an expression. (no-unused-expressions)  ;
                    // and void not work???!
                    if (value) {
                        setEmptyError(false);
                    } else setEmptyError(true);
                    break;
                case 'isEmail':
                // eslint-disable-next-line no-control-regex
                    if (REG.test(String(value).toLowerCase())) {
                        setEmailError(false);
                    } else {
                        setEmailError(true);
                    }
                    break;
                default: break;
                }
            });
        }
    }, [value, REG, validations]);
    const errormessage = validationMessages({
        isEmptyError, minLengthError, isEmailError, MaxLengthError,
    }, min.current, max.current);
    return {
        isEmptyError, minLengthError, isEmailError, MaxLengthError, errormessage,
    };
};

export const useInput = (initialValue:string, validations:IValidations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onBlur = () => {
        setIsDirty(true);
    };
    if (!isDirty) valid.errormessage = '';
    return {
        value,
        onChange,
        onBlur,
        ...valid,
        isDirty,

    };
};
