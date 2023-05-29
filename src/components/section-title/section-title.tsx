
interface SectionTitleProps {
    primaryHeader: string;
    secondaryHeader: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const {primaryHeader, secondaryHeader} = props;

    return (
        <div className="section-title">
            <h2 className='section-primary-title'>
                {primaryHeader}
            </h2>
            <p className='section-secondary-title'>
                {secondaryHeader}
            </p>
        </div>
    );
}
