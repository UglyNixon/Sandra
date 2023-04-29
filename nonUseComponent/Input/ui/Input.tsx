import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps= Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' |'onBlur' >

interface InputProps extends HTMLInputProps{
    className?:string,
    value?:string,
    onChange?:(e:React.ChangeEvent)=>void,
    errorMessage?:string,
    onBlur?:()=>void
}

export const Input = memo((props:InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const {
        className,
        value,
        onChange,
        errorMessage,
        placeholder,
        onBlur,
        type = 'text',
        ...otherProps
    } = props;
    const focus = (e:React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
    };
    const blur = () => {
        setIsFocused(false);
        onBlur();
    };
    const onChangeHandler = (e:React.ChangeEvent) => {
        onChange?.(e);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <label
                className={`${cls.label} 
                ${(isFocused || value) && cls.inpFocus}
                `}
            >
                {placeholder}
            </label>
            <input
                className={`${cls.input} ${errorMessage && cls.errorBorder}`}
                type={type}
                placeholder={isFocused ? '' : placeholder}
                value={value}
                onFocus={focus}
                onBlur={blur}
                onChange={onChangeHandler}
                {...otherProps}
            />
            {(!isFocused && errorMessage) && <span className={cls.error}>{errorMessage}</span>}
        </div>
    );
});
