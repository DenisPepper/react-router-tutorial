import {Hotel} from "../hotel/hotel";
import {hotels} from "../../../settings";

export const Hotels = () => {
    return (
        <section className='hotels'>
            <ul className="hotels-list">
                {hotels.map((hotel) => <Hotel key={hotel.image} hotel={hotel}/>)}
            </ul>
        </section>
    );
}
