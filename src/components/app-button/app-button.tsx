import {ButtonHTMLAttributes} from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    cssClass: string;
}

export const AppButton = (props: AppButtonProps) => {
    const {cssClass, children, ...restProps} = props;

    return (
        <button
            className={`app-button ${cssClass}`}
            type="button"
            {...restProps}
        >
            {children}
        </button>
    )
}
