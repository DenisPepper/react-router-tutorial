interface PageHeader {
    text: string;
    isVisuallyHidden: boolean;
}

export const PageHeader = (props: PageHeader) => {
    const {text, isVisuallyHidden} = props;

    return (
        <h1 className={isVisuallyHidden ? 'visually-hidden' : ''}>
            {text}
        </h1>
    );
}
