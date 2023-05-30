
interface SectionTitleProps {
    cssClass?: string;
    primaryHeader: string;
    secondaryHeader: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {cssClass='', primaryHeader, secondaryHeader} = props;

    return (
        <div>
            <h2 className={`section-primary-title ${cssClass}`}>
                {primaryHeader}
            </h2>
            <p className={`section-secondary-title ${cssClass}`}>
                {secondaryHeader}
            </p>
        </div>
    );
}
