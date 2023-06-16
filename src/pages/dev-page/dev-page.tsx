import {hotels} from "../../settings";
import {HotelCard} from "../../components/hotel-card/hotel-card";

export const DevPage = () => {
    return (
        <section style={{padding: 50}}>
            <section className='catalog'>
                <ul className="hotels-list">
                    {hotels.map((hotel) => <HotelCard key={hotel.image} hotel={hotel}/>)}
                </ul>
            </section>
        </section>
    );
}
