import {IFeature} from "../../../settings";
import {useEffect, useRef} from "react";

interface FeatureProps {
    feature: IFeature;
}

export const Feature = (props: FeatureProps) => {
    const {feature: {name, view, isChecked, value}} = props;
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        !!ref.current && (ref.current.checked = isChecked);
    }, [])

    return (
        <label className='form-input'>
            <input
                className='input'
                type="checkbox"
                name={name}
                value={value}
                ref={ref}
            />
            <span className='input-icon checkbox-icon'></span>
            <span className='input-view'>{view}</span>
        </label>
    );
}
