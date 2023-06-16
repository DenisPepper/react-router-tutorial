import {IHotel} from "../../settings";

interface HotelProps {
    hotel: IHotel;
}

export const HotelCard = (props: HotelProps) => {
    const {hotel: {name, image, type, rating, minPrice, isFavorite, starsCount}} = props;

    return (
        <li>
            <h3 className='hotel-name'>{name}</h3>

            <img className='hotel-photo' src={image} alt={`${type} ${name}`}/>

            <dl className='hotel-properties'>
                <div className='hotel-property'>
                    <dt className='hotel-property-key'>{type}</dt>
                    <dd className='hotel-property-value'>{`От ${minPrice} ₽`}</dd>
                </div>
            </dl>

            <button
                className='app-button'
                type="button"
            >
                подробнее
            </button>

            <button
                className={`app-button ${isFavorite ? 'button--selected' : 'button--optional'}`}
                type="button"
            >
                {isFavorite ? 'в избранном' : 'в избранное'}
            </button>

            <div className='hotel-stars'>
                {
                    Array.from({length: starsCount}).map(
                        () =>
                            <svg className='star' aria-hidden='true' width="18" height="17" viewBox="0 0 18 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0L11.1 6.5H18L12.4 10.5L14.6 17L9 13L3.4 17L5.6 10.5L0 6.5H6.9L9 0Z"
                                      fill="#83B3D3"/>
                            </svg>
                    )
                }
                <span className="visually-hidden">{`Количество звезд отеля: ${starsCount}`}</span>
            </div>

            <div className='hotel-rating'>
                {`Рейтинг: ${rating}`}
            </div>
        </li>
    );
}
