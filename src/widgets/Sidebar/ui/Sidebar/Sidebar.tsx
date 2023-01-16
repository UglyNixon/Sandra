import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?:string,
    collapsed:boolean,

}

export const Sidebar = ({
    className, collapsed,
}:SidebarProps) => (
    <div
        data-testid="sidebar"
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
        {!collapsed
                && (
                    <div className={cls.content}>
                        <LangSwitcher />
                    </div>
                )}

    </div>
);
