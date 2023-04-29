import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps= Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' |'onBlur' >

interface InputProps extends HTMLInputProps{
    className?:string,
    value?:string,
    placeholder?:string,
    onChange?:(value:string)=>void,
    errorMessage?:string,
    onBlur?:()=>void,
    id?:string
}

export const Input = memo((props:InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const {
        className,
        value,
        id,
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
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(value);
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <div className={cls.inputWrapper}>
                <label
                    htmlFor={id}
                    className={`${cls.label} 
                ${(isFocused) && cls.inpFocus} ${value && cls.inpFocus}
                `}
                >
                    {placeholder}
                </label>
                <input
                    id={id}
                    className={`${cls.trueInput} ${errorMessage && cls.errorBorder}`}
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

            {(!isFocused && errorMessage) && <span className={cls.error}>{errorMessage}</span>}
        </div>
    );
});
