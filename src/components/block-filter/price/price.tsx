import {useEffect, useRef} from "react";

export const Price = () => {
    const refFrom = useRef<HTMLInputElement | null>(null);
    const refTo = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        !!refFrom.current && (refFrom.current.value = '0');
        !!refTo.current && (refTo.current.value = '9000');
    }, []);

    return (
        <div className='price-inputs'>
            <input
                className='price-input price--from'
                id='price-from'
                type='number'
                ref={refFrom}
                min={0}
                max={15000}
            />
            <label className='price-label' htmlFor='price-from'>от</label>

            <input
                className='price-input price--to'
                id='price-to'
                type='number'
                ref={refTo}
                min={0}
                max={15000}
            />
            <label className='price-label' htmlFor='price-to'>до</label>

        </div>
    );
}
