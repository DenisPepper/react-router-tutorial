
interface SectionTitleProps {
    cssClass?: string;
    primaryHeader: string;
    secondaryHeader: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {cssClass='', primaryHeader, secondaryHeader} = props;

    return (
        <>
            <h2 className={cssClass}>
                {primaryHeader}
            </h2>
            <p className={`section-subtitle`}>
                {secondaryHeader}
            </p>
        </>
    );
}
