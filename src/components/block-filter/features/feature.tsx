import {IFeature} from "../../../settings";
import {useEffect, useRef} from "react";

interface FeatureProps {
    feature: IFeature;
}

export const Feature = (props: FeatureProps) => {
    const {feature: {name, view, isChecked}} = props;
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        !!ref.current && (ref.current.checked = isChecked);
    }, [])

    return (
        <label className='checkbox'>
            <input
                className='checkbox-input'
                type="checkbox"
                name={name}
                ref={ref}
            />
            <span className='checkbox-icon'></span>
            <span className='checkbox-view'>{view}</span>
        </label>
    );
}
