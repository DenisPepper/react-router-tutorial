import {IHotelType} from "../../../settings";
import {useEffect, useRef} from "react";

interface HotelTypeProps {
    hotelType: IHotelType;
}

export const  HotelType = (props: HotelTypeProps) => {
    const {hotelType: {name, value, view, isChecked}} = props;
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        !!ref.current && (ref.current.checked = isChecked);
    }, [])

    return (
        <label className='form-input'>
            <input
                className='input'
                type="radio"
                name={name}
                ref={ref}
                value={value}
            />
            <span className='input-icon radio-icon'></span>
            <span className='input-view'>{view}</span>
        </label>
    );
}
