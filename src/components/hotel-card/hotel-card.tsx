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
                        () => <img src='./images/rating-star.svg'/>
                    )
                }
            </div>

            <div className='hotel-rating'>
                {`Рейтинг: ${rating}`}
            </div>
        </li>
    );
}
