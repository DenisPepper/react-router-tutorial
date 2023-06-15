import {Hotel} from "../hotel/hotel";
import {hotels} from "../../../settings";

export const Hotels = () => {
    return (
        <section className='catalog'>
            <ul className="hotels-list">
                {hotels.map((hotel) => <Hotel key={hotel.image} hotel={hotel}/>)}
            </ul>
        </section>
    );
}
