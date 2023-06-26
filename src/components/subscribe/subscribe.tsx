import {SectionTitle} from "../section-title/section-title";
import {useLocation} from "react-router-dom";
import {AppPath} from "../../settings";
import {SubscribeForm} from "../subscribe-form/subscribe-form";

export const Subscribe = () => {
    const location = useLocation();

    const cleared = location.pathname === AppPath.Catalog;

    return (
        <section className={`subscribe ${cleared ? 'subscribe--cleared' : ''}`}>
            <SectionTitle
                cssClass={`${cleared ? 'section-title' : 'section-title--inverted'}`}
                primaryHeader='Подпишитесь на рассылку'
                secondaryHeader='Только полезная информация и никакого спама, честное бойскаутское!'
            />

            <SubscribeForm />
        </section>
    );
}
