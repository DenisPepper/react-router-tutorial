export const SubscribeForm = () => {
    return (
        <form
            className="subscribe-form subscribe-form-container"
            action="https://echo.htmlacademy.ru/"
            method="post"
        >
            <input className='subscribe-input subscribe-input--alter' type="email" placeholder="Ваш e-mail" required/>
            <button className="subscribe-button app-button app-button--large button--optional " type="submit">Подписаться</button>
        </form>
    );
}
