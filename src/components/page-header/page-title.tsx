interface PageTitleProps {
    text: string;
    isVisuallyHidden: boolean;
}

export const PageTitle = (props: PageTitleProps) => {
    const {text, isVisuallyHidden} = props;

    return (
        <h1 className={isVisuallyHidden ? 'visually-hidden' : ''}>
            {text}
        </h1>
    );
}
