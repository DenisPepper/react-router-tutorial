interface CatalogViewModeProps {
    mode: 'grid' | 'display' | 'list';
    isChecked: boolean;
}

export const CatalogViewMode = (props: CatalogViewModeProps) => {
    const {mode, isChecked} = props;

    return (
        <button
            className={`view-mode view-mode--${mode} ${isChecked ? 'view-mode--checked' : ''}`}
               onClick={() => console.log(mode)}
        />
    );
}
