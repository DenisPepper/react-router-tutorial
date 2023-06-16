import {hotels} from "../../../settings";
import {HotelCard} from "../../hotel-card/hotel-card";

export const Hotels = () => {
    return (
        <section className='catalog'>
            <ul className="hotels-list">
                {hotels.map((hotel) => <HotelCard key={hotel.image} hotel={hotel}/>)}
            </ul>
        </section>
    );
}
