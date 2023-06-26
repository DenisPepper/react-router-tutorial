interface PageTitleProps {
    text: string;
    isVisuallyHidden: boolean;
    classCss?: string;
}

export const PageTitle = (props: PageTitleProps) => {
    const {text, isVisuallyHidden, classCss} = props;

    return (
        <h1 className={isVisuallyHidden ? 'visually-hidden' : classCss}>
            {text}
        </h1>
    );
}
