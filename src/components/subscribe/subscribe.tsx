import {SectionTitle} from "../section-title/section-title";

export const Subscribe = () => {
    return (
        <section className='subscribe'>
            <SectionTitle
                cssClass='section-title--inverted'
                primaryHeader='Подпишитесь на рассылку'
                secondaryHeader='Только полезная информация и никакого спама, честное бойскаутское!'
            />

            <form
                className="subscribe-form"
                action="https://echo.htmlacademy.ru/"
                method="post"
            >
                <label>
                    <input type="email" placeholder="Ваш e-mail" required/>
                </label>
                <button className="subscribe-button" type="submit">Подписаться</button>
            </form>
        </section>
    );
}
