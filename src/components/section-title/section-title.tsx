
interface SectionTitleProps {
    cssClass?: string;
    sccSubscribe?: string;
    primaryHeader: string;
    secondaryHeader: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {cssClass='', primaryHeader, secondaryHeader, sccSubscribe=''} = props;

    return (
        <>
            <h2 className={`section-title ${cssClass}`}>
                {primaryHeader}
            </h2>
            <p className={`section-subtitle ${cssClass} ${sccSubscribe}`}>
                {secondaryHeader}
            </p>
        </>
    );
}
