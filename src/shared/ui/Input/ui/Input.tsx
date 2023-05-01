import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps= Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' |'onBlur' >

interface InputProps extends HTMLInputProps{
    className?:string,
    value?:string,
    placeholder?:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    errorMessage?:string,
    inEmpty?:boolean,
    isDirty?:boolean,
    onBlur?:()=>void,
    id?:string
}

export const Input = memo((props:InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const {
        className,
        value,
        id,
        isDirty,
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
        onBlur?.();
    };
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <div className={cls.inputWrapper}>
                <label
                    htmlFor={id}
                    className={`${cls.label} 
                ${(isFocused) && cls.inpFocus} ${value && cls.inpFocus}
                ${(!isFocused && errorMessage) && cls.error}
                `}
                >
                    {placeholder}
                </label>
                <input
                    id={id}
                    className={`${cls.trueInput} `}
                    type={type}
                    placeholder={isFocused ? '' : placeholder}
                    value={value}
                    onFocus={focus}
                    onBlur={blur}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                <span className={cls.underline} />
            </div>
            <div className={`
            ${cls.span} 
            ${errorMessage && cls.error}`}
            >
                {errorMessage}
            </div>

        </div>
    );
});
