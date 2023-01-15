import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './SwitcherTheme.module.scss';

interface SwitcherThemeProps {
    className?:string,
}

export const SwitcherTheme = ({ className }:SwitcherThemeProps) => {
    const { toggleTheme } = useTheme();
    return (
        <label
            className={classNames(cls.SwitcherTheme, {}, [className])}
            htmlFor="langInput"
        >
            <input
                className={classNames(cls.input)}
                type="checkbox"
                onChange={toggleTheme}
                id="langInput"
            />
            <span className={classNames(cls.slider, {}, [])} />
        </label>
    );
};
