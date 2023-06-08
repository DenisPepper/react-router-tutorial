import {IHotel} from "../../../settings";

interface HotelProps {
    hotel: IHotel;
}

export const Hotel = (props: HotelProps) => {
    const {hotel: {name, image, type, rating, minPrice, isFavorite, starsCount}} = props;

    return (
        <li className="hotel-item card">
            <h3 className='hotel-name'>{name}</h3>

            <div className="hotel-image">
                <img src={image} alt={`${type} ${name}`}/>
            </div>

            <dl className='hotel-properties card-set'>
                <dt className='hotel-type'>{type}</dt>
                <dd className='hotel-price'>От {minPrice} ₽</dd>
            </dl>

            <div className='hotel-buttons card-set'>
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
            </div>

            <div className='hotel-review card-set'>
                <div className='hotel-stars'>
                    {
                        Array.from({length: starsCount}).map(
                            () => <img src='./images/rating-star.svg'/>
                        )
                    }
                </div>

                <div className='hotel-rating'>
                    Рейтинг: <span>{rating}</span>
                </div>
            </div>
        </li>
    );
}
